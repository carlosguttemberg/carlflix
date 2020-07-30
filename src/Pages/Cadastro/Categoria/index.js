import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();

          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
      } }>

        <FormField
          label="Nome da Categoria"
          value={values.nome}
          onChange={handleChange}
          name="nome"
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          name="descricao"
        />

        <FormField
          label="Cor"
          value={values.cor}
          onChange={handleChange}
          name="cor"
          type="color"
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map( (categoria, indice) => { 
            return(
              <li key={`${categoria} ${indice}`}>
                {categoria.nome}
              </li>
            )
        }) }
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;