import './App.css';
import { Balloon } from './components/Balloon';

function App() {
	return (
		<>
			<Balloon name='box-ballon-5' color='orange' activeness='active' />
			<Balloon name='box-ballon-5' color='red' activeness='active' />
			<Balloon name='box-ballon-5' color='green' activeness='active' />
			<Balloon name='box-ballon-5' color='yellow' activeness='active' />
			<Balloon name='box-ballon-5' color='blue' activeness='active' />
		</>
	);
}

export default App;
