import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import css from './App.module.css';

export default function App() {
  const [values, setValues] = useState(getInitFeedback);
  const [clicks, setClicks] = useState(getInitCliksCount);
  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);
  const isHidden = clicks === 0;

  useEffect(() => {
    window.localStorage.setItem('initial-feedback', JSON.stringify(values));
    window.localStorage.setItem('initial-clicks-count', JSON.stringify(clicks));
  }, [values, clicks]);

  return (
    <div className={css.container}>
      <Description />
      <Options onUpdate={onLeaveFeedback} isHidden={isHidden} onReset={onReset} />
      {isHidden ? (
        <Notification />
      ) : (
        <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      )}
    </div>
  );

  function onLeaveFeedback(type) {
    setValues({
      ...values,
      [type]: values[type] + 1,
    });

    setClicks(clicks + 1);
  }

  function onReset() {
    setValues({ ...values, good: 0, neutral: 0, bad: 0 });
    setClicks(0);
  }

  function getInitFeedback() {
    const initFeedback = window.localStorage.getItem('initial-feedback');
    if (initFeedback !== null) {
      return JSON.parse(initFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  }

  function getInitCliksCount() {
    const initClicksCount = window.localStorage.getItem('initial-clicks-count');
    if (initClicksCount !== null) {
      return JSON.parse(initClicksCount);
    }
    return 0;
  }

}
