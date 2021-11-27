import React from "react";
import s from "../FeedbackOpt/Feedback.module.css";

//import PropTypes from "prop-types";
const FeedbackElems = ({ options, func }) => (
  <ul className={s.list}>
    {options.map(({ id, value }) => {
      return (
        <li className={s.listItem} key={id} onClick={() => func(value)}>
          <button type="button">{value}</button>
        </li>
      );
    })}
  </ul>
);

export { FeedbackElems };
