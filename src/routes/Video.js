import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Image from '../images/Rectangle 1.png'

function Video() {
	const [title, setTitle] = useState('Saying Hi to my customers');
	const [titleModal, setTitleModal] = useState('false');
    const [videoscript, setVideoscript] = useState('Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages')

	function titleChange(event) {
		setTitle(event.target.value);
	}

	function toggleModal() {
		setTitleModal(!titleModal);
	}

    function changeVideoscript(event) {
        setVideoscript(event.target.value);
    }

	return (
		<div className='flex container--pt container--pb'>
			<Sidebar />
			<div className='video-topbar'>
				<div className='flex flex-jc-sb'>
					<div>
						<h1 className='title'>{title}</h1>
						<svg
							id='vector'
							width='10'
							height='6'
							viewBox='0 0 10 6'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							onClick={toggleModal}
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M5.43413 5.62725L9.82036 1.25599C10.0599 1.0015 10.0599 0.612277 9.82036 0.372756C9.58084 0.133235 9.17665 0.133235 8.93713 0.372756L5 4.30988L1.06287 0.372756C0.808383 0.133235 0.419162 0.133235 0.179641 0.372756C-0.0598802 0.612277 -0.0598802 1.0015 0.179641 1.25599L4.5509 5.62725C4.80539 5.86677 5.19461 5.86677 5.43413 5.62725Z'
								fill='black'
							/>
						</svg>
					</div>

					<div>
						<button className='videoCancelBtn'>Cancel</button>
						<button className='videoSaveBtn'>Save</button>
					</div>
				</div>
                <div className="line"></div>

                <div className="flex">
                    <div className='leftContainer'>
                        <img src={Image} alt="" />
                        <textarea value={videoscript} className='videoscript' onChange={changeVideoscript} />
                        <button className='listenBtn'>Listen</button>
                    </div>
                    <div className='rightContainer'>

                    </div>
                </div>

				{titleModal && (
					<div className='titleModal'>
						<input
							className='video-title'
							type='text'
							value={title}
							onChange={titleChange}
						/>
						<p className='desc-modal'>
							Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus
							bibendum rutrum euismod. Sed non sagittis est, semper
						</p>
						<div className='tags'>
							<span>Email</span> <span>Marketing</span> <span>Greeting</span>
							<span>Email</span> <span>Marketing</span> <span>Greeting</span>
						</div>
						<button className='saveBtn' onClick={toggleModal}>
							Save
						</button>
					</div>
				)}
                
			</div>

		</div>
	);
}

export default Video;
