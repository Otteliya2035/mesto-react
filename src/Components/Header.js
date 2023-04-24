import logo from "../images/Логотип.svg";
import "../index.css";
function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Логотип" className="header__logo" />
      </header>
    </>
  );
}

export default Header;
