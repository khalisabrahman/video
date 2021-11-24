import React from 'react';
import Profilepic from '../images/profilepic.png';
import Pencil from '../images/pencil.png';

export const ProfileInfo = () => {
	return (
		<div>
			<div className='profileContainer'>
				<img src={Profilepic} className='profilepic' alt='' />
				<img src={Pencil} alt='' />
			</div>
			<div className='formContainer flex'>
				<div className='formContainer__child'>
					<label className='formLabel' htmlFor='firstname'>
						First Name
					</label>
					<input
						type='text'
						className='formInput'
						name='firstname'
						placeholder='Enter your first name'
					/>
				</div>
				<div className='formContainer__child'>
					<label className='formLabel' htmlFor='lastname'>
						Last Name
					</label>
					<input
						type='text'
						className='formInput'
						name='lastname'
						placeholder='Enter your last name'
					/>
				</div>
				<div className='formContainer__child'>
					<label className='formLabel' htmlFor='email'>
						Email
					</label>
					<input
						type='email'
						className='formInput'
						name='email'
						placeholder='Enter your email'
					/>
				</div>
			</div>
			<button className='videoSaveBtn save'>Save Changes</button>
		</div>
	);
};
