import React from 'react';
import { Button, Htag, P } from '../components';


export default function Home(): JSX.Element {
  return (
    <>
		<Htag tag='h1'> Hello </Htag>
		<Button appearance='primary'>button</Button>
		<Button appearance='ghost' arrow='right'>button</Button>
		<P size='s'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, eum! Eum enim laudantium fugit porro asperiores natus reiciendis tempore, laboriosam dolores itaque est alias error facere quam, sed vel vero.</P>
		
	</>
  );
}
