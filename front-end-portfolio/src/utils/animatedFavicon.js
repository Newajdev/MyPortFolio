const CANVAS_SIZE = 64;
const INTERVAL_MS = 550;

const STEPS = [
  { text: "N", font: "bold 40px Arial, Helvetica, sans-serif" },
  { text: "E", font: "bold 40px Arial, Helvetica, sans-serif" },
  { text: "W", font: "bold 40px Arial, Helvetica, sans-serif" },
  { text: "A", font: "bold 40px Arial, Helvetica, sans-serif" },
  { text: "J", font: "bold 40px Arial, Helvetica, sans-serif" },
];

function getFaviconLink() {
  let link = document.querySelector("link[rel='icon']");

  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }

  return link;
}

function drawFrame(ctx, step) {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  ctx.fillStyle = "#ffffff";
  ctx.font = step.font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(step.text, CANVAS_SIZE / 2, CANVAS_SIZE / 2 + 1);
}

export default function initAnimatedFavicon() {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const link = getFaviconLink();
  let stepIndex = 0;
  let timerId = null;

  const tick = () => {
    drawFrame(ctx, STEPS[stepIndex]);
    link.type = "image/png";
    link.href = canvas.toDataURL("image/png");
    stepIndex = (stepIndex + 1) % STEPS.length;
  };

  const start = () => {
    if (timerId !== null) return;
    tick();
    timerId = window.setInterval(tick, INTERVAL_MS);
  };

  const stop = () => {
    if (timerId === null) return;
    window.clearInterval(timerId);
    timerId = null;
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  start();
}
