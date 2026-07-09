let activeSearchIndex = -1;

function showSearchResults(matches) {
  searchResults.innerHTML = "";
  activeSearchIndex = -1;

  if (matches.length === 0) {
    hideSearchResults();
    return;
  }

  matches.forEach(character => {
    const item = document.createElement("div");
    item.classList.add("search-result-item");
    item.setAttribute("role", "option");
    item.dataset.characterName = character.name;

    const image = document.createElement("img");
    image.src = getCharacterImage(character);
    image.alt = character.name;
    image.classList.add("search-result-avatar");
    image.style.objectPosition = getCharacterImagePosition(character);

    const name = document.createElement("span");
    name.textContent = character.name;

    item.appendChild(image);
    item.appendChild(name);

    item.addEventListener("click", function() {
      chooseSearchCharacter(character.name);
    });

    searchResults.appendChild(item);
  });

  searchResults.classList.remove("hidden");
}

function hideSearchResults() {
  searchResults.classList.add("hidden");
  activeSearchIndex = -1;
}

function handleSearchInput() {
  const searchText = normalizeText(guessInput.value);
  selectedCharacterName = "";

  if (searchText === "") {
    hideSearchResults();
    return;
  }

  const matches = getActiveCharacters()
    .filter(character => !guessedCharacters.includes(character.name))
    .filter(character => normalizeText(character.name).includes(searchText));

  showSearchResults(matches);
}

function getSearchResultItems() {
  return Array.from(searchResults.querySelectorAll(".search-result-item"));
}

function updateActiveSearchItem() {
  const items = getSearchResultItems();

  items.forEach((item, index) => {
    if (index === activeSearchIndex) {
      item.classList.add("active");
      item.scrollIntoView({
        block: "nearest"
      });
    } else {
      item.classList.remove("active");
    }
  });
}

function moveSearchSelection(direction) {
  const items = getSearchResultItems();

  if (items.length === 0) {
    return;
  }

  if (activeSearchIndex === -1 && direction === 1) {
    activeSearchIndex = 0;
  } else if (activeSearchIndex === -1 && direction === -1) {
    activeSearchIndex = items.length - 1;
  } else {
    activeSearchIndex += direction;
  }

  if (activeSearchIndex < 0) {
    activeSearchIndex = items.length - 1;
  }

  if (activeSearchIndex >= items.length) {
    activeSearchIndex = 0;
  }

  updateActiveSearchItem();
}

function chooseSearchCharacter(characterName) {
  guessInput.value = characterName;
  selectedCharacterName = characterName;
  hideSearchResults();
}

function selectActiveSearchResult() {
  const items = getSearchResultItems();

  if (items.length === 0 || activeSearchIndex === -1) {
    return false;
  }

  const activeItem = items[activeSearchIndex];
  const characterName = activeItem.dataset.characterName;

  chooseSearchCharacter(characterName);
  return true;
}