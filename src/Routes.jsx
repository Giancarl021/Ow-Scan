import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
// import Mangas from './pages/Mangas';
// import Partnership from './pages/Partnership';
// import Recruitment from './pages/Recruitment';
// import Team from './pages/Team';
// import Contact from './pages/Contact';
// import Donate from './pages/Donate';
// import NotFound from './pages/NotFound';

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/mangas" component={Mangas} />
            <Route path="/parceria" component={Partnership} />
            <Route path="/recrutamento" component={Recruitment} />
            <Route path="/equipe" component={Team} />
            <Route path="/contato" component={Contact} />
            <Route path="/doar" component={Donate} />

            <Route component={NotFound} /> */}
        </Switch>
    </HashRouter>
)

export default Routes;