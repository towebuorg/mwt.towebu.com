const canvas = document.getElementById("matrix-field");
const context = canvas.getContext("2d");
const chars = "mwt git branch merge fetch status 01".split("");
let columns = [];
let width = 0;
let height = 0;

function resize() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.ceil(width / 18);
  columns = Array.from({ length: count }, () => Math.random() * height);
}

function draw() {
  context.fillStyle = "rgba(5, 8, 6, 0.12)";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "rgba(76, 255, 137, 0.62)";
  context.font = "14px SFMono-Regular, Consolas, monospace";

  columns.forEach((y, index) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    const x = index * 18;
    context.fillText(text, x, y);
    columns[index] = y > height + Math.random() * 900 ? 0 : y + 18;
  });

  window.requestAnimationFrame(draw);
}

resize();
draw();
window.addEventListener("resize", resize);
