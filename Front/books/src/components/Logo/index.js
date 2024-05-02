// para importar imagens
import logo from "../../img/logo.svg";
import "./estilo.css";

//TODO: componente responsável em retornar a logo.
function Logo() {
  //Esse return é informando que ele irá retornar html
  return (
    <div className="logo">
      {/* Como faço para importar uma log da pasta imagens*/}
      <img
        src={logo}
        alt="Identidade visual da empresa"
        className="logo-img"
      ></img>
      <p>
        <strong>Treinamento</strong> Books
      </p>
    </div>
  );
}

//Disponibiliza para ser utilizado em outras parte do projeto.
//FIXME: exemplo utilizando fixme para saber onde corrigir.
export default Logo;
