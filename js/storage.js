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
    gameMode: "infinite",
    difficulty: "normal",
    spoilerSafe: false,
    content: "original",
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
    gameMode: currentGameMode,
    difficulty: currentDifficulty,
    spoilerSafe: spoilerToggle.checked,
    content: currentContent,
    theme: document.body.classList.contains("light-mode") ? "light" : "dark"
  };

  localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
}

function applySavedSettings() {
  const settings = loadSettings();

  currentGameMode = settings.gameMode;
  currentDifficulty = settings.difficulty;
  currentContent = settings.content;
  maxAttempts = difficultyAttempts[currentDifficulty];

  gameModeSelect.value = currentGameMode;
  difficultySelect.value = currentDifficulty;
  contentSelect.value = currentContent;
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

function loadDailyGames() {
  const savedDailyGames = localStorage.getItem(dailyStorageKey);

  if (!savedDailyGames) {
    return {};
  }

  try {
    return JSON.parse(savedDailyGames);
  } catch {
    return {};
  }
}

function getDailyGameKey(date, content) {
  return `${date}:${content}`;
}

function loadDailyGame(date, content) {
  const dailyGames = loadDailyGames();
  const key = getDailyGameKey(date, content);

  return dailyGames[key] || null;
}

function saveDailyGame(date, content, dailyGame) {
  const dailyGames = loadDailyGames();
  const key = getDailyGameKey(date, content);

  dailyGames[key] = dailyGame;
  localStorage.setItem(dailyStorageKey, JSON.stringify(dailyGames));
}