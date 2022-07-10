import { useContext } from 'react';
import AppContext from '../AppContext';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';

export default function Contact() {
	const value = useContext(AppContext);
	let { emailLabel, phoneLabel } = value.state.languages;

	return (
		<>
			<Navigation />
			<Container className="page">
				<h2>{value.state.languages.contactTitle}</h2>
				<div>
					<li>{`${emailLabel}: Lumii@example.com`}</li>
					<li>{`${phoneLabel}: +0123456789`}</li>
				</div>
			</Container>
		</>
	);
}
