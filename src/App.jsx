import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Botao from "./components/Botao";
import { getListOnApi } from "./fakeServer";


function App() {
  let idPainel = "painel";

  // const [i, setI] = useState(15);
  const [lista, setLista] = useState([]);

  const [novoItem, setNovoItem] = useState("Item aleatorio");


  useEffect(()=> {
    const promise = async ()=> {
      const result = await getListOnApi()


      setLista(result)
    }


    promise()
  }, [])
  

  return (
    <div id={idPainel} className="App">
      {/* <header className="App-header" >
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
          <h1 id="teste">Titulo do meu card</h1>
          <Botao name="conteudo" type="success" acao={()=>alert("Login com sucesso!")}/>
        </Card>
        
     


     
        </header> */}
      {/* <h1  id="teste">Contagem: {i}</h1>
        <Botao name="Somar 1" acao={()=> setI( i + 1)}/> */}

      <h1>Lista</h1>
     
      <div>
      {lista.map((item, index) => (
          <div key={item.id}>
            <p>id: {item.id}</p>
            <p>titulo: {item.titulo}</p>
            <p>img: {item.linkImg}</p>
          </div>
        ))}

      </div>
       
      

      <input
        type="text"
        name=""
        id=""
        value={novoItem}
        onChange={(event) => setNovoItem(event.target.value)}
      />
      <Botao
        name="Adicionar item"
        acao={() => {
          setLista([...lista, novoItem]);

          setNovoItem("");
        }}
      />
    </div>
  );
}

export default App;
