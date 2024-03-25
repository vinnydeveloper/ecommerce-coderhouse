import "./botao.css";



function Botao(props) {

  return (
   <button className={props.type} onClick={props.acao}>
    {props.name}
   </button>
  );
}

export default Botao;
