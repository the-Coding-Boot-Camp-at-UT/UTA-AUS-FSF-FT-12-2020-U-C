import React from "react";
import {
  useInput,
  useBoolean,
  useNumber,
} from "react-hanger";

function Survey() {
  const favoriteThing = useInput("");
  const showComment = useBoolean(false);
  const comment = useInput("");
  const feeling = useInput("");
  const rating = useNumber(0)

  const handleSubmit = () => {
    const form = {
      favoriteThing: favoriteThing.value,
      comment: comment.value,
      feeling: feeling.value,
      rating: rating.value
    }
    console.log(form)
  }

  return (
    <div className="container">
      <h1>Use this form to provide feedback for our product!</h1>
      
      <h4>What was your favorite thing about our product?</h4>
      <textarea {...favoriteThing.eventBind} />

      <h4>How would you rate our product?</h4>
      <div className="form-group" >
        <input type="radio" name="rating-1" onChange={() => rating.setValue(1)} />1
        <input type="radio" name="rating-1" onChange={() => rating.setValue(2)} />2
        <input type="radio" name="rating-1" onChange={() => rating.setValue(3)} />3
        <input type="radio" name="rating-1" onChange={() => rating.setValue(4)} />4
        <input type="radio" name="rating-1" onChange={() => rating.setValue(5)} />5
      </div>
      
      <h4>How did our product make you feel?</h4>
      <div className="form-group emoji" >
        <span role="img" aria-label="angry" 
          onClick={() => {showComment.toggle(); feeling.setValue("angry")} }>
            😠
        </span>
        <span role="img" aria-label="indifferent"
          onClick={() => {showComment.toggle(); feeling.setValue("indifferent")}}>
            😒
        </span>
        <span role="img" aria-label="happy"
          onClick={() => {showComment.toggle(); feeling.setValue("happy")}}>
            😄
        </span>
        <div className="response">
        {showComment.value ? (
          <textarea {...comment.eventBind} placeholder="Please add any additional comments" />
        ): null}
        </div>
        <div>
      {showComment.value ? (
          <span>You've responded that you feel {feeling.value}</span>
        ): null}
      </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Survey;