let snowRemovalTimeout = null;

function startSnow() {
  if (snowRemovalTimeout) {
    clearTimeout(snowRemovalTimeout);
    snowRemovalTimeout = null;
  }

  const existingSnow = document.getElementById("embedim--snow");

  if (existingSnow) {
    existingSnow.remove();
  }

  function embRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function embRandColor() {
    const items = [
      "radial-gradient(circle at top left,#dcf2fd,#60b4f2)",
      "#dbf2fd",
      "#d8f8ff",
      "#b8ddfa"
    ];

    return items[Math.floor(Math.random() * items.length)];
  }

  let embCSS = `
    #embedim--snow {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: 9999;
      pointer-events: none;
    }

    .embedim-snow {
      position: absolute;
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
      margin-top: -10px;
      will-change: transform;
    }
  `;

  let embHTML = "";

  for (let i = 1; i < 200; i++) {
    embHTML += '<i class="embedim-snow"></i>';

    const rndX = embRand(0, 1000000) * 0.0001;
    const rndO = embRand(-100000, 100000) * 0.0001;
    const rndT = (embRand(3, 8) * 10).toFixed(2);
    const rndS = (embRand(0, 10000) * 0.0001).toFixed(2);
    const opacity = (embRand(1, 10000) * 0.0001).toFixed(2);
    const duration = embRand(10, 30);

    // Positive delay = snow begins at the top instead of already filling the screen.
    const delay = (Math.random() * 4).toFixed(2);

    embCSS += `
      .embedim-snow:nth-child(${i}) {
        background: ${embRandColor()};
        opacity: ${opacity};
        transform: translate(${rndX.toFixed(2)}vw, -10px) scale(${rndS});
        animation: fall-${i} ${duration}s ${delay}s linear infinite;
      }

      @keyframes fall-${i} {
        ${rndT}% {
          transform: translate(${(rndX + rndO).toFixed(2)}vw, ${rndT}vh) scale(${rndS});
        }

        to {
          transform: translate(${(rndX + rndO / 2).toFixed(2)}vw, 105vh) scale(${rndS});
        }
      }
    `;
  }

  const embedimSnow = document.createElement("div");
  embedimSnow.id = "embedim--snow";

  embedimSnow.innerHTML = `
    <style>${embCSS}</style>
    ${embHTML}
  `;

  document.body.appendChild(embedimSnow);
}

function stopSnow() {
  const embedimSnow = document.getElementById("embedim--snow");

  if (!embedimSnow) {
    return;
  }

  const flakes = Array.from(embedimSnow.querySelectorAll(".embedim-snow"));
  const longestFallTime = 9000;

  flakes.forEach(flake => {
    const rect = flake.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height, 3);
    const startX = rect.left;
    const startY = rect.top;

    const remainingDistance = window.innerHeight - startY + 80;
    const fallTime = Math.max(2500, Math.min(longestFallTime, remainingDistance * 18));

    const drift = (Math.random() * 120) - 60;
    const extraDrift = (Math.random() * 60) - 30;

    flake.style.animation = "none";
    flake.style.position = "fixed";
    flake.style.left = `${startX}px`;
    flake.style.top = `${startY}px`;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.marginTop = "0";
    flake.style.transform = "translate(0, 0)";
    flake.style.willChange = "transform, opacity";

    flake.animate(
      [
        {
          transform: "translate(0px, 0px)",
          opacity: getComputedStyle(flake).opacity
        },
        {
          transform: `translate(${drift}px, ${remainingDistance * 0.45}px)`,
          opacity: getComputedStyle(flake).opacity,
          offset: 0.55
        },
        {
          transform: `translate(${drift + extraDrift}px, ${remainingDistance}px)`,
          opacity: 0
        }
      ],
      {
        duration: fallTime,
        easing: "linear",
        fill: "forwards"
      }
    );
  });

  snowRemovalTimeout = setTimeout(function() {
    const currentSnow = document.getElementById("embedim--snow");

    if (currentSnow) {
      currentSnow.remove();
    }

    snowRemovalTimeout = null;
  }, longestFallTime + 500);
}