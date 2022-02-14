import './App.css';
import DiagramComponentSample from './components/DiagramComponentSample';
//import { tryIoc } from './inversify/iocPoc';
import { tryIoc } from './tsyringe/iocPoc';

const App = () => {
  tryIoc();
  return <DiagramComponentSample />;
};

export default App;
