import React from 'react';
import ReactDom from 'react-dom';
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
const App = () => {
  return (
    <h1>
      Olá mundo!!!
    </h1>
  )
}
ReactDom.render(<App />, mainElement);