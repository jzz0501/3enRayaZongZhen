import logo from './logo.svg';
import './App.css';

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square values="1" />
        <Square values="2" />
        <Square values="3" />
      </div>
      <div className="board-row">
        <Square values="4" />
        <Square values="5" />
        <Square values="6" />
      </div>
      <div className="board-row">
        <Square values="7" />
        <Square values="8" />
        <Square values="9" />
      </div>
    </>
  );
}

function Square({values}) {

  function handleClick() {
    console.log('hiciste click!');
  }

  return (
    <button 
      className="square" 
      onClick={handleClick}
    >
      {values}
    </button>
  );
}