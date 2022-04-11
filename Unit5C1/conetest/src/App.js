import React, { useState } from "react";

function App() {
  const showBalls = (balls) => {
    if (balls % 6 == 0) {
      return balls / 6;
    }

    // let rem = balls % 6;
    let over = (balls / 6).toFixed(0);
    //
    return over + "." + (balls % 6) / 10;
  };
  const [initials, setInitials] = useState({
    score: 76,
    wicket: 2,
    over: 50,
  });
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              initials.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              initials.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              // (initials.over / 6 - 0.1).toFixed(1)
              //
              initials.over % 6 == 0
                ? initials.over / 6
                : showBalls(initials.over)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            // console.log("clicked");
            setInitials({ ...initials, score: initials.score + 1 });
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            // console.log("clicked");
            setInitials({ ...initials, score: initials.score + 4 });
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            // console.log("clicked");
            setInitials({ ...initials, score: initials.score + 6 });
          }}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            // console.log("clicked");
            setInitials({ ...initials, wicket: initials.wicket + 1 });
          }}
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            // console.log("clicked");
            setInitials({
              ...initials,
              over: initials.over + 1,
            });
            console.log(initials.over);
          }}
        >
          Add 1
        </button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
