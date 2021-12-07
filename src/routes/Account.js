import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Plans } from '../components/Plans';
import { ProfileInfo } from '../components/ProfileInfo';
import { ProfileBilling } from '../components/ProfileBilling';
import {VideoContext} from '../context/VideoState';
import { auth } from '../components/firebase-config';
import  {signOut}  from  'firebase/auth';

function Account() {
	const [active, setActive] = useState('profile');
	const { setLogoutState } = useContext(VideoContext);

	const logout = async () => {
		await signOut(auth)
	}

	function handleClick() {
		logout();
		setLogoutState();
	}

	return (
		<div className='flex container--pt container--pb'>
			<Sidebar />
			<div className='video-topbar'>
				<div className='flex flex-jc-sb'>
					<div>
						<h1 className='title'>My Account</h1>
					</div>

					<Link to='/'>
						<button className='logoutBtn' onClick={() => {handleClick()}}>Logout</button>
					</Link>
				</div>
				<div className='line'></div>
				<div>
					<ul className='flex account--nav'>
						<li onClick={() => setActive('profile')}>Profile</li>
						<li onClick={() => setActive('plan')}>My Plan</li>
						<li onClick={() => setActive('billing')}>Billing</li>
					</ul>
				</div>
				
				{ active === 'profile' && <ProfileInfo />} 
				{ active === 'billing' && <ProfileBilling />}
				{ active === 'plan' && <Plans />}
			</div>
		</div>
	);
}

export default Account;
