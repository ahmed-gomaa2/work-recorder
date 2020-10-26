import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SpareParts from "./components/SpareParts";
import SparePartsForm from "./components/SparePartsForm";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Route component={() => <Header />} />
            <Route exact path={'/'} component={() => <Home />}/>
            <Route exact path={'/spareParts'} component={() => <SpareParts/>} />
            <Route exact path={'/sparePart/add'} component={() => <SparePartsForm />} />
        </BrowserRouter>
    </div>
  );
}

export default App;
