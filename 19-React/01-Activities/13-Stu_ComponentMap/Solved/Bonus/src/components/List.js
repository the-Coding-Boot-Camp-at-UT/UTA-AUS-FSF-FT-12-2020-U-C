import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const notPurchased = props.groceries.filter(grocery => !grocery.purchased);

  return (
    <ul className="list-group">
      {notPurchased.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
