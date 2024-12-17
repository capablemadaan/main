import reactimage from "../assets/react-core-concepts.png";
import './Header.css';

const reactdescription = ["Fundamental", "Core", "Crucial"];
function randomint(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const description = reactdescription[randomint(2)];
  return (
    <header>
      <img src={reactimage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
export default Header;