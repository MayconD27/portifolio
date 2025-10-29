import "../assets/css/main.css";
import my_image from "../assets/img/icon_face.png";
export const Main = () => {
    return(
        <main className="row justify-content-center px-5">
            <div className="text col-5">
                <h1>Maycon</h1>
                <h1>Douglas</h1>
                <h1>Santos</h1>
                <p>Desenvolvedor Web</p>
            </div>
            <img className="col-auto" src={my_image} alt="Minha imagem"/>
        </main>
    )
}