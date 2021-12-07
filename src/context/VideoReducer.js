function VideoReducer(state, action) {
	switch (action.type) {
		case 'set-login-state':
			return {
				loggedIn: true,
			};
		case 'set-logout-state':
			return {
				loggedIn: false,
			};
		case 'set-user':
			return {
				currentUser: action.payload
			}
		default:
			return state;
	}
}
export default VideoReducer;
