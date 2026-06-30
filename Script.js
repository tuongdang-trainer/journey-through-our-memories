
console.log("SCRIPT IS LOADED");

window.addEventListener("DOMContentLoaded", () => {
const birthdayDate = new Date(2026, 6, 1, 0, 0, 0).getTime();
  const countdownEl = document.getElementById("countdown");

  if (!countdownEl) {
    console.log("❌ Countdown element not found");
    return;
  }

  let confettiTriggered = false;

  function launchConfetti() {
    const canvas = document.createElement("canvas");
    canvas.id = "confetti-canvas";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    const colors = ["#A8D5BA", "#E3EFE6", "#B7C9B8", "#ffffff"];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 120,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 10
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.r, p.r);

        p.y += 2 + p.d * 0.01;
        p.x += Math.sin(p.tilt) * 2;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    setTimeout(() => {
      canvas.remove();
    }, 8000);
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {
      countdownEl.innerHTML = "🎉 It's your birthday! 🎉";

      if (!confettiTriggered) {
        launchConfetti();
        confettiTriggered = true;
      }

      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});