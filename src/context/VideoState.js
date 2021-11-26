import React, { useReducer, createContext } from 'react';
import VideoReducer from './VideoReducer';

// Create initial state
const initialState = {
	loggedIn: false,
	
};
// Create context
export const VideoContext = createContext(initialState);

// Provider component
export const VideoProvider = (props) => {
	const [state, dispatch] = useReducer(VideoReducer, initialState);

	
	const setLoginState = () => {
		dispatch({
			type: 'set-login-state'
		})
	}

	const setLogoutState =() => {
		dispatch({
			type: 'set-logout-state'
		})
	}

	return (
		<VideoContext.Provider
			value={{
				loggedIn: state.loggedIn,
                setLoginState,
				setLogoutState
			}}
		>
			{props.children}
		</VideoContext.Provider>
	);
};
