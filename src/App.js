import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from './GlobalState';
import { Dashboard } from './Dashboard';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/"><Dashboard /></Route>
            <Route path="/add-transaction"><AddTransaction/></Route>
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
    
  );
}

export default App;
