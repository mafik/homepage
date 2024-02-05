function DecompressSavToGvas(array_buffer) {
  let data_view = new DataView(array_buffer);
  let uncompressed_size = data_view.getUint32(0, true);
  let compressed_size = data_view.getUint32(4, true);
  let magic = "";
  for (let i = 8; i < 11; i++) {
    magic += String.fromCharCode(data_view.getUint8(i));
  }
  let rounds = String.fromCharCode(data_view.getUint8(11));
  if (magic !== "PlZ") {
    throw "Magic is not PlZ";
  }

  if (rounds === "0") {
    return array_buffer.slice(12);
  } else if (rounds === "1") {
    let decompressed = pako.inflate(array_buffer.slice(12));
    return decompressed;
  } else if (rounds === "2") {
    let decompressed = pako.inflate(pako.inflate(array_buffer.slice(12)));
    return decompressed;
  } else {
    throw "Invalid number of rounds";
  }
}

// Find UInt8Array in another UInt8Array
function BoyerMooreSearch(haystack, needle, start_index = 0) {
  let bad_char_skip = new Uint32Array(256);
  let last = needle.length - 1;
  let max_offset = haystack.length - needle.length;
  let last_byte = needle[last];
  for (let i = 0; i < 256; i++) {
    bad_char_skip[i] = needle.length;
  }
  for (let i = 0; i < last; i++) {
    bad_char_skip[needle[i]] = last - i;
  }
  let i = start_index;
  while (i <= max_offset) {
    let j = last;
    while (haystack[i + j] === needle[j]) {
      if (j === 0) {
        return i;
      }
      j--;
    }
    i += bad_char_skip[haystack[i + last]];
  }
  return -1;
}

function StrToUint8Array(str) {
  let arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}

function ReadStringUtf8(uint8_array, index, length) {
  let str = "";
  // Ignore the null terminator
  for (let i = 0; i < length - 1; i++) {
    str += String.fromCharCode(uint8_array[index + i]);
  }
  return [index + length, str];
}

function ReadStringUtf16(uint8_array, index, length) {
  let str = "";
  // Ignore the null terminator
  for (let i = 0; i < length - 1; i++) {
    str += String.fromCharCode(uint8_array[index + i * 2] | (uint8_array[index + i * 2 + 1] << 8));
  }
  return [index + length * 2, str];
}

function ReadString(uint8_array, index) {
  let data_view = new DataView(uint8_array.buffer);
  let length = data_view.getInt32(index, true);
  index += 4;
  if (length >= 0) {
    return ReadStringUtf8(uint8_array, index, length);
  } else {
    return ReadStringUtf16(uint8_array, index, -length);
  }
}

function ReadUint32(uint8_array, index) {
  let data_view = new DataView(uint8_array.buffer);
  let value = data_view.getUint32(index, true);
  return [index + 4, value];
}

function ReadUint64(uint8_array, index) {
  let data_view = new DataView(uint8_array.buffer);
  let value = Number(data_view.getBigUint64(index, true));
  return [index + 8, value];
}

function ReadInt64(uint8_array, index) {
  let data_view = new DataView(uint8_array.buffer);
  let value = Number(data_view.getBigInt64(index, true));
  return [index + 8, value];
}

function SkipOptionalUUID(uint8_array, index) {
  if (uint8_array[index] === 0) {
    return index + 1;
  } else {
    return index + 17;
  }
}

function ReadUUID(uint8_array, index) {
  return [index + 16, uint8_array.slice(index, index + 16)];
}

function ReadStruct(uint8_array, index) {
  let struct = {};
  let struct_type;
  [index, struct_type] = ReadString(uint8_array, index);
  index += 16; // skip UUID
  index = SkipOptionalUUID(uint8_array, index);
  if (struct_type == 'Vector') {
    let data_view = new DataView(uint8_array.buffer);
    struct.X = data_view.getFloat64(index, true);
    index += 8;
    struct.Y = data_view.getFloat64(index, true);
    index += 8;
    struct.Z = data_view.getFloat64(index, true);
    index += 8;
  } else if (struct_type == 'DateTime') {
    return ReadUint64(uint8_array, index);
  } else if (struct_type == 'Guid') {
    return ReadUUID(uint8_array, index);
  } else {
    index = ReadStructProperties(struct, uint8_array, index);
  }
  return [index, struct];
}

