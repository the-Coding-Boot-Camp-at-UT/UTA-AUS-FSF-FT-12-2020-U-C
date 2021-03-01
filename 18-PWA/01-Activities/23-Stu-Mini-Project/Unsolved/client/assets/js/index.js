// Setting up dummy topics data
let topicData = [{
  id: 1,
  name: "Politics"
},
{
  id: 2,
  name: "Environment"
},
{
  id: 3,
  name: "Sports"
},
{
  id: 4,
  name: "Entertainment"
}
];

let lastId = 4;

// Empty topic container, render topics
function renderTopics() {
  const topicContainer = document.querySelector(".topic-container");
  const topics = createTopics(topicData);

  while (topicContainer.firstChild) {
    topicContainer.removeChild(topicContainer.firstChild);
  }

  topicContainer.appendChild(topics);
}

// Return HTML for each topic provided
function createTopics(topicData) {
  const fragment = document.createDocumentFragment();

  topicData.forEach(data => {
    const topic = createTopic(data);
    fragment.appendChild(topic);
  });

  return fragment;
}

// Return markup for a topic object
function createTopic({ name, id }) {
  return createElement(
    "div", { class: "topic" },
    createElement(
      "button", { "aria-label": "Close", "data-id": id, onClick: handleTopicDelete },
      "×"
    ),
    createElement("a", { href: `topic.html?query=${name}` }, name)
  );
}

// Deletes a topic on click
function handleTopicDelete(event) {
  const id = Number(event.target.getAttribute("data-id"));

  topicData = topicData.filter(topic => topic.id !== id);

  renderTopics();
}

function handleTopicAdd(event) {
  event.preventDefault();

  const input = document.querySelector("#add-topic");
  const value = input.value.trim();

  if (!value) {
    return;
  }

  topicData = [
    ...topicData,
    { id: ++lastId, name: value }
  ];

  input.value = "";

  renderTopics();
}

// Helper function for creating elements
function createElement(type, attributes, ...children) {
  const element = document.createElement(type);

  if (typeof attributes === "object") {
    for (const key in attributes) {
      if (key.startsWith("on")) {
        const event = key.substring(2).toLowerCase();
        const handler = attributes[key];

        element.addEventListener(event, handler);
      } else {
        element.setAttribute(key, attributes[key]);
      }
    }
  }

  children.forEach(child => {
    if (typeof child === "boolean" || child === null || child === undefined) {
      return;
    }

    let node;

    if (child instanceof HTMLElement) {
      node = child;
    } else {
      node = document.createTextNode(child);
    }

    element.appendChild(node);
  });

  return element;
}

// Renders topics on page load
renderTopics();

// Handle new topic submissions
document
  .querySelector("#submit-topic")
  .addEventListener("click", handleTopicAdd);