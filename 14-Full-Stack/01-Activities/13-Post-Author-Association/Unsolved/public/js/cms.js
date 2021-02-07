// Helper functions to show/hide elements
const show = (el) => {
  el.style.display = 'block';
};

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  // Get references to the body, title, form and author
  const bodyInput = document.getElementById('body');
  const titleInput = document.getElementById('title');
  const cmsForm = document.getElementById('cms');
  const authorSelect = document.getElementById('author');

  // Get query parameter
  const url = window.location.search;
  let postId;
  let authorId;
  let updating = false;

  // Get post data for editing/adding
  const getPostData = (id, type) => {
    const queryUrl =
      type === 'post' ? `/api/posts/${id}` : `/api/authors/${id}`;

    fetch(queryUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log('Success in getting post:', data);

          // Populate the form for editing
          titleInput.value = data.title;
          bodyInput.value = data.body;
          authorId = data.AuthorId || data.id;

          // We are updating
          updating = true;
        }
      })
      .catch((err) => console.error(err));
  };

  // If post exists, grab the content of the post
  if (url.indexOf('?post_id=') !== -1) {
    postId = url.split('=')[1];
    getPostData(postId, 'post');
  }
  // Otherwise if we have an author_id in our url, preset the author select box to be our Author
  else if (url.indexOf('?author_id=') !== -1) {
    authorId = url.split('=')[1];
  }

  // Event handler for when the post for is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Make sure the form isn't empty
    if (
      !titleInput.value.trim() ||
      !bodyInput.value.trim() ||
      !authorSelect.value
    ) {
      return;
    }

    // Object that will be sent to the db
    const newPost = {
      title: titleInput.value.trim(),
      body: bodyInput.value.trim(),
      AuthorId: authorSelect.value,
    };

    // Update a post if flag is true, otherwise submit a new one
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  };

  // Attach an event listener to the form on submit
  cmsForm.addEventListener('submit', handleFormSubmit);

  // Submits new post then redirects
  const submitPost = (post) => {
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        window.location.href = '/blog';
      })
      .catch((err) => console.error(err));
  };

  // Render a list of authors or redirect if no authors
  const renderAuthorList = (data) => {
    console.log('renderAuthorList -> data', data);
    if (!data.length) {
      window.location.href = '/authors';
    }
    if (document.querySelector('.hidden')) {
      show(document.querySelector('.hidden'));
    }

    const rowsToAdd = [];

    data.forEach((author) => rowsToAdd.push(createAuthorRow(author)));

    authorSelect.innerHTML = '';
    console.log('renderAuthorList -> rowsToAdd', rowsToAdd);
    console.log('authorSelect', authorSelect);

    rowsToAdd.forEach((row) => authorSelect.append(row));
    authorSelect.value = authorId;
  };

  // Build author dropdown
  const createAuthorRow = ({ id, name }) => {
    const listOption = document.createElement('option');
    listOption.value = id;
    listOption.textContent = name;
    return listOption;
  };

  // A function to get Authors and then call the render function
  const getAuthors = () => {
    fetch('api/authors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => renderAuthorList(data))
      .catch((err) => console.error(err));
  };

  // Get the authors, and their posts
  getAuthors();

  // Update a post then redirect to blog
  const updatePost = (post) => {
    fetch('/api/posts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        window.location.href = '/blog';
      })
      .catch((err) => console.error(err));
  };
});
