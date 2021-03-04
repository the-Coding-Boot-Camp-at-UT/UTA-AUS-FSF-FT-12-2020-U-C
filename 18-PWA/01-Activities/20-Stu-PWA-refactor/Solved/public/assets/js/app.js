import { createCards } from "./cardCreation";

export function loadImages() {
  fetch("/api/images").then((res) => res.json())
    .then((data) => createCards(data));
}

loadImages();