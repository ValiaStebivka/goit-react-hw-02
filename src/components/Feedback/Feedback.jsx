import css from './Feedback.module.css';

export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.container}>
      <ul className={`${css.feedbackTypes} ${css.list}`}>
        <li className={`${css.feedbackTypesItem} ${css.listItem}`}>
          <p className={css.feedback}>
            Good: <span className={css.count}>{good}</span>
          </p>
        </li>
        <li className={`${css.feedbackTypesItem} ${css.listItem}`}>
          <p className={css.feedback}>
            Neutral: <span className={css.count}>{neutral}</span>
          </p>
        </li>
        <li className={`${css.feedbackTypesItem} ${css.listItem}`}>
          <p className={css.feedback}>
            Bad: <span className={css.count}>{bad}</span>
          </p>
        </li>
      </ul>
      <ul className={`${css.fbAnalise} ${css.list}`}>
        <li className={`${css.fbAnaliseItem} ${css.listItem}`}>
          <p className={css.feedback}>
            Total: <span className={css.count}>{totalFeedback}</span>
          </p>
        </li>
        <li className={`${css.fbAnalyseItem} ${css.listItem}`}>
          <p className={css.feedback}>
            Positive: <span className={css.count}>{positiveFeedback} %</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
