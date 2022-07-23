import React, { useEffect, useState } from "react";

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
  ]);

  const findBigBarItem = (data)  => {
    return data.sort((val1,val2) => val2.value-val1.value)[0].value
  
  }

  const [bigBarData, setBigBarData] = useState(findBigBarItem(barData))

  const setBarDataWithRandom = () => {
    let data=[...barData];
    data.forEach((item) => {
      item.value+=getRandomNumber();
    })
    setBigBarData(findBigBarItem(data))
    setBarData(data);
  }

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      //setBarDataWithRandom()
    }, 500)
  },[])

  const renderBarItem = (item,index) => {
    let rate = item.value/bigBarData;
    rate=rate * (1000 - 40);
    const percent = (rate*100)/1040;
    console.log(percent);
  }

  return (
    <>
      <div className="app-title">Firmaların Müşteri Sayıları</div>
    </>
  );
}

export default App;
