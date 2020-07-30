import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function CadastroCategoria() {
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Músicas');

  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form>
        <label>
          Nome da Categoria:
          <input
           type="text"
           value={nomeDaCategoria}
           onChange={(infosDoEnvento) =>{
             setNomeDaCategoria(infosDoEnvento.target.value);
           }}
           />
           
        </label>
        <button>
          Cadastrar
        </button>

      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;