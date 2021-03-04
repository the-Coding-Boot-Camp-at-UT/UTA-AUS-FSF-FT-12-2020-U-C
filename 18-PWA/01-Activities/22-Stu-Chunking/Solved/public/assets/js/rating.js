import { loadImages, loadImage } from "./api";
import { createEl } from "./domMethods";
import { createCards, createCard } from "./cardCreation";

export function createRatingForm(image) {
  const labelText = {
    1: "One Star",
    2: "Two Stars",
    3: "Three Stars",
    4: "Four Stars",
    5: "Five Stars"
  };

  const form = createEl("form");
  form.setAttribute("action", "post");

  for (let i = 1; i <= 5; i++) {
    const input = createEl("input", "visuallyhidden");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "rating");
    input.setAttribute("id", `${image._id}-star-${i}`);
    input.setAttribute("value", i);

    const label = createEl("label");
    label.setAttribute("for", `${image._id}-star-${i}`);
    const labelSpan = createEl("span", "visuallyhidden");
    labelSpan.innerText = labelText[i];
    const star = createEl("i", `fa-star ${image.rating >= i ? "fas" : "far"}`);

    label.appendChild(labelSpan);
    label.appendChild(star);
    label.onclick = updateRating;
    form.appendChild(input);
    form.appendChild(label);
  }
  const mouseoverListener = '';
  const mouseleaveListener = '';
  return form;
}

function updateRating(event) {
  const [id, , rating] = event.currentTarget.getAttribute("for").split("-");
  fetch(`/api/images/${id}`, {
    method: "PUT",
    body: JSON.stringify({ rating }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function() {
    if (window.location.pathname.includes("/images")) {
      console.log("yoyo");
      const id = window.location.pathname.split("/")[2];
      const container = document.getElementsByClassName("container")[0];
      loadImage(id).then(image => {
        container.removeChild(container.firstChild);
        container.appendChild(createCard(image));
      });
    } else {
      loadImages().then(images => {
        createCards(images);
      });
    }
  });
}
