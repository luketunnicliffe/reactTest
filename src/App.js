import './App.css';
import Tweet from './Tweet';
import React, { useState } from 'react';


function App() {
  
    const [isRed, setRed] = useState(0);
    const [count, setCount] = useState(false);

    const [user, setUser] = useState([
      { name:"Poop", message: "I did a poop."},
      { name:"John", message: "I am a poop."},
      {name:"Poop pooperson", message: "I ate a poop for breakfast."}
    ]);


    const increment = () => {
      setCount(count + 1);
      setRed(!isRed);
    }

    return (
    <div className="App">
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>

      <div className="TweetJacket"> 

    <h1 className={isRed ? "red" : ""}>Change my color </h1>

      
        <p>
          Poop
        </p>
        <Tweet name="Tweet One" message="This is a poop."/>
        <Tweet name="Tweet Two" message="This is not a poop."/>
        <Tweet name="Tweet Three" message="This used to be a poop."/>
        <Tweet name="Tweet Four" message="Howdy there, partner!" count={count}/>
        {count}
        </div>


        {user.map(user => (
          <Tweet name={user.name} message={user.message}/>
        ))}

     </div>



  );
}

export default App;
