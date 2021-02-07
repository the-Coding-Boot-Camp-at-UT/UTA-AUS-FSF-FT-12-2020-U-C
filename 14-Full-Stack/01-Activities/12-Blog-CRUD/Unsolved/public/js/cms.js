// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM loaded! 🚀');

  // Check for query string and set flag, "updating", to false initially
  const url = window.location.search;
  let postId;
  let updating = false;

  // Get a specific post
  const getPostData = (id) => {
    fetch(`/api/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(`Success in grabbing post ${id}`, data);

          // Populate the form with the existing post
          titleInput.value = data.title;
          bodyInput.value = data.body;
          postCategorySelect.value = data.category;

          updating = true;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Extract the post ID from the URL
  if (url.indexOf('?post_id=') !== -1) {
    postId = url.split('=')[1];
    getPostData(postId);
  }

  // Get elements from the page
  const bodyInput = document.getElementById('body');
  const titleInput = document.getElementById('title');
  const cmsForm = document.getElementById('cms');
  const postCategorySelect = document.getElementById('category');

  // Set default value for the category
  postCategorySelect.value = 'Personal';

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!titleInput.value || !bodyInput.value) {
      alert('Your post is missing some content');
    }

    // Create a newPost object to send off to the backend
    const newPost = {
      title: titleInput.value.trim(),
      body: bodyInput.value.trim(),
      category: postCategorySelect.value,
    };
    console.log('handleFormSubmit -> newPost', newPost);

    // Check if the user is updating or creating and preform said function
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  };

  // Event listener for when the blog is submitted
  cmsForm.addEventListener('submit', handleFormSubmit);

  // Event handler for when a user submits a post
  const submitPost = (post) => {
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success in submitting post:', data);
        window.location.href = '/blog';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Update a post and bring user to /blog
  const updatePost = (post) => {
    fetch('/api/posts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        console.log('Attempting update to post');
        window.location.href = '/blog';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
});
