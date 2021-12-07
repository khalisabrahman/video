import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase-config';
import { VideoContext } from '../context/VideoState';

export default function SignUp() {
	const [registerName, setRegisterName] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const { setLoginState } = useContext(VideoContext);
	const history = useHistory();

	const register = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			setLoginState();
			history.push('/video');
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<div className='flex container--pt container--pb'>
			<Sidebar />
			<h1 className='title'>Create an account</h1>
			<div className='signInContainer'>
				<form>
					<div className='flex flex-jc-sb'>
						<label className='formLabel' htmlFor='username'>
							Full name
						</label>
					</div>
					<input
						type='text'
						className='formInput formInput'
						name='username'
						placeholder='Enter your full name'
						onChange={(event) => {
							setRegisterName(event.target.value);
						}}
					/>
					<div className='flex flex-jc-sb'>
						<label className='formLabel' htmlFor='email'>
							Email address
						</label>
					</div>

					<input
						type='text'
						className='formInput formInput'
						name='email'
						placeholder='Enter your email'
						onChange={(event) => {
							setRegisterEmail(event.target.value);
						}}
					/>
					<div className='flex flex-jc-sb'>
						<label className='formLabel' htmlFor='password'>
							New Password
						</label>
						{registerPassword.length > 6 ? (
							<span className='strong'>Strong</span>
						) : (
							<span></span>
						)}
					</div>
					<input
						type='password'
						className='formInput'
						name='password'
						placeholder='Enter your password'
						onChange={(event) => {
							setRegisterPassword(event.target.value);
						}}
					/>
					<button className='loginBtn' onClick={register}>
						Signup
					</button>
					<div className='formSignUp'>
						<span className='newHere'>Already user?</span>{' '}
						<Link className='newHereLink' to='/'>
							Login
						</Link>
					</div>
				</form>
			</div>
			<svg
				width='534'
				height='509'
				viewBox='0 0 534 509'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='shapeDesign'
			>
				<g opacity='0.1'>
					<ellipse
						cx='203.352'
						cy='214.336'
						rx='184.124'
						ry='131.517'
						transform='rotate(9.52728 203.352 214.336)'
						fill='#E7AB11'
					/>
					<ellipse
						cx='397.939'
						cy='348.212'
						rx='184.124'
						ry='131.517'
						transform='rotate(9.52728 397.939 348.212)'
						fill='#12B1B1'
					/>
					<circle cx='405.011' cy='117.891' r='192.891' fill='#EE6363' />
				</g>
			</svg>
		</div>
	);
}
