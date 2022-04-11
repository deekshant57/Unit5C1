// import logo from './logo.svg';
import "./App.css";

const Logo = () => {
  return <h2 className="logo">LOGOBAKERY</h2>;
};

const Links = (props) => {
  return (
    <ul className="navbar-links">
      <li>{props.links}</li>
    </ul>
  );
};

const Button = () => {
  return (
    <div>
      <button className="button">Contact</button>
    </div>
  );
};
function App() {
  const links = ["Services", "Projects", "About"];
  return (
    <div>
      <nav className="navbar">
        <Logo></Logo>
        <Links links={links}></Links>
        <Button></Button>
      </nav>
    </div>
  );
}

export default App;
