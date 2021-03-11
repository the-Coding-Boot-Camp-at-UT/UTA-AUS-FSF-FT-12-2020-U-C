import React, { useReducer } from "react";
import "./App.css";

function Count() {
  const dogs = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg"
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg"
    }
  ];

  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action === "praiseHarry") {
        return { ...state, HarryPraises: state.HarryPraises + 1 };
      } else if (action === "praiseHermione") {
        return { ...state, HermionePraises: state.HermionePraises + 1 };
      } else {
        return state;
      }
    },
    { HarryPraises: 0, HermionePraises: 0 }
  );

  return (
    <div className="App">
      <h1>Praise your favorite dog!</h1>
      <div className="row mt-5">
        {dogs.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">
                {item.name} has been praised {state[item.name + "Praises"]} times!
              </p>
              <button className="btn btn-primary" onClick={() => dispatch("praise" + item.name)}>
                Praise
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
