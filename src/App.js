import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Posts from './Pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
