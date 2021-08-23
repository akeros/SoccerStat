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
      <Router>
        <div>
          <Switch>
            <Route path={'/'} exact>
              <Start />
            </Route>
            <Route path={"/list-lig"}>
              <ListLig />
            </Route>
            <Route path={'/list-command'}>
              <ListCommand />
            </Route>
            <Route path={'/calendar-lig/:id'}>
              <CalendarLig />
            </Route>
            <Route path={'/calendar-one-command/:id'}>
              <CalendarOneCommand />
            </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
