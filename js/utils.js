function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function normalizeText(text) {
  return text.trim().toLowerCase();
}

function findCharacterByName(name) {
  return characters.find(
    character => normalizeText(character.name) === normalizeText(name)
  );
}

function getCharacterImage(character) {
  return character.image || "assets/placeholder.jpg";
}

function getCharacterImagePosition(character) {
  return character.imagePosition || "center top";
}