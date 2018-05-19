import { h } from 'preact';
import { Grid, Row, Col } from 'react-flexbox-grid';
import mitt from 'mitt';
import Face from './Face';
import * as faceList from '../assets/faces.json';

if (module.hot) {
	require('preact/debug');
}

const events = mitt();

const reset = () => events.emit('reset');

const App = () => (
	<div class="app">
		<Grid>
			<Row>
				{faceList.map(({ name, imagePath }) => (
					<Col xs={4} sm={2} md={1}>
						<Face name={name}
							imagePath={imagePath}
							events={events}
						/>
					</Col>
				))}
			</Row>
		</Grid>
		<div class="footer">
			<button class="ripple" onClick={reset}>
				Reset
			</button>
		</div>
	</div>
);

export default App;