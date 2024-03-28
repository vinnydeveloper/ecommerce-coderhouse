
import { useEffect } from "react";
import "./botao.css";

function Botao(props) {



  useEffect(()=>{
    console.log("render")
  }, [])


  return (
   <button className={props.type} onClick={props.acao}>
    {props.name}
   </button>
  );
}

export default Botao;
