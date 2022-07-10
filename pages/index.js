import { useContext } from 'react';
import AppContext from '../AppContext';

import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';

export default function Home() {
	const value = useContext(AppContext);
	let { homeTitle, homeContent } = value.state.languages;
	return (
		<>
			<Navigation />
			<Container className="page">
				<h2>{homeTitle}</h2>
				<p>{homeContent}</p>
			</Container>
		</>
	);
}
