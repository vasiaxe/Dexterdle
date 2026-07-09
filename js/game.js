function compareAttribute(attribute, guessedCharacter) {
  const guessedValue = getCharacterAttributeValue(guessedCharacter, attribute);
  const targetValue = getCharacterAttributeValue(targetCharacter, attribute);

  if (guessedValue === targetValue) {
    return "correct";
  }

  if (attribute === "firstSeason") {
    return "close";
  }

  return "wrong";
}

function getSeasonHint(guessedCharacter) {
  const guessedSeason = guessedCharacter.firstSeason;
  const guessedDisplay = getFirstSeasonCellDisplay(guessedCharacter);

  if (guessedSeason === targetCharacter.firstSeason) {
    return guessedDisplay;
  }

  if (guessedSeason < targetCharacter.firstSeason) {
    return `${guessedDisplay} ↑`;
  }

  return `${guessedDisplay} ↓`;
}

function revealAnswer(resultType) {
  answerLabel.textContent = resultType === "win" ? "Correct Answer" : "The Answer Was";
  answerImage.src = getCharacterImage(targetCharacter);
  answerImage.alt = targetCharacter.name;
  answerImage.style.objectPosition = getCharacterImagePosition(targetCharacter);
  answerName.textContent = targetCharacter.name;

  if (spoilerToggle.checked) {
    answerDetails.textContent =
      `${targetCharacter.role} • ${targetCharacter.affiliation} • First appeared in ${getFirstSeasonDisplay(targetCharacter)}`;
  } else {
    answerDetails.textContent =
      `${targetCharacter.role} • ${targetCharacter.affiliation} • First appeared in ${getFirstSeasonDisplay(targetCharacter)} • ${getCharacterStatus(targetCharacter)} • ${targetCharacter.relationToDexter}`;
  }

  answerReveal.classList.remove("hidden");

  if (window.jQuery) {
    $("#answer-reveal").hide().fadeIn(220);
  }
}

function hideAnswerReveal() {
  answerReveal.classList.add("hidden");
  answerImage.src = "";
  answerImage.alt = "";
  answerName.textContent = "";
  answerDetails.textContent = "";
}

function setGameLoading(isLoading) {
  guessButton.disabled = isLoading;
  guessInput.disabled = isLoading;
  restartButton.disabled = isLoading || currentGameMode === "daily";
  restartButton.textContent = currentGameMode === "daily" ? "Daily Locked" : "Restart";
}

function resetBoard() {
  targetCharacter = null;
  guessedCharacters = [];
  gameOver = false;
  selectedCharacterName = "";
  gameRecorded = false;
  tableBody.innerHTML = "";
  guessInput.value = "";
  hideSearchResults();
  hideAnswerReveal();
  renderAvailableCharacters();
}

