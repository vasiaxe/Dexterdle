function loadStats() {
  const defaultStats = {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    bestStreak: 0
  };

  const savedStats = localStorage.getItem(statsStorageKey);

  if (!savedStats) {
    return defaultStats;
  }

  try {
    return { ...defaultStats, ...JSON.parse(savedStats) };
  } catch {
    return defaultStats;
  }
}

function saveStats(stats) {
  localStorage.setItem(statsStorageKey, JSON.stringify(stats));
}

function renderStats() {
  const stats = loadStats();

  gamesPlayedElement.textContent = stats.gamesPlayed;
  gamesWonElement.textContent = stats.gamesWon;
  currentStreakElement.textContent = stats.currentStreak;
  bestStreakElement.textContent = stats.bestStreak;
}

function recordGameResult(didWin) {
  if (gameRecorded) {
    return;
  }

  const stats = loadStats();

  stats.gamesPlayed += 1;

  if (didWin) {
    stats.gamesWon += 1;
    stats.currentStreak += 1;

    if (stats.currentStreak > stats.bestStreak) {
      stats.bestStreak = stats.currentStreak;
    }
  } else {
    stats.currentStreak = 0;
  }

  saveStats(stats);
  renderStats();
  gameRecorded = true;
}

function resetStats() {
  const emptyStats = {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    bestStreak: 0
  };

  saveStats(emptyStats);
  renderStats();
  message.textContent = "Stats reset.";
}

function loadSettings() {
  const defaultSettings = {
    difficulty: "normal",
    spoilerSafe: false,
    theme: "dark"
  };

  const savedSettings = localStorage.getItem(settingsStorageKey);

  if (!savedSettings) {
    return defaultSettings;
  }

  try {
    return { ...defaultSettings, ...JSON.parse(savedSettings) };
  } catch {
    return defaultSettings;
  }
}

function saveSettings() {
  const settings = {
    difficulty: currentDifficulty,
    spoilerSafe: spoilerToggle.checked,
    theme: document.body.classList.contains("light-mode") ? "light" : "dark"
  };

  localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
}

function applySavedSettings() {
  const settings = loadSettings();

  currentDifficulty = settings.difficulty;
  maxAttempts = difficultyAttempts[currentDifficulty];

  difficultySelect.value = currentDifficulty;
  spoilerToggle.checked = settings.spoilerSafe;

  document.body.classList.remove("dark-mode", "light-mode");

  if (settings.theme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.setAttribute("aria-label", "Toggle dark mode");
  } else {
    document.body.classList.add("dark-mode");
    themeToggle.setAttribute("aria-label", "Toggle light mode");
  }

  applySpoilerMode();
}