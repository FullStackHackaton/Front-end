import React from "react";
import "../ButtonDelCart/ButtonDelCart.css";
const ButtonDelCart = () => {
  return (
    <div>
      <div className="buttons__cart">
        <button className="btn__cartdel">
          <span></span>
          <p
            data-start="good luck!"
            data-text="From Cart!"
            data-title="Delete!!"
          ></p>
        </button>
      </div>
    </div>
  );
};

export default ButtonDelCart;