async function getDailyCharacter() {
  const response = await fetch("/api/daily", {
    method: "GET",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Daily API request failed.");
  }

  const dailyPuzzle = await response.json();
  const dailyTargetName = dailyPuzzle.targets[currentContent];

  if (!dailyTargetName) {
    throw new Error("Daily API returned no target for this content mode.");
  }

  const dailyCharacter = findCharacterByName(dailyTargetName);

  if (!dailyCharacter) {
    throw new Error("Daily target was not found in the active roster.");
  }

  return {
    character: dailyCharacter,
    date: dailyPuzzle.date
  };
}

function saveCurrentDailyGame() {
  if (currentGameMode !== "daily" || !currentDailyDate || !targetCharacter) {
    return;
  }

  const didWin = gameOver && guessedCharacters.includes(targetCharacter.name);

  saveDailyGame(currentDailyDate, currentContent, {
    date: currentDailyDate,
    content: currentContent,
    targetName: targetCharacter.name,
    guessedCharacters: [...guessedCharacters],
    gameOver,
    didWin
  });
}

function restoreDailyGuesses(savedDailyGame) {
  guessedCharacters = [];
  tableBody.innerHTML = "";

  savedDailyGame.guessedCharacters.forEach(guessName => {
    const guessedCharacter = findCharacterByName(guessName);

    if (!guessedCharacter || guessedCharacters.includes(guessedCharacter.name)) {
      return;
    }

    guessedCharacters.push(guessedCharacter.name);
    renderGuess(guessedCharacter);
  });
}

async function startDailyGame() {
  message.textContent = "Loading today's daily challenge...";

  const dailyResult = await getDailyCharacter();
  currentDailyDate = dailyResult.date;
  targetCharacter = dailyResult.character;

  const savedDailyGame = loadDailyGame(currentDailyDate, currentContent);

  if (savedDailyGame && savedDailyGame.targetName === targetCharacter.name) {
    restoreDailyGuesses(savedDailyGame);

    gameOver = Boolean(savedDailyGame.gameOver);
    gameRecorded = gameOver;

    if (gameOver) {
      revealAnswer(savedDailyGame.didWin ? "win" : "loss");

      if (savedDailyGame.didWin) {
        message.textContent = `Daily Challenge already completed. You got ${targetCharacter.name}. Come back tomorrow.`;
      } else {
        message.textContent = `Daily Challenge already completed. The character was ${targetCharacter.name}. Come back tomorrow.`;
      }

      return;
    }

    message.textContent = `Daily Challenge restored for ${currentDailyDate}. Attempts: ${guessedCharacters.length}/${maxAttempts}`;
    return;
  }

  saveCurrentDailyGame();
  message.textContent = `Daily Challenge loaded for ${currentDailyDate}. Attempts: 0/${maxAttempts}`;
}

async function startInfiniteGame() {
  currentDailyDate = "";
  targetCharacter = getRandomCharacter();
  message.textContent = `New infinite game started. Attempts: 0/${maxAttempts}`;
}

async function startGame() {
  resetBoard();
  setGameLoading(true);

  try {
    if (currentGameMode === "daily") {
      await startDailyGame();
    } else {
      await startInfiniteGame();
    }
  } catch {
    targetCharacter = null;
    message.textContent = "Daily Challenge could not load. Switch to Infinite mode or try again later.";
  }

  setGameLoading(false);
}

async function restartGame() {
  if (currentGameMode === "daily") {
    message.textContent = "Daily Challenge is locked to one puzzle per day. Switch to Infinite mode to keep playing random games.";
    return;
  }

  await startGame();
}

function handleGuess() {
  if (!targetCharacter) {
    message.textContent = "Game is still loading. Try again in a moment.";
    return;
  }

  if (gameOver) {
    message.textContent = `Game over. The character was ${targetCharacter.name}.`;
    revealAnswer("loss");
    return;
  }

  const guessName = selectedCharacterName || guessInput.value;
  const guessedCharacter = findCharacterByName(guessName);

  if (!guessedCharacter) {
    message.textContent = "Character not found. Choose a name from the search results.";
    return;
  }

  if (guessedCharacters.includes(guessedCharacter.name)) {
    message.textContent = "You already guessed that character.";
    return;
  }

  guessedCharacters.push(guessedCharacter.name);
  renderGuess(guessedCharacter);

  guessInput.value = "";
  selectedCharacterName = "";
  hideSearchResults();

  if (guessedCharacter.name === targetCharacter.name) {
    message.textContent = `Correct. The character was ${targetCharacter.name}.`;
    gameOver = true;
    revealAnswer("win");
    recordGameResult(true);
    saveCurrentDailyGame();
    return;
  }

  if (guessedCharacters.length >= maxAttempts) {
    message.textContent = `Game over. The character was ${targetCharacter.name}.`;
    gameOver = true;
    revealAnswer("loss");
    recordGameResult(false);
    saveCurrentDailyGame();
    return;
  }

  message.textContent = `Attempts: ${guessedCharacters.length}/${maxAttempts}`;
  saveCurrentDailyGame();
}

async function handleGameModeChange() {
  currentGameMode = gameModeSelect.value;

  saveSettings();
  await startGame();
}

async function handleDifficultyChange() {
  currentDifficulty = difficultySelect.value;
  maxAttempts = difficultyAttempts[currentDifficulty];

  saveSettings();
  await startGame();
}

function applyContentMode() {
  const isNewBloodMode = currentContent === "new-blood";
  const isResurrectionMode = currentContent === "resurrection";

  document.body.classList.toggle("new-blood-mode", isNewBloodMode);
  document.body.classList.toggle("resurrection-mode", isResurrectionMode);

  if (isNewBloodMode && typeof startSnow === "function") {
    startSnow();
  } else if (typeof stopSnow === "function") {
    stopSnow();
  }
}

async function handleContentChange() {
  currentContent = contentSelect.value;

  applyContentMode();
  saveSettings();
  await startGame();
}

function applySpoilerMode() {
  const spoilerSafeEnabled = spoilerToggle.checked;

  if (spoilerSafeEnabled) {
    document.body.classList.add("spoiler-safe");
  } else {
    document.body.classList.remove("spoiler-safe");
  }

  if (!answerReveal.classList.contains("hidden")) {
    revealAnswer(gameOver ? "loss" : "win");
  }
}

function handleSpoilerToggle() {
  applySpoilerMode();
  saveSettings();

  if (spoilerToggle.checked) {
    message.textContent = "Spoiler-safe mode enabled. Status and relation to Dexter clues are hidden.";
  } else {
    message.textContent = `Spoiler-safe mode disabled. Attempts: ${guessedCharacters.length}/${maxAttempts}`;
  }
}