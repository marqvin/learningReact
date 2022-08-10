// Importando Componente Lista
import { Lista }  from "./componentes";

function App() {

  let listaProdutos = [
    {
      id: 1,
      title: 'banana'
    },
    {
      id: 2,
      title: 'pêra'
    },
    {
      id: 3,
      title: 'maçã'
    },
  ]


  return (
    <>
      <Lista titulo = "Meus estudos de React" itens = {listaProdutos} />
    </>
  );
  
}

export default App;
