import "../assets/css/sobre.css";
import minha_foto from "../assets/img/photo_sobre.png";
export const Sobre = () =>{
    return (
        <section className="w-100 p-5 mt-5" id="sobre">
            <h2 className="w-100 text-center">SOBRE MIM</h2>
            <div className="container_sobre">
                <img src={minha_foto} alt="Minha foto" className="my_image"/>
                <p>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                </p>
            </div>
        </section>
    )
}