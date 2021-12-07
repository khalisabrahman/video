import React, { useReducer, createContext } from 'react';
import VideoReducer from './VideoReducer';

// Create initial state
const initialState = {
	loggedIn: false,
	currentUser: null
};
// Create context
export const VideoContext = createContext(initialState);

// Provider component
export const VideoProvider = (props) => {
	const [state, dispatch] = useReducer(VideoReducer, initialState);

	const setLoginState = () => {
		dispatch({
			type: 'set-login-state',
		});
	};

	const setLogoutState = () => {
		dispatch({
			type: 'set-logout-state',
		});
	};

	const setCurrentUser = (data) => {
		dispatch({
			type: 'set-user',
			payload: data
		})
	}

	return (
		<VideoContext.Provider
			value={{
				loggedIn: state.loggedIn,
				currentUser: state.currentUser,
				setLoginState,
				setLogoutState,
				setCurrentUser
			}}
		>
			{props.children}
		</VideoContext.Provider>
	);
};
