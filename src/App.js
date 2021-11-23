
import './scss/style.css';
import Login from './routes/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './routes/SignUp';
import Video from './routes/Video';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/video'>
          <Video />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
