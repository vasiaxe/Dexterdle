function compareAttribute(attribute, guessedCharacter) {
  if (guessedCharacter[attribute] === targetCharacter[attribute]) {
    return "correct";
  }

  if (attribute === "firstSeason") {
    return "close";
  }

  return "wrong";
}

function getSeasonHint(guessedSeason) {
  if (guessedSeason === targetCharacter.firstSeason) {
    return guessedSeason;
  }

  if (guessedSeason < targetCharacter.firstSeason) {
    return `${guessedSeason} ↑`;
  }

  return `${guessedSeason} ↓`;
}

function revealAnswer(resultType) {
  answerLabel.textContent = resultType === "win" ? "Correct Answer" : "The Answer Was";
  answerImage.src = getCharacterImage(targetCharacter);
  answerImage.alt = targetCharacter.name;
  answerImage.style.objectPosition = getCharacterImagePosition(targetCharacter);
  answerName.textContent = targetCharacter.name;

  if (spoilerToggle.checked) {
    answerDetails.textContent =
      `${targetCharacter.role} • ${targetCharacter.affiliation} • First appeared in Season ${targetCharacter.firstSeason}`;
  } else {
    answerDetails.textContent =
      `${targetCharacter.role} • ${targetCharacter.affiliation} • First appeared in Season ${targetCharacter.firstSeason} • ${targetCharacter.status} • ${targetCharacter.relationToDexter}`;
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

function handleGuess() {
  if (gameOver) {
    message.textContent = `Game over. The character was ${targetCharacter.name}. Press restart to play again.`;
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
    return;
  }

  if (guessedCharacters.length >= maxAttempts) {
    message.textContent = `Game over. The character was ${targetCharacter.name}.`;
    gameOver = true;
    revealAnswer("loss");
    recordGameResult(false);
    return;
  }

  message.textContent = `Attempts: ${guessedCharacters.length}/${maxAttempts}`;
}

function restartGame() {
  targetCharacter = getRandomCharacter();
  guessedCharacters = [];
  gameOver = false;
  selectedCharacterName = "";
  gameRecorded = false;
  tableBody.innerHTML = "";
  guessInput.value = "";
  hideSearchResults();
  hideAnswerReveal();
  message.textContent = `New game started. Attempts: 0/${maxAttempts}`;
}

function handleDifficultyChange() {
  currentDifficulty = difficultySelect.value;
  maxAttempts = difficultyAttempts[currentDifficulty];

  saveSettings();
  restartGame();
  message.textContent = `Difficulty changed to ${currentDifficulty}. Attempts: 0/${maxAttempts}`;
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