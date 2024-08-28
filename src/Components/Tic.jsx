import React from "react";
import "./Tic.css";

const Tic = () => {
  const handleClick = (e) => {
    console.log(e.target.dataset.value);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-8 bg-primary p-0">
          <div className="row">
            <div
              className="col-4 cell"
              data-value="1"
              onClick={handleClick}
            ></div>
            <div
              className="col-4 cell"
              data-value="2"
              onClick={handleClick}
            ></div>
            <div
              className="col-4 cell"
              data-value="3"
              onClick={handleClick}
            ></div>
          </div>

          <div className="row">
            <div
              className="col-4 cell"
              data-value="4"
              onClick={handleClick}
            ></div>
            <div
              className="col-4 cell"
              data-value="5"
              onClick={handleClick}
            ></div>
            <div
              className="col-4 cell"
              data-value="6"
              onClick={handleClick}
            ></div>
          </div>

          <div className="row">
            <div
              className="col-4 cell"
              data-value="7"
              onClick={handleClick}
            ></div>
            <div
              className="col-4 cell"
              data-value="8"
              onClick={handleClick}
            ></div>
            <div
              className="col-4 cell"
              data-value="9"
              onClick={handleClick}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tic;
