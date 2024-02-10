
mergeInto(LibraryManager.library, {
  ScoreExternal: function (pal_ptr) {
    let pal = Pal.FromCpp(pal_ptr);
    return ActiveScore(pal);
  }
});