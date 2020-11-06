import mitt from 'mitt';
import Face from './Face';
import faceList from './faces';

const events = mitt();

const reset = () => events.emit('reset');

const App = () => (
	<div className="app">
		<div className="m-auto grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
			{faceList.map(({ name, imagePath }, index) => (
				<Face key={index} name={name}
					imagePath={imagePath}
					events={events}
				/>
			))}
		</div>
		<div className="footer">
			<button className="ripple" onClick={reset}>
				Reset
			</button>
		</div>
	</div>
);

export default App;