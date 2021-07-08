import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/layout';
import Inicio from './views/inicio';
import QuienesSomos from './views/quienesSomos';
import Contactanos from './views/contactanos';
import Examen from "./views/Examen";
import MaterialTeorico from './views/materialTeorico';

import Prueba from './views/prueba';
// import MaterialTeorico from "./pages/MaterialTeorico"; 
// import Requisitos from "./pages/Requisitos";
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
            <Route path="/Material_teorico" exact component={MaterialTeorico} />
            <Route path="/prueba" exact component={Prueba}/>
            {/* <Route path="/requisitos" exact component={Requisitos} /> */}
            <Route path="/examen" exact component={Examen} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