function ReadStructProperties(struct, uint8_array, index) {
  let data_view = new DataView(uint8_array.buffer);
  while (true) {
    let property_name = "", property_type = "", size = 0;
    [index, property_name] = ReadString(uint8_array, index);
    if (property_name === "None") {
      break;
    }
    [index, property_type] = ReadString(uint8_array, index);
    [index, size] = ReadUint64(uint8_array, index);
    // console.log('Found property', property_name, property_type, size);
    switch (property_type) {
      case "IntProperty":
        if (size != 4) {
          throw `Invalid size ${size} for IntProperty ${property_name}`;
        }
        index = SkipOptionalUUID(uint8_array, index);
        struct[property_name] = data_view.getInt32(index, true);
        index += size;
        break;
      case "StrProperty":
        index = SkipOptionalUUID(uint8_array, index);
        [index, struct[property_name]] = ReadString(uint8_array, index);
        break;
      case "StructProperty":
        [index, struct[property_name]] = ReadStruct(uint8_array, index);
        break;
      case "Int64Property":
        index = SkipOptionalUUID(uint8_array, index);
        [index, struct[property_name]] = ReadInt64(uint8_array, index);
        break;
      case "FloatProperty":
        index = SkipOptionalUUID(uint8_array, index);
        struct[property_name] = data_view.getFloat32(index, true);
        index += 4;
        break;
      case "BoolProperty":
        struct[property_name] = uint8_array[index++] !== 0;
        index = SkipOptionalUUID(uint8_array, index);
        break;
      case "ArrayProperty":
        let array_type;
        [index, array_type] = ReadString(uint8_array, index);
        index = SkipOptionalUUID(uint8_array, index);
        let count;
        [index, count] = ReadUint32(uint8_array, index);
        let arr = [];
        if (array_type == "StructProperty") {
          let property_name2, property_type2, size2, elem_type;
          [index, property_name2] = ReadString(uint8_array, index);
          [index, property_type2] = ReadString(uint8_array, index);
          [index, size2] = ReadUint64(uint8_array, index);
          [index, elem_type] = ReadString(uint8_array, index);
          index += 16; // skip UUID
          index = SkipOptionalUUID(uint8_array, index);
          // console.log('Array', count, property_name2, property_type2, size2, elem_type);
          for (let i = 0; i < count; i++) {
            let elem = {};
            if (elem_type == 'Guid') {
              [index, elem] = ReadUUID(uint8_array, index);
            } else {
              index = ReadStructProperties(elem, uint8_array, index);
            }
            arr.push(elem);
          }
        } else if (array_type == 'EnumProperty' || array_type == 'NameProperty') {
          for (let i = 0; i < count; ++i) {
            let enum_value;
            [index, enum_value] = ReadString(uint8_array, index);
            arr.push(enum_value);
          }
        } else {
          throw `Unknown array type ${array_type} at ${index - 8} for ${property_name}`;
        }
        struct[property_name] = arr;
        break;
      case "EnumProperty":
        let enum_type, enum_value;
        [index, enum_type] = ReadString(uint8_array, index);
        index = SkipOptionalUUID(uint8_array, index);
        [index, enum_value] = ReadString(uint8_array, index);
        struct[property_name] = enum_value;
        break;
      case "NameProperty":
        index = SkipOptionalUUID(uint8_array, index);
        [index, struct[property_name]] = ReadString(uint8_array, index);
        break;
      default:
        throw `Unknown property type ${property_type} at ${index - 8} for ${property_name}`;
    }
  }
  return index;
}

function PalworldSavExtractCharacters(sav_array_buffer) {
  let uint8_array = DecompressSavToGvas(sav_array_buffer);
  let characters = [];
  let character_start_needle = StrToUint8Array("PalIndividualCharacterSaveParameter\0");
  let index = 0;
  while (true) {
    index = BoyerMooreSearch(uint8_array, character_start_needle, index);
    if (index === -1) {
      break;
    }
    index += character_start_needle.length;
    index += 16; // skip UUID
    index += 1; // skip optional UUID
    let character = {};
    index = ReadStructProperties(character, uint8_array, index);
    characters.push(character);
  }
  return characters;
}