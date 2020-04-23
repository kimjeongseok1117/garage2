import React, { useState } from "react";
//하나의 파일 default는 한개만 가능, 나머지 기본 export는 중괄호 안에 다 담을 수 있다.
import { Button } from "./components/";

function App() {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(8);

  function increase() {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  };
  const kjs = () => {
    setState(!state);
  };
  return (
    <div className="App">
      {state ? <div>참</div> : <div>거짓</div>}
      {state || (
        <>
          {count}
          <Button onClick={increase}></Button>
          <Button onClick={decrease}></Button>
          <Button onClick={kjs}></Button>
        </>
      )}
    </div>
  );
}

export default App;
