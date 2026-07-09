guessButton.addEventListener("click", handleGuess);
restartButton.addEventListener("click", restartGame);
themeToggle.addEventListener("click", toggleTheme);
gameModeSelect.addEventListener("change", handleGameModeChange);
difficultySelect.addEventListener("change", handleDifficultyChange);
contentSelect.addEventListener("change", handleContentChange);
spoilerToggle.addEventListener("change", handleSpoilerToggle);
resetStatsButton.addEventListener("click", resetStats);

guessInput.addEventListener("input", handleSearchInput);

guessInput.addEventListener("keydown", function(event) {
  const dropdownOpen = !searchResults.classList.contains("hidden");

  if (event.key === "ArrowDown" && dropdownOpen) {
    event.preventDefault();
    moveSearchSelection(1);
    return;
  }

  if (event.key === "ArrowUp" && dropdownOpen) {
    event.preventDefault();
    moveSearchSelection(-1);
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();

    if (dropdownOpen && selectActiveSearchResult()) {
      return;
    }

    handleGuess();
    return;
  }

  if (event.key === "Escape") {
    hideSearchResults();
  }
});

document.addEventListener("click", function(event) {
  if (!event.target.closest(".search-wrapper")) {
    hideSearchResults();
  }
});

async function initializeGame() {
  applySavedSettings();
  applyContentMode();
  renderStats();
  await startGame();
}

initializeGame();