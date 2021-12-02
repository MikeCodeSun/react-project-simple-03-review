import React, { useState } from "react";
import reviews from "./data";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      number = 0;
    }
    if (number < 0) {
      number = reviews.length - 1;
    }
    return number;
  };

  const prevBtn = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextBtn = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomNumber = () => {
    let newRandomNember = Math.floor(Math.random() * reviews.length);
    if (newRandomNember === index) {
      newRandomNember = index - 1;
    }
    setIndex(checkNumber(newRandomNember));
  };

  return (
    <div className="person">
      <div className="img-container">
        <img src={image} alt={name} className="img person-img" />
      </div>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{text}</p>
      <div className="btn-container">
        <button className="btn btn-hipster" onClick={() => prevBtn()}>
          &#60;
        </button>
        <button onClick={() => nextBtn()} className="btn btn-hipster">
          &#62;
        </button>
      </div>
      <button onClick={() => randomNumber()} className="btn btn-sur">
        surprise
      </button>
    </div>
  );
}
