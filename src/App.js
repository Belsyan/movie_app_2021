import React from 'react';

function Food({fav}){
  console.log(fav);
  return <h3>I like {fav}</h3>;
}

function App() {
  return <div className="App">
    Hello
    <Food fav="kimchi"/>
    <Food fav="Ramen"/>
    <Food fav="chukumi"/>

  </div>;
}

export default App;
