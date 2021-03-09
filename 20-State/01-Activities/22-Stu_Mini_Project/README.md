# Custom CMS

In this activity we will create a CMS (Content Management System) that allows users to upload blog posts. Users will also be able to view blog posts by other authors and filter them based on category. We will use the Context API to manage the application state globally, adhering to a design pattern that closely follows Redux. Although very complex applications may have several stores, we are going to keep it simple and store all stateful data in a single global store.

## Instructions

* Open the [Unsolved](Unsolved) folder and install dependencies by running `npm install` at the project root.

* Open another tab in your terminal and run `mongod`.

* Start the app by running `npm start` from the project root.

* Once the app starts open your browser to [localhost:3000](http://localhost:3000).

* Open [App.js](Unsolved/client/src/App.js).

* There are 4 main sections in this application:

  * A section that allows you to create new posts.

  * A section that lists all of the posts.

  * A detail page to view the contents of an individual post.

  * (BONUS): A Favorites page that lists all of your favorite posts.

### Part 1

* Set up a store for your application with support for the following actions:

  1. UPDATE_POSTS: Updates the state with the latest posts.

  2. ADD_POST: Adds a post to the posts array.

  3. REMOVE_POST: Removes a specified post from your posts array.

  4. SET_CURRENT_POST: Sets the current post in the store. This action will only be dispatched from the detail page.

  5. LOADING: Indicates when the app is saving a post or retrieving posts from the database.

* Since this application is larger than our previous applications, we are going to create a separate file for our action types. By doing this, we will be able to import the actions into any component we would like, thus reducing the chance of mispelling them thanks to the autocomplete feature in our IDE.

* In `client/src/utils`, create a file named `actions.js`.

* Inside the actions file, export a `const` for each action type so that you will be able to easily import it into whichever file you would like.

  * Ex: `export const GET_POSTS = "GET_POSTS";`

* In `client/src/utils/GlobalState.js`, create a store for your application with with a reducer that can handle each action type.

* Export a `StoreProvider` and `useStoreContext` Hook.

* In `App.js`, wrap your entire application with the `StoreProvider`.

### Part 2

* Open up `client/src/components/CreatePostForm` and add the functionality for creating new posts.  

* Open up `client/src/components/PostsList` and add the functionality for getting the latest posts _and_ deleting a single post.

* Open up `client/src/pages/Detail.js` and add the functionality for viewing a selected post.

* 📝 With every API call, dispatch the `LOADING` action. Then make the API call. Dispatch your action within the `then` method.
 
*  Update the `UPDATE_POSTS`, `SET_CURRENT_POST`, and `ADD_POST` action handlers so that the `loading` property on the state changes to `false`.

* In `client/src/components/Nav`, use the global store to make the `Loading...` text appear whenever the global state is loading.

* In `client/src/components/CreatePostForm`, update the submit button so that it is `disabled` if the global state is loading.

### BONUS

* In `client/src/pages/Detail.js`, add a `❤️ Add to Favorites` button that adds the blog post to a `favorites` array in the store.

* Here are some actions you might choose to use:

  1. UPDATE_FAVORITES: Updates the state with the latest favorites.

  2. ADD_FAVORITE: Adds a favorite to the favorites array.

  3. REMOVE_FAVORITE: Removes a specified post from your favorites list.

### Hints

* You will **not** have to modify any files that are not in the `client` folder.

* If you are stuck or running into errors, try to `console.log` the `action` in your store. Try to make sure that the reducer is functioning as expected before looking at your component.

* Use the `utils/GlobalState.js` file from the previous activity to help scaffold the store.

* Ask the instructor or a TA if you're having difficulty understanding any of the activity requirements.
