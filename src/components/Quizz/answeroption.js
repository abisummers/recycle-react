import React from "react";
import PropTypes from "prop-types";

function AnswerOption(props) {
  return (
    <li
      className={
        props.isAnswered &&
        props.answer == props.answerType &&
        (props.answerType ? "answerOption success" : "answerOption failure")
      }
    >
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerPoint === props.answer}
        id={props.answerPoint}
        value={props.answerPoint}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerPoint}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  answerComment: PropTypes.string,
  answerPoint: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
