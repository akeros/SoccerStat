import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './pages/Start';
import ListLig from './pages/ListLig';
import ListCommand from './pages/ListCommand';
import CalendarOneCommand from './pages/CalendarOneCommand';
import CalendarLig from './pages/CalendarLig';

function App() {
  return (
    <div className="App">
      <Router basename="/SoccerStat">
        <div>
          <Switch>
            <Route path={'/'} exact>
              <Start />
            </Route>
            <Route path={"/ligs"} exact>
              <ListLig />
            </Route>
            <Route path={'/commands'} exact>
              <ListCommand />
            </Route>
            <Route path={'/ligs/:id'}>
              <CalendarLig />
            </Route>
            <Route path={'/commands/:id'}>
              <CalendarOneCommand />
            </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
