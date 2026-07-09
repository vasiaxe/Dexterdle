function getActiveCharacters() {
  let activeCharacters = [...characters];

  if (
    (currentContent === "new-blood" || currentContent === "resurrection") &&
    typeof new_blood_characters !== "undefined"
  ) {
    activeCharacters.push(...new_blood_characters);
  }

  if (
    currentContent === "resurrection" &&
    typeof resurrection_characters !== "undefined"
  ) {
    activeCharacters.push(...resurrection_characters);
  }

  return activeCharacters;
}

function getRandomCharacter() {
  const activeCharacters = getActiveCharacters();
  const randomIndex = Math.floor(Math.random() * activeCharacters.length);
  return activeCharacters[randomIndex];
}

function normalizeText(text) {
  return text.trim().toLowerCase();
}

function findCharacterByName(name) {
  return getActiveCharacters().find(
    character => normalizeText(character.name) === normalizeText(name)
  );
}

function getCharacterImage(character) {
  return character.image || "assets/placeholder.jpg";
}

function getCharacterImagePosition(character) {
  return character.imagePosition || "center top";
}

function getFirstSeasonDisplay(character) {
  return character.firstSeasonLabel || `Season ${character.firstSeason}`;
}

function getFirstSeasonCellDisplay(character) {
  return character.firstSeasonLabel || character.firstSeason;
}
//future addition of overrides 
function getCharacterStatus(character) {
  if (
    character.name === "Hannah McKay" &&
    (currentContent === "new-blood" || currentContent === "resurrection")
  ) {
    return "Dead";
  }

  if (
    character.name === "Angel Batista" &&
    currentContent === "resurrection"
  ) {
    return "Dead";
  }

  return character.status;
}

function getCharacterAttributeValue(character, attribute) {
  if (attribute === "status") {
    return getCharacterStatus(character);
  }

  return character[attribute];
}

function getCharacterAttributeDisplay(character, attribute) {
  if (attribute === "status") {
    return getCharacterStatus(character);
  }

  return character[attribute];
}