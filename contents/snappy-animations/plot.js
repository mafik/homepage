const MARGIN = 10;

function Arrow(ctx, x, y, angle, a, length) {
  if (typeof a === 'undefined') {
    a = MARGIN;
  }
  if (typeof length === 'undefined') {
    length = MARGIN;
  }
  ctx.beginPath();
  ctx.moveTo(x + length * Math.cos(angle), y + length * Math.sin(angle));
  ctx.lineTo(x - a * Math.sin(angle), y + a * Math.cos(angle));
  ctx.lineTo(x + a * Math.sin(angle), y - a * Math.cos(angle));
  ctx.closePath();
  ctx.fill();
}

function Plot(canvas, approach_fn, velocity) {
  let ctx = canvas.getContext('2d');
  let w = canvas.width;
  let h = canvas.height;
  let density = window.devicePixelRatio || 1;
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.scale(density, density);
  w /= density;
  h /= density;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';

  // Axes
  const FONT_SIZE = 24;
  ctx.font = FONT_SIZE + 'px Iosevka';
  let vertical_line_x = MARGIN * 2 + ctx.measureText('target').width;
  let horizontal_line_y = h / 2;
  ctx.fillText('value', vertical_line_x - ctx.measureText('value').width - MARGIN, MARGIN + FONT_SIZE);
  ctx.fillText('target', MARGIN, h / 2 + FONT_SIZE / 4);
  ctx.lineWidth = FONT_SIZE * 3 / 32;
  ctx.beginPath();
  ctx.moveTo(vertical_line_x, MARGIN * 2);
  ctx.lineTo(vertical_line_x, h - MARGIN);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(vertical_line_x, horizontal_line_y);
  ctx.lineTo(w - MARGIN * 2, horizontal_line_y);
  ctx.stroke();
  Arrow(ctx, vertical_line_x, MARGIN * 2, -Math.PI / 2);
  Arrow(ctx, w - MARGIN * 2, horizontal_line_y, 0);
  ctx.fillText('delta_t', w - MARGIN - ctx.measureText('delta_t').width, horizontal_line_y + FONT_SIZE);

  let range_y = h / 2 - MARGIN;
  let range_x = w - vertical_line_x - MARGIN * 2;
  let min_y = horizontal_line_y - range_y;
  let max_y = horizontal_line_y + range_y;
  let num_samples = 8;

  const UNIT_LENGTH = 100; // px / s

  // ticks
  for (let x = UNIT_LENGTH; x < range_x; x += UNIT_LENGTH) {
    ctx.beginPath();
    ctx.moveTo(vertical_line_x + x, horizontal_line_y - MARGIN / 2);
    ctx.lineTo(vertical_line_x + x, horizontal_line_y + MARGIN / 2);
    ctx.stroke();
  }

  for (let sample = 0; sample < num_samples; sample++) {
    let sample_y = min_y + (max_y - min_y) * (sample + 0.5) / (num_samples);
    let color = 'lch(52.2% 100% ' + (sample * 360 / (num_samples)) + 'deg)';
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    // starting dot
    ctx.beginPath();
    ctx.arc(vertical_line_x, sample_y, MARGIN * 0.5, 0, 2 * Math.PI);
    ctx.fill();

    // line
    let draw_as_vectors = false;

    if (!draw_as_vectors) { // draw as a continuous line
      ctx.beginPath();
      ctx.moveTo(vertical_line_x, sample_y);
    }
    if (typeof approach_fn === 'undefined') {
      continue;
    }
    const ARROW_LENGTH = 20;
    const ARROW_WIDTH = 4;
    for (let x = 0; x < range_x;) {
      let value, new_velocity;
      [value, new_velocity] = approach_fn(sample_y, velocity, horizontal_line_y, x / UNIT_LENGTH);
      if (draw_as_vectors) {
        Arrow(ctx, vertical_line_x + x, value, Math.atan2(new_velocity, UNIT_LENGTH), ARROW_WIDTH, ARROW_LENGTH);
      } else {
        ctx.lineTo(vertical_line_x + x, value);
      }
      if (draw_as_vectors) {
        let a = Math.atan2(new_velocity, UNIT_LENGTH);
        x += Math.max(ARROW_LENGTH * Math.cos(a), 0.5);
      } else {
        x++;
      }
    }
    if (!draw_as_vectors) {
      ctx.stroke();
    }
  }
  ctx.restore();

}
