
function VideoReducer(state, action) {
	switch (action.type) {
		case 'set-login-state':
			return {
				...state,
				loggedIn: true,
			};
		
		default:
			return state;
	}
}
export default VideoReducer;
