import "./styles.css"
import { Link } from "react-router-dom"

export default function Erro() {
    return(
        <div className="conteiner-erro">
            <h1>404</h1>
            <h2>Pagina não Encontrada!</h2>
            <Link to="/">Veja todos os filmes aqui!</Link>
        </div>
    )
}