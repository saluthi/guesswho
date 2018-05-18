import { h } from 'preact';
import { Layout, Row, Col } from 'antd';
import Face from './Face';
import * as faceList from '../assets/faces.json';

const { Content } = Layout;

if (module.hot) {
	require('preact/debug');
}

const App = () => (
	<div class="App">
		<Layout>
			<Content style={{ padding: '15px 5px', height: '100vh' }}>
				<Row>
					{faceList.map(({ name, imagePath }) => (
						<Col xs={6} sm={4} md={2}>
							<Face name={name} imagePath={imagePath} />
						</Col>
					))}
				</Row>
			</Content>
		</Layout>
	</div>
);

export default App;