import React, { useContext } from 'react';
import { SidebarData } from './SidebarData';
import { VideoContext } from '../context/VideoState';
import { Link } from 'react-router-dom';
import AccountPic from '../images/accountPic.png';

function Sidebar() {
	const { loggedIn } = useContext(VideoContext);
	return (
		<div className='sidebar flex flex-fd-cl'>
			<div className='sidebar__icons'>
				<svg
					id='app-logo'
					width='35'
					height='34'
					viewBox='0 0 35 34'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<ellipse
						cx='11.5965'
						cy='16.5'
						rx='10.5'
						ry='7.5'
						transform='rotate(9.52728 11.5965 16.5)'
						fill='#E7AB11'
					/>
					<ellipse
						cx='22.6931'
						cy='24.1345'
						rx='10.5'
						ry='7.5'
						transform='rotate(9.52728 22.6931 24.1345)'
						fill='#12B1B1'
					/>
					<circle cx='23.0964' cy='11' r='11' fill='#EE6363' />
				</svg>
				{loggedIn &&
					SidebarData.map((icon) => {
						return (
							<Link to={`/${icon.link}`}>
								<div className='sidebar__icon'>{icon.icon}</div>
							</Link>
						);
					})}
				{loggedIn && <img src={AccountPic} alt="" />}
			</div>
		</div>
	);
}

export default Sidebar;
