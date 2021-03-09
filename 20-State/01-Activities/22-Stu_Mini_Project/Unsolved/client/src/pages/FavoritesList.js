import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";

function FavoritesList() {
  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Posts</h1>
      {/* Replace true with the condition that the posts array has a length > 0 */}
      {true ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
          {[].map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => {}} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
}

export default FavoritesList;
