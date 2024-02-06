import css from './Options.module.css';

export default function Options({ onUpdate, isHidden, onReset }) {
  return (
    <div className={css.container}>
      <button onClick={() => onUpdate('good')} className={css.button}>
        Good
      </button>
      <button onClick={() => onUpdate('neutral')} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onUpdate('bad')} className={css.button}>
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
