import { Link } from "react-router-dom"
import "../assets/css/header.css";

export const Header = () => {
    return (
        <nav className="row p-3 w-100 bg-transparent header">
            <Link to="/" className="col-2">Logo</Link>
            <div className="col d-flex justify-content-end">
                <div className="text-center mx-3">Inicio</div>
                <div className="text-center mx-3">Sobre</div>
                <div className="text-center mx-3">Projetos</div>
                <div className="text-center mx-3">Contatos</div>
            </div>
        </nav>
    )
}