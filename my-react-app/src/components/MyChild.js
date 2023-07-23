import React, { useState } from 'react'

function MyChild(props) {
  // State
  const userName = props.userName
  const [totNum, setTotNum] = useState(0)

  // Method
  const handleIncrement = () => {
    setTotNum(totNum + 1)
  }

  return (
    <div>
      <h4>{userName}님의 페이지</h4>
      <p>클릭 횟수 : {totNum}</p>
      <button onClick={handleIncrement}>↑</button>  
      
    </div>
  )
}

export default MyChild