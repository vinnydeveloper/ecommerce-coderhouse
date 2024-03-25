import React from 'react'
import logo from "./logo.svg";
import "./App.css";

import Botao from "./components/Botao";
import Text from './components/Text'
import Card from "./components/Card";

function App() {
  let idPainel = "painel";

 const [i, setI ] =  React.useState(15)
 const [lista, setLista ] = React.useState(['item 1', 'item 2'])
 const [novoItem, setNovoItem ] = React.useState('Item aleatorio')

  return (
    <div id={idPainel} className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Contagem: {i}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Text />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Botao name="Entrar" type="success" acao={()=>alert("Login com sucesso!")}/>
        <Botao name="Sair" type="error " acao={()=>alert("Logout com sucesso!")}/>

        <Card >
          <h1>Titulo do meu card</h1>
          <Botao name="conteudo" type="success" acao={()=>alert("Login com sucesso!")}/>
        </Card>
        
        <h1>Contagem: {i}</h1>
        <Botao name="Somar 1" acao={()=> setI( i + 1)}/>


        <h1>Lista</h1>
        {lista}

        <input type="text" name="" id="" value={novoItem} onChange={(event)=> setNovoItem(event.target.value)} />
        <Botao name="Adicionar item" acao={()=> {
          setLista([...lista, novoItem])

          setNovoItem('')
          }}/>
  
        </header>
    
    </div>
  );
}

export default App;
