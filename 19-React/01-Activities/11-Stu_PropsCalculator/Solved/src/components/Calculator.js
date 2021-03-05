import React from "react";
import Math from "./Math";

// Calculator renders the Math component 4 times with different props
function Calculator() {
  return (
    <div>
      {/* Math renders a span tag containing the result */}
      {/* Each span is the font-size of the result in pixels */}
      <p>
        19 + 142 = <Math num1={19} operator="+" num2={142} />
      </p>
      <p>
        42 - 17 = <Math num1={42} operator="-" num2={17} />
      </p>
      <p>
        100 * 3 = <Math num1={100} operator="*" num2={3} />
      </p>
      <p>
        96 / 4 = <Math num1={96} operator="/" num2={4} />
      </p>
    </div>
  );
}

export default Calculator;
