// Lists every .json file in this folder and shows it on the wall.
const FILES_URL = "https://api.github.com/repos/TalenMud/github-pages-workshop/contents/wall";

const statusText = document.querySelector("#status");
const people = document.querySelector("#people");

function isWebAddress(text) {
  try {
    return new URL(text).protocol === "https:";
  } catch {
    return false;
  }
}

// One broken file shouldn't take the whole wall down, so bad ones are skipped.
async function readPerson(file) {
  try {
    const response = await fetch(file.download_url);
    const person = await response.json();
    const valid =
      typeof person.name === "string" &&
      person.name.trim() !== "" &&
      typeof person.message === "string" &&
      isWebAddress(person.site);
    return valid ? person : null;
  } catch {
    return null;
  }
}

function showPerson(person) {
  const entry = document.createElement("article");
  const heading = document.createElement("h3");
  const link = document.createElement("a");
  const message = document.createElement("p");

  entry.className = "project";
  link.href = person.site;
  link.textContent = person.name.slice(0, 60);
  message.textContent = person.message.slice(0, 140);

  heading.append(link);
  entry.append(heading, message);
  people.append(entry);
}

async function loadWall() {
  try {
    const response = await fetch(FILES_URL);
    if (!response.ok) {
      throw new Error(`GitHub answered ${response.status}`);
    }

    const files = await response.json();
    const jsonFiles = files.filter((file) => file.name.endsWith(".json"));
    const loaded = await Promise.all(jsonFiles.map(readPerson));
    const valid = loaded.filter(Boolean);

    valid.forEach(showPerson);
    statusText.textContent = valid.length
      ? `Sites published so far: ${valid.length}`
      : "Nobody's here yet. Open a pull request to be first.";
  } catch {
    statusText.textContent = "The wall couldn't load from GitHub. Refresh in a minute.";
  }
}

loadWall();
