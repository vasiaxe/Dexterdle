const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const restartButton = document.getElementById("restart-button");
const resetStatsButton = document.getElementById("reset-stats-button");
const message = document.getElementById("message");
const tableBody = document.getElementById("guess-table-body");
const availableCharacters = document.getElementById("available-characters");
const searchResults = document.getElementById("search-results");
const themeToggle = document.getElementById("theme-toggle");
const difficultySelect = document.getElementById("difficulty-select");
const spoilerToggle = document.getElementById("spoiler-toggle");
const darkModeAudio = document.getElementById("dark-mode-audio");

const answerReveal = document.getElementById("answer-reveal");
const answerLabel = document.getElementById("answer-label");
const answerImage = document.getElementById("answer-image");
const answerName = document.getElementById("answer-name");
const answerDetails = document.getElementById("answer-details");

const gamesPlayedElement = document.getElementById("games-played");
const gamesWonElement = document.getElementById("games-won");
const currentStreakElement = document.getElementById("current-streak");
const bestStreakElement = document.getElementById("best-streak");

const difficultyAttempts = {
  easy: 10,
  normal: 8,
  hard: 5
};

const statsStorageKey = "dexterdleStats";
const settingsStorageKey = "dexterdleSettings";

let currentDifficulty = "normal";
let maxAttempts = difficultyAttempts[currentDifficulty];
let targetCharacter = getRandomCharacter();
let guessedCharacters = [];
let gameOver = false;
let selectedCharacterName = "";
let gameRecorded = false;