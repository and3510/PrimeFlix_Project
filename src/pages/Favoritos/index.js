import { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Favoritos(){
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || [])

  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
        return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
    toast.success("Filme Excluido")

    }

  return(
    <div className="meusfilmes">
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span>Voce nao possui nenhum filme salvo :C </span>}

      <ul>
        {filmes.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id) }>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;