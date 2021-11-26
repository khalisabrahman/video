
function VideoReducer(state, action) {
	switch (action.type) {
		case 'set-login-state':
			return {
				
				loggedIn: true,
			};
		case 'set-logout-state':
			return {
				
				loggedIn: false
			}
		default:
			return state;
	}
}
export default VideoReducer;
