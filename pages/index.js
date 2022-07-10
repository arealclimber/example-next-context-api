import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
