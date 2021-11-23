import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Login() {
	const history = useHistory();

	function handleSubmit() {
		history.push("/video");
	}
	return (
		<div className='flex container--pt container--pb'>
            <Sidebar />
			<h1 className='title'>Sign In</h1>
			<div className='signInContainer'>
				<form onSubmit={handleSubmit}>
					<label className='formLabel' htmlFor='email'>
						Email Address
					</label>
					<input
						type='email'
						className='formInput formInput--blueBorder'
						name='email'
						placeholder='Enter your email'
						required
					/>
					<div className='flex flex-jc-sb'>
						<label className='formLabel' htmlFor='password'>
							Password
						</label>
						<a href='#' className='forgot'>
							Forgot?
						</a>
					</div>
					<input
						type='password'
						className='formInput'
						name='password'
						placeholder='Enter your password'
					/>
					<button className='loginBtn'>Login</button>
					<div className='formSignUp'>
						<span className='newHere'>New Here?</span>{' '}
                        <Link className='newHereLink' to='/signup'>Signup</Link>
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
