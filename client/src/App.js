import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import SpareParts from "./components/SpareParts";
import SparePartsForm from "./components/SparePartsForm";
import Workers from "./components/Workers";
import WorkerForm from "./components/WorkerForm";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Route component={() => <Header />} />
            <Route exact path={'/'} component={() => <Home />}/>
            <Route exact path={'/spareParts'} component={() => <SpareParts/>} />
            <Route exact path={'/sparePart/add'} component={() => <SparePartsForm />} />
            <Route exact path={'/workers'} component={() => <Workers />} />
            <Route exact path={'/worker/add'} component={() => <WorkerForm/>} />
        </BrowserRouter>
    </div>
  );
}

export default App;
