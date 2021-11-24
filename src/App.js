import './scss/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Play from './routes/Play';
import SignUp from './routes/SignUp';
import Video from './routes/Video';
import Account from './routes/Account';
import { VideoProvider } from './context/VideoState';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<Router>
			<TransitionGroup>
				<CSSTransition key='1' classNames='page' timeout={500}>
					<Switch>
						<VideoProvider>
							
							<Route exact path='/'>
								<Login />
							</Route>
							
							<Route exact path='/signup'>
								<SignUp />
							</Route>
							<Route exact path='/video'>
								<Video />
							</Route>
							<Route exact path='/play'>
								<Play />
							</Route>
							<Route exact path='/account'>
								<Account />
							</Route>
						</VideoProvider>
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		</Router>
	);
}

export default App;
