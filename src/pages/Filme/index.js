import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import './styles.css'

import { useEffect, useState } from 'react'



export default function Filme() {

    const { id } = useParams();
    const navigate  = useNavigate();
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '91c0d7ad5a1a147ce0f2cb3772f265f2',
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)

            })
            .catch(()=> {
                console.log("Filme não encontrado")
                navigate("/", { replace: true});
                return; 
            })
            
        }
        loadFilme();


        return () => {
            console.log("Componente foi desmontado")
        }
    }, [navigate, id]);


    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix")

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id)

        if (hasFilme) {
            toast.warn("Filme já está Salvo")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme Salvo")
        
    }

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>


            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='blank' rel="external" href={`https://youtube.com/results?search_query=${filme.title}`}>
                        Trailer
                    </a>
                </button>
            </div>
            
        </div>

    )
}