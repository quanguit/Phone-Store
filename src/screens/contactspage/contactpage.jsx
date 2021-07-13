import React from 'react';
import './contactpage.scss';
import { AiFillApple } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { GoMarkGithub } from 'react-icons/go';
import Avatar from 'react-avatar';

const ContactPage = () => (
	<>
		<div className="container">
			<h1>Contact us!</h1>
			<p className="intro">
				"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
				voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
				quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
				eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem.
			</p>
			<div className="image"></div>
		</div>
		<div className="row">
			<div className="col1">
				<div className="icon">
					<AiFillApple size={100} />
				</div>
				<h1>Creativity</h1>
				It's the ability to think outside the box. We make decisions, create
				something new and generate a lot of ideas.
			</div>
			<div className="col2">
				<div className="icon">
					<BiWorld size={100} />
				</div>
				<h1>Worldwide</h1>
				All sites you make with Mobirise are mobile-friendly. You don't have to
				create a special mobile version of your site.
			</div>
			<div className="col3">
				<div className="icon">
					<GoMarkGithub size={100} />
				</div>
				<h1>Unique Styles</h1>
				Mobirise offers many site blocks in several themes, and though these
				blocks are pre-made, they are flexible.
			</div>
		</div>

		<div className="container" style={{ marginBottom: 80 }}>
			<Avatar
				size="150"
				src="https://i.pinimg.com/236x/bd/83/39/bd8339c1ec9c529556403f68208f0525.jpg"
				style={{ marginBottom: 15 }}
				round={true}
			/>
			<div className="profile">
				All issues are resolved promptly. In communication, the employees are
				pleasant, helpful. Always offer new ideas, new ways to develop, improve
				our project.
			</div>
			<h2 style={{ marginBottom: -10 }}>Quang Nhat</h2>
			<h3>WEB DEVELOPER</h3>
		</div>
	</>
);

export default ContactPage;
