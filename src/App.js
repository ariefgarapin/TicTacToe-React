import { useState,useEffect } from 'react';
import './App.css';
import Square from './square';
import {Patterns} from './logika'
function App() {  
  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [Pemain,setPemain] = useState("-");
  const [Hasil, setHasil] = useState({winner : "none", state: "none"});
  useEffect(()=>{
    checkWin();
    cekSeri();
    if(Pemain == "+"){
      setPemain("-");
    }else{
      setPemain("+");
    }
  },[board]);
  useEffect(()=>{
    if(Hasil.state != "none"){
      alert(`Permainan Selesai! Pemenangnya adalah : ${Hasil.winner}`);
      mulaiUlang();
    }
  })
  const pilihsquare = (square) => {
    setBoard(board.map((val,idx) => {
      if(idx == square && val == ""){
        return Pemain;
      }
      return val;
    }))
  };
  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if(firstPlayer == "") return;
      let TemukanPemenang = true;
      currPattern.forEach((idx) => {
        if(board[idx] != firstPlayer){
          TemukanPemenang = false;
        }
      })
      if(TemukanPemenang){
        setHasil({winner:Pemain,state:"Menang"});
      }
    });
  };
  const cekSeri = () => {
    let filled = true;
    board.forEach((square) => {
      if(square==""){
        filled = false;
      }
    });
    if(filled){
      setHasil({winner:"Tidak Ada", state:"Seri"});
    }
  }
  const mulaiUlang = () => {
    setBoard(["","","","","","","","",""]);
    setPemain("-");
    setHasil({winner : "none", state: "none"});
    
  }
  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} pilihsquare={() => { pilihsquare(0); }} />
          <Square val={board[1]} pilihsquare={() => { pilihsquare(1); }} />
          <Square val={board[2]} pilihsquare={() => { pilihsquare(2); }} />
        </div>
        <div className='row'>
          <Square val={board[3]} pilihsquare={() => { pilihsquare(3); }} />
          <Square val={board[4]} pilihsquare={() => { pilihsquare(4); }} />
          <Square val={board[5]} pilihsquare={() => { pilihsquare(5); }} />
        </div>
        <div className='row'>
          <Square val={board[6]} pilihsquare={() => { pilihsquare(6); }} />
          <Square val={board[7]} pilihsquare={() => { pilihsquare(7); }} />
          <Square val={board[8]} pilihsquare={() => { pilihsquare(8); }} />
        </div>
      </div>
    </div>
  );
}

export default App;
