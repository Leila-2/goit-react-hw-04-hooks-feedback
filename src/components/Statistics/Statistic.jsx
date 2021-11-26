import React from "react";
import Notification from "../Notification/Notification";
function Statistic({ good, neutral, bad, total, percentage }) {
  return (
    <>
      {total > 0 ? (
        <div>
          <ul>
            <li key="id-1"> Good: {good} </li>
            <li key="id-2">Neutral: {neutral}</li>
            <li key="id-3">Bad: {bad}</li>
            <li key="id-4">Total: {total}</li>
            <li key="id-5">Positive Feedback: {percentage}%</li>
          </ul>
        </div>
      ) : (
        <Notification message="No feedback given 🤷🏼‍♀️" />
      )}
    </>
  );
}
export default Statistic;
