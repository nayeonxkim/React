// MyComponent.js
import React, {useState} from 'react';
import MyChild from './MyChild';


function MyComponent() {
  const [userName, setUserName] = useState('Meeseeks')

  return (
  <div>
    <h4>MyComponent입니다. 안녕하세요 {userName}님!</h4>
    <MyChild userName={userName}/>
  </div>
  );
}

export default MyComponent;
