# Dexterdle

Dexterdle is a Dexter-themed character guessing game inspired by Wordle-style deduction games. The player guesses a hidden character and receives color-coded feedback based on shared attributes such as gender, role, affiliation, first season, status, and relation to Dexter

## Preview

<img width="1512" height="982" alt="Screenshot 2026-05-05 at 11 33 37 PM" src="https://github.com/user-attachments/assets/1026f9a1-619c-4e88-acba-e487fdadf6b0" />


<img width="1512" height="982" alt="Screenshot 2026-05-05 at 11 34 19 PM" src="https://github.com/user-attachments/assets/8e11e9d7-0931-4573-b3d1-40271e9a452a" />

<img width="1512" height="982" alt="Screenshot 2026-05-05 at 11 34 47 PM" src="https://github.com/user-attachments/assets/b003a069-c789-45a5-a2fe-20865349421d" />

<img width="1512" height="982" alt="Screenshot 2026-05-05 at 11 35 11 PM" src="https://github.com/user-attachments/assets/271666ed-cb6b-4a2d-b775-7127944c939c" />

## Live Demo

Play Dexterdle here: https://vasiaxe.github.io/Dexterdle/

## Features

- Character guessing game built with HTML, CSS, and JavaScript
- Custom searchable dropdown with keyboard navigation
- Image-backed character data
- Color-coded clue feedback
- Difficulty modes with dynamic attempt limits
- Spoiler-safe mode that hides status and relation-to-Dexter clues
- Persistent game statistics using localStorage
- Light/dark mode toggle with CSS variables
- jQuery-powered UI animations and collapsible sections
- Responsive layout

## How to Play

1. Type a character name into the search bar
2. Select a character from the dropdown
3. Submit your guess
4. Use the color feedback to narrow down the hidden character
5. Guess correctly before you run out of attempts

## Clue System

- Green: exact match
- Yellow: close clue for first season
  - ↑ means the hidden character appears in a later season
  - ↓ means the hidden character appears in an earlier season
- Red: no match

## Tech Stack

- HTML
- CSS
- JavaScript
- jQuery
- localStorage

## Project Architecture

The project is split by function:

- `css/theme.css` handles color variables and light/dark mode
- `css/title-knife.css` handles the animated knife theme toggle
- `css/game.css` handles the clue table and answer reveal card
- `css/sections.css` handles dropdowns, character lists, and help sections
- `js/game.js` handles the core guessing logic
- `js/search.js` handles the custom search dropdown
- `js/render.js` handles DOM rendering
- `js/storage.js` handles localStorage stats and settings
- `js/theme.js` handles the theme toggle and audio behavior
- `js/jquery-ui.js` contains jQuery-powered UI animations

## Technical Highlights

- Uses structured JavaScript character data to drive game logic
- Separates state, rendering, search, storage, and theme behavior across modular files
- Implements keyboard-friendly search with ArrowUp, ArrowDown, Enter, and Escape
- Persists player statistics and settings across sessions
- Uses CSS custom properties for theme switching
- Uses jQuery for UI animation while keeping core game logic in JavaScript

## Future Improvements

- Daily challenge mode
- Shareable results
- More characters
- More spoiler-safe settings
- React/TypeScript version
- Unit tests for comparison logic

## Disclaimer

Dexterdle is a fan-made, non-commercial portfolio project created for educational purposes. Dexter and related character names, images, audio, and references belong to their respective copyright holders. I do not claim ownership of any Dexter-related assets used in this project

This project is not affiliated with, endorsed by, or sponsored by the owners of Dexter

## License

The source code is licensed under the MIT License. Dexter-related names, images, audio, and references are not covered by this license and belong to their respective owners
