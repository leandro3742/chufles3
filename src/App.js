import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/layout';
import Inicio from './views/inicio';
import QuienesSomos from './views/quienesSomos';
import Contactanos from './views/contactanos';

// import MaterialTeorico from "./pages/MaterialTeorico"; 
// import Requisitos from "./pages/Requisitos";
// import Examen from "./pages/Examen";
// import Pruebas from "../pages/Pruebas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/Quienes_somos" exact component={QuienesSomos} />
            <Route path="/Contactanos" exact component={Contactanos} />            
            {/* <Route path="/materialTeorico" exact component={MaterialTeorico} /> */}
            {/* <Route path="/requisitos" exact component={Requisitos} /> */}
            {/* <Route path="/examen" exact component={Examen} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
