# Dexterdle

Dexterdle is a Dexter-themed character guessing game inspired by Wordle-style deduction games. The player guesses a hidden character and receives color-coded feedback based on shared attributes such as gender, role, affiliation, first season, status, and relation to Dexter

## Preview

<img width="1512" height="982" alt="Screenshot 2026-05-05 at 8 14 20 PM" src="https://github.com/user-attachments/assets/a2cf9c63-36a1-4306-8022-87072e70d746" />

<img width="1512" height="982" alt="Screenshot 2026-05-05 at 8 09 01 PM" src="https://github.com/user-attachments/assets/b88dd544-1b42-43c5-87a5-4dcd111c31c0" />


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
- Uses jQuery for UI animation while keeping core game logic in vanilla JavaScript

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
