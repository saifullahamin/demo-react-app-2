import "./App.css";
import ChildApp from "./ChildApp";

function App() {
  return (
    <div>
      <h1>Hey! this is a parent component.</h1>
      <hr />
      <ChildApp propsVal="Saifullah" anotherPropsVal="Saifullah Amin"/>
      <ChildApp propsVal="Mohsin" anotherPropsVal="Mohsin Khalid"/>
      <ChildApp propsVal="Aamir" anotherPropsVal="Aaamir Pinger"/>
    </div>
  );
}

export default App;
