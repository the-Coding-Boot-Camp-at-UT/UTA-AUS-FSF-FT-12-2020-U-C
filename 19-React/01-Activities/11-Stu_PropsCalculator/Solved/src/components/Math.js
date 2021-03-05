import React from "react";

// The Math function component accepts a props argument
function Math(props) {
  let value;

  // Assign value based on the operator
  switch (props.operator) {
  case "+":
    value = props.num1 + props.num2;
    break;
  case "-":
    value = props.num1 - props.num2;
    break;
  case "*":
    value = props.num1 * props.num2;
    break;
  case "/":
    value = props.num1 / props.num2;
    break;
  default:
    value = NaN;
  }

  // Return a span element containing the calculated value
  // Set the fontSize to the value in pixels
  return <span style={{ fontSize: value }}>{value}</span>;
}

export default Math;
