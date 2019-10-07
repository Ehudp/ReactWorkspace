// Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Creat a react component


  const buttonText = { text: 'Click Me!' };
  const style = { backgroundColor: 'blue', color: 'white' };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button id="b" style={style} >
        {buttonText.text}
      </button>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
