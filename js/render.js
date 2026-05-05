function renderAvailableCharacters() {
  availableCharacters.innerHTML = "";

  characters.forEach(character => {
    const tag = document.createElement("span");
    tag.classList.add("character-tag");

    const image = document.createElement("img");
    image.src = getCharacterImage(character);
    image.alt = character.name;
    image.classList.add("tag-avatar");
    image.style.objectPosition = getCharacterImagePosition(character);

    const name = document.createElement("span");
    name.textContent = character.name;

    tag.appendChild(image);
    tag.appendChild(name);
    availableCharacters.appendChild(tag);
  });
}

function createCell(text, className, attribute) {
  const cell = document.createElement("td");
  cell.textContent = text;
  cell.classList.add(className);

  if (attribute === "status" || attribute === "relationToDexter") {
    cell.classList.add("spoiler-column");
  }

  return cell;
}

function createNameCell(character) {
  const cell = document.createElement("td");
  cell.classList.add("name-cell");

  const wrapper = document.createElement("div");
  wrapper.classList.add("character-name-cell");

  const image = document.createElement("img");
  image.src = getCharacterImage(character);
  image.alt = character.name;
  image.classList.add("character-avatar");
  image.style.objectPosition = getCharacterImagePosition(character);

  const name = document.createElement("span");
  name.textContent = character.name;

  wrapper.appendChild(image);
  wrapper.appendChild(name);
  cell.appendChild(wrapper);

  return cell;
}

function renderGuess(guessedCharacter) {
  const row = document.createElement("tr");

  row.appendChild(createNameCell(guessedCharacter));

  const attributes = [
    "gender",
    "role",
    "affiliation",
    "firstSeason",
    "status",
    "relationToDexter"
  ];

  attributes.forEach(attribute => {
    const resultClass = compareAttribute(attribute, guessedCharacter);

    const displayText =
      attribute === "firstSeason"
        ? getSeasonHint(guessedCharacter.firstSeason)
        : guessedCharacter[attribute];

    row.appendChild(createCell(displayText, resultClass, attribute));
  });

  tableBody.prepend(row);

  if (window.jQuery) {
    $(row).hide().fadeIn(220);
  }

  applySpoilerMode();
}