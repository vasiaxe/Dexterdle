guessButton.addEventListener("click", handleGuess);
restartButton.addEventListener("click", restartGame);
themeToggle.addEventListener("click", toggleTheme);
difficultySelect.addEventListener("change", handleDifficultyChange);
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

applySavedSettings();
renderStats();
renderAvailableCharacters();

message.textContent = `Start guessing. Attempts: 0/${maxAttempts}`;