// This code is meant to serve as a mock fetch from an API.
export const getDeveloper = new Promise(function(resolve) {
  setTimeout(() => {
    resolve({
      excitementLevel: 10000,
      lifeLongLearner: true,
      mood: "excited",
      name: "Alec"
    });
  }, 1000);
});
