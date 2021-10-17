import React from 'react';
import './App.css';
import Counter from './Counter'
import useLocalStorage from './useLocalStorage';

function App() {

  const topLimit = 7;
  const botLimit = 0;

  const [count, setCount] = useLocalStorage(botLimit)
  const [warnExtremeBottomValue, setWarnExtremeBottomValue] = React.useState<boolean>(false)

  const [warnIncorrectInputTopLimit, setWarnIncorrectInputTopLimit] = React.useState<boolean>(false)
  const [warnIncorrectInputBotLimit, setWarnIncorrectInputBotLimit] = React.useState<boolean>(false)

  const [realLimitTop, setRealLimitTop] = React.useState<number>(topLimit)
  const [realLimitBot, setRealLimitBot] = React.useState<number>(botLimit)

  const increaseCount = () => {
    setWarnIncorrectInputBotLimit(false)
    setWarnExtremeBottomValue(false);
    setCount((prevCount: number) => prevCount + 1)
  }

  const decrementCount = () => {
    if (count === realLimitBot+1) {
      setWarnExtremeBottomValue(true);
    }
    setCount((prevCount: number) => prevCount - 1)
    setWarnIncorrectInputTopLimit(false);
  }

  const setLimitOnChangeTopLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value >= count) {
      setWarnIncorrectInputTopLimit(false)
      setRealLimitTop(+e.currentTarget.value)
    } else {
      setWarnIncorrectInputTopLimit(true)
    }
  }

  const setLimitOnChangeBotLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= count) {
      setWarnIncorrectInputBotLimit(false)
      setRealLimitBot(+e.currentTarget.value)
    } else {
      setWarnIncorrectInputBotLimit(true)
    }
  }

  const reset = () => {
    setWarnExtremeBottomValue(false);
    setWarnIncorrectInputTopLimit(false);
    setWarnIncorrectInputBotLimit(false);
    setRealLimitBot(0);
    setCount(0)
  }

  return (
    <div className="App">
     <Counter count={count} realLimitTop={realLimitTop} warnExtremeBottomValue={warnExtremeBottomValue} 
     increaseCount={increaseCount} realLimitBot={realLimitBot} decrementCount={decrementCount} 
     setLimitOnChangeTopLimit={setLimitOnChangeTopLimit} setLimitOnChangeBotLimit={setLimitOnChangeBotLimit}
     reset={reset} warnIncorrectInputTopLimit={warnIncorrectInputTopLimit} warnIncorrectInputBotLimit={warnIncorrectInputBotLimit}/>
    </div>
  );
}

export default App;
