import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      {options.map(option => (
        <button
          key={option}
          className={css.button}
          onClick={onLeaveFeedback[option]}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
