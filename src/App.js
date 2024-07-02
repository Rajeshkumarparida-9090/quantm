import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import SideBar from './components/SideBar';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <BrowserRouter>
      <SideBar />
     </BrowserRouter>
    </div>
  );
}

export default App;
