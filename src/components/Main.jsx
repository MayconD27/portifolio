import "../assets/css/main.css";
import my_image from "../assets/img/icon_face.png";
export const Main = () => {
    return(
        <main className="row">
            <div className="text">
                <h1>Maycon Douglas Santos</h1>
                <p>Desenvolvedor Web</p>
            </div>
            <img className="col-5" src={my_image} alt="Minha imagem" />
        </main>
    )
}