import React from 'react';
import { storiesOf, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import { CircularProgress } from '../src';

setAddon(infoAddon);

storiesOf('CircularProgress', module)
	.addWithInfo('default', () => (
		<div>
			<h1>CircularProgress</h1>
			<h2>Definition</h2>
			<p>Show a spinning progress indicator</p>
			<h2>Examples</h2>
			<p>By default :</p>
			<CircularProgress />
			<h3>Small</h3>
			<CircularProgress size="small" />
			<h3>Normal</h3>
			<CircularProgress size="default" />
			<h3>large</h3>
			<CircularProgress size="large" />
			<h3>on color</h3>
			<div style={{ background: '#2f5157' }}>
				<CircularProgress light size="large" />
			</div>
		</div>
	));
