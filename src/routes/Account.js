import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {Plans} from '../components/Plans';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Profilepic from '../images/profilepic.png';
import Pencil from '../images/pencil.png';
import { ProfileInfo } from '../components/ProfileInfo';
import { ProfileBilling } from '../components/ProfileBilling';

function Account() {
	return (
		<div className='flex container--pt container--pb'>
			<Sidebar />
			<div className='video-topbar'>
				<div className='flex flex-jc-sb'>
					<div>
						<h1 className='title'>My Account</h1>
					</div>

					<Link to='/'>
						<button className='logoutBtn'>Logout</button>
					</Link>
				</div>
				<div className='line'></div>
				<div>
					<ul className='flex account--nav'>
						<li>Profile</li>
						<li>My Plan</li>
						<li>Billing</li>
					</ul>
				</div>
				{/* <ProfileInfo /> */}
				{/* <ProfileBilling /> */}
                <Plans />
			</div>
		</div>
	);
}

export default Account;
