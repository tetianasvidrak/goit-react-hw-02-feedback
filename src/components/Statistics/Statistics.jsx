import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <p className={css.result}>
        Good:<span className={css.value}>{good}</span>
      </p>
      <p className={css.result}>
        Neutral:
        <span className={css.value}>{neutral}</span>
      </p>
      <p className={css.result}>
        Bad:<span className={css.value}>{bad}</span>
      </p>
      <p className={css.result}>
        Total:
        <span className={css.value}>{total}</span>
      </p>
      <p className={css.result}>
        Positive feedbacks:
        <span className={css.value}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Statistics;
