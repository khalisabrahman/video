import React from 'react';
import Tick from '../images/tick.png';
import Cross from '../images/x.png';

export const Plans = () => {
	return (
		<div class='flex plans'>
			<div className='plan'>
				<h2 className='plan__title'>Free</h2>
				<ul>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Pellentesque interdum libero et
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Pellentesque posuere jdfkdfkdfhd
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Cras sed felis eget
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Maecenas eget luctus
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Nullam vitae augue
					</li>
				</ul>
				<div className='plan__price__container'>
					<h3 className='plan__price'>$</h3>
					<span className='plan__price2'>0</span>
				</div>

				<button>Downgrade</button>
			</div>
			<div className='plan'>
				<h2 className='plan__title'>Pro</h2>
				<ul>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Maecenas eget luctus purus
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Graesent in sollicitudin velit
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Donec in orci vitae nisi
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Class aptent taciti
					</li>
					<li>
						<span>
							<img src={Cross} alt='' />
						</span>
						Ut blandit vestibulum
					</li>
				</ul>
				<div className='plan__price__container'>
					<h3 className='plan__price'>$</h3>
					<span className='plan__price2'>12</span>
				</div>
				<button>Downgrade</button>
			</div>
			<div className='plan current'>
				<h2 className='plan__title'>Team</h2>
				<ul >
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Etiam ac finibus nisi, a porttitor
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Quisque tincidunt velit a sapien vulputate
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Vivamus pulvinar
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						In hac habitasse platea
					</li>
					<li>
						<span>
							<img src={Cross} alt='' />
						</span>
						Nullam vitae augue
					</li>
				</ul>
				<div className='plan__price__container'>
					<h3 className='plan__price'>$</h3>
					<span className='plan__price2'>23</span>
				</div>
				<button>Current Plan</button>
			</div>
			<div className='plan'>
				<h2 className='plan__title'>Agency</h2>
				<ul>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Praesent in sollicitudin velit
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Nulla tincidunt finibus interdum
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Nullam vitae augue
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Curabitur eleifend
					</li>
					<li>
						<span>
							<img src={Tick} alt='' />
						</span>
						Quisque vel ex enim
					</li>
				</ul>
				<div className='plan__price__container'>
					<h3 className='plan__price'>$</h3>
					<span className='plan__price2'>43</span>
				</div>
				<button>Upgrade</button>
			</div>
		</div>
	);
};
