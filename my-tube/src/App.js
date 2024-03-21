import logo from './logo.svg';
import './App.css';
import Head from "./components/Head"
import Body from "./components/Body"

function App() {
  return (
    <div className="App">
      <h2 className="text-red-500">This is MyTube</h2>
      <Head/>
      <Body/>
    </div>
  );
}

export default App;
