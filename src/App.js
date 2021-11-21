
import './scss/style.css';
import Login from './routes/Login';
// import { Routes ,Route } from 'react-router-dom';
import SignUp from './routes/SignUp';

function App() {
  return (
    // <Routes>
    //   <Route exact path='/' component={<Layout/>} />
    //   <Route exact path='/signup' component={<SignUp/>} />
    // </Routes>
    <SignUp />
  );
}

export default App;
