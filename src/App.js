import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Posts from './Pages/Posts';
import Header from './Component/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Posts" component={Posts} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
