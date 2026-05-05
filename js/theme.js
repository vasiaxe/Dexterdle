function playDarkModeAudio() {
  if (!darkModeAudio) {
    return;
  }

  darkModeAudio.currentTime = 0;
  darkModeAudio.volume = 0.75;

  const playPromise = darkModeAudio.play();

  if (playPromise !== undefined) {
    playPromise.catch(function() {
      message.textContent = "Audio could not play. Check the audio file path or browser permissions.";
    });
  }
}

function toggleTheme() {
  document.body.classList.add("knife-slash");

  setTimeout(function() {
    const wasLightMode = document.body.classList.contains("light-mode");

    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");

    themeToggle.setAttribute(
      "aria-label",
      isLightMode ? "Toggle dark mode" : "Toggle light mode"
    );

    if (wasLightMode && !isLightMode) {
      playDarkModeAudio();
    }

    saveSettings();
  }, 320);

  setTimeout(function() {
    document.body.classList.remove("knife-slash");
  }, 900);
}