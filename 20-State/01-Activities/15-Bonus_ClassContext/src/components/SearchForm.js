import React from "react";
import MovieContext from "../utils/movieContext";

function SearchForm() {
  return (
    // Use consumer to capture state.search and form handler functions
    <MovieContext.Consumer>
      {({search, handleInputChange, handleFormSubmit}) => (
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={handleInputChange}
              value={search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a Movie"
              id="search"
            />
            <br />
            <button onClick={handleFormSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      )}
    </MovieContext.Consumer>
  );
}

export default SearchForm;
