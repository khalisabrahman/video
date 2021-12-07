import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './routes/Login';
import Play from './routes/Play';
import SignUp from './routes/SignUp';
import Video from './routes/Video';
import Account from './routes/Account';
import { VideoProvider } from './context/VideoState';
import './scss/style.css';


function App() {
	return (
		<Router>
			<Switch>
				<VideoProvider>
					<Route exact path='/'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<SignUp />
					</Route>
					<PrivateRoute exact path='/video' component={Video} />
					<PrivateRoute exact path='/play' component={Play} />
					<PrivateRoute exact path='/account' component={Account} />
				</VideoProvider>
			</Switch>
		</Router>
	);
}

export default App;
