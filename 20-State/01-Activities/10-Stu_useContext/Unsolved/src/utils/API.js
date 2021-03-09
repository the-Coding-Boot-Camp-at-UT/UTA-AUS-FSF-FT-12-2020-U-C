import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        query +
        "&limit=1&format=json&origin=*"
    );
  }
};
