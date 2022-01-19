import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { Layout, withLayout } from '../Layout/Layout';


function Home(): JSX.Element {
	
	const [rating, setRating] = useState<number>(4);
	
	return (
	<>
		<Htag tag='h1'> Hello </Htag>
		<Button appearance='primary'>button</Button>
		<Button appearance='ghost' arrow='right'>button</Button>
		<P size='s'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, eum! Eum enim laudantium fugit porro asperiores natus reiciendis tempore, laboriosam dolores itaque est alias error facere quam, sed vel vero.</P>
		<Tag size='s' color='green'>small</Tag>
		<Tag size='m' color='red'>red</Tag>
		<Tag  color='gray'>gray</Tag>
		<Rating rating={rating} isEditable={true} setRating={setRating}/>
	</>
	);
}

export default withLayout(Home);