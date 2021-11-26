import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Saved from '../images/saved.png';
import Dots from '../images/dots.png';

function Play() {
	return (
		<div className='flex container--pt container--pb'>
			<Sidebar />
			<div className='video-topbar'>
				<div className='flex flex-jc-sb'>
					<div>
						<h1 className='title'>Saved Videos</h1>
					</div>

					<Link to='./video'>
						<button className='videoSaveBtn'>Create New</button>
					</Link>
				</div>
				<div className='line'></div>

				<div className='flex'>
					<div className='saved__videos__container'>
						<div className='saved__video'>
							<img className='saved__video__img' src={Saved} alt='saved video' />
							<div className='saved__video__dots'>
								<img src={Dots} alt='edit video' />
							</div>
							<h3>Saying Hi to users!</h3>
							<div className='saved__video__btns'>
								<button>Email</button>
								<button>Marketing</button>
								<button>Greeting</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Play;
