import React, { useState, useEffect } from "react";
import "./Tic.css";


const Tic = () => {
  
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [clickedCells, setClickedCells] = useState([]);
  const [winner, setWinner] = useState(null); 

  const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [7, 5, 3],
    [1, 5, 9],
  ];

  const randomGen = (currentClickedCells) => {
    const availableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
      (cell) => !currentClickedCells.includes(cell)
    );
    if (availableCells.length === 0) return null; 
    const rand = availableCells[Math.floor(Math.random() * availableCells.length)];
    return rand;
  };

  const checkWinner = (playerMoves) => {
    return nums.some((combination) =>
      combination.every((cell) => playerMoves.includes(cell))
    );
  };

  useEffect(() => {
    if (checkWinner(playerOne)) {
      setWinner("You");
    } else if (checkWinner(playerTwo)) {
      setWinner("Computer");
    } else if (clickedCells.length === 9) {
      setWinner("Draw");
    }
  }, [playerOne, playerTwo, clickedCells]);

  const handleClick = (e) => {
    const value = parseInt(e.target.dataset.value);

    if (clickedCells.includes(value) || winner) return; 

    const newClickedCells = [...clickedCells, value];
    setClickedCells(newClickedCells);
    setPlayerOne((prevPlayerOne) => [...prevPlayerOne, value]);

    const playerTwoMove = randomGen(newClickedCells);
    if (playerTwoMove) {
      setClickedCells((prev) => [...prev, playerTwoMove]);
      setPlayerTwo((prev) => [...prev, playerTwoMove]);
    }
  };

  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-8">
          <div className="header-row row mb-4">
            <div className="col-6 d-flex justify-content-center align-items-center text-center">
              <p>You :&nbsp;</p>
              <p className="icon-head ">x</p>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center text-center">
              <p>Computer :&nbsp;</p>
              <p className="icon-head">o</p>
            </div>
          </div>
          <div className="row">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="col-4 cell"
                data-value={num}
                data-name={num}
                onClick={handleClick}
                style={{
                  pointerEvents: clickedCells.includes(num) ? "none" : "auto",
                  // backgroundColor: playerOne.includes(num)
                  //   ? "yellow"
                  //   : playerTwo.includes(num)
                  //   ? "red"
                  //   : "transparent",
                }}
              >
                {playerOne.includes(num) ? (
                  <h1 className="icon">x</h1>
                ) : playerTwo.includes(num) ? (
                  <h1 className="icon">o</h1>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>

          <div className="row">
            {[4, 5, 6].map((num) => (
              <div
                key={num}
                className="col-4 cell"
                data-value={num}
                data-name={num}
                onClick={handleClick}
                style={{
                  pointerEvents: clickedCells.includes(num) ? "none" : "auto",
                  // backgroundColor: playerOne.includes(num)
                  //   ? "yellow"
                  //   : playerTwo.includes(num)
                  //   ? "red"
                  //   : "transparent",
                }}
              >
                {playerOne.includes(num) ? (
                  <h1 className="icon">x</h1>
                ) : playerTwo.includes(num) ? (
                  <h1 className="icon">o</h1>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>

          <div className="row">
            {[7, 8, 9].map((num) => (
              <div
                key={num}
                className="col-4 cell"
                data-value={num}
                data-name={num}
                onClick={handleClick}
                style={{
                  pointerEvents: clickedCells.includes(num) ? "none" : "auto",
                  // backgroundColor: playerOne.includes(num)
                  //   ? "yellow"
                  //   : playerTwo.includes(num)
                  //   ? "red"
                  //   : "transparent",
                }}
              >
                {playerOne.includes(num) ? (
                  <h1 className="icon">x</h1>
                ) : playerTwo.includes(num) ? (
                  <h1 className="icon">o</h1>
                ) : (
                  ""
                )}
              </div>
            ))}
            {winner && (
              <div className="mt-5 text-center" style={{marginBottom:'-2rem'}}>
                <h5>
                  {winner === "Draw" ? "It's a draw!" : `${winner} wins!`}
                </h5>
              </div>
            )}

            <div className="text-center">
              <div
                className="btn btn-outline-primary mt-5 pe-5 ps-5 align-content-center"
                onClick={() => {
                  setPlayerOne([]);
                  setPlayerTwo([]);
                  setClickedCells([]);
                  setWinner(null);
                }}
              >
                Restart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tic;
