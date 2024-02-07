import css from './Options.module.css';

export default function Options({ onFeedbackSelect, isHidden, onReset }) {
  return (
    <div className={css.container}>
      <button onClick={() => onFeedbackSelect('good')} className={css.button}>
        Good
      </button>
      <button onClick={() => onFeedbackSelect('neutral')} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onFeedbackSelect('bad')} className={css.button}>
        Bad
      </button>
      {!isHidden && (
        <button onClick={onReset} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
}
