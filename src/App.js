import React, { useState } from "react";

function App() {
  const getRandomNumber = () => {
    return Math.floor(Math.random()*100+1)
  }
  const [barData, setBarData] = useState([
    {
      id:1,
      title: 'Facebook',
      color: '#42G7B2',
      value: getRandomNumber(),
    },
    {
      id:2,
      title: 'Amazon',
      color: '#ff9900',
      value: getRandomNumber(),
    },
    {
      id:3,
      title: 'Youtube',
      color: '#ff0000',
      value: getRandomNumber(),
    },
    {
      id:6,
      title: 'Google',
      color: '#34a853',
      value: getRandomNumber(),
    },
    {
      id:5,
      title: 'Microsoft',
      color: '#f25022',
      value: getRandomNumber(),
    }
  ])


  return (
    <div className="App">
      d
    </div>
  );
}

export default App;
