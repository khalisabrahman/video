import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { VideoContext } from '../context/VideoState';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../components/firebase-config';

export default function Login() {
	const { loggedIn, setLoginState } = useContext(VideoContext);
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const history = useHistory();



	const login = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			setLoginState();
			history.push('/video')
			
		} catch (error) {
			alert(error.message);
		}
	};

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='flex container--pt container--pb'>
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
			<Sidebar />
			<h1 className='title'>Sign In</h1>
			<div className='signInContainer'>
				<form>
					<label className='formLabel' htmlFor='email'>
						Email Address
					</label>
					<input
						type='email'
						className='formInput formInput--blueBorder'
						name='email'
						placeholder='Enter your email'
						required
						onChange={(event) => {
							setLoginEmail(event.target.value);
						}}
					/>
					<div className='flex flex-jc-sb'>
						<label className='formLabel' htmlFor='password'>
							Password
						</label>
						<a href='/' className='forgot'>
							Forgot?
						</a>
					</div>
					<input
						type='password'
						className='formInput'
						name='password'
						placeholder='Enter your password'
						required
						onChange={(event) => {
							setLoginPassword(event.target.value);
						}}
					/>

					<button className='loginBtn' onClick={login}>
						Login
					</button>

					<div className='formSignUp'>
						<span className='newHere'>New Here?</span>{' '}
						<Link className='newHereLink' to='/signup'>
							Signup
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
