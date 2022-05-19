import Inputs from './components/Inputs';
import './App.css';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='form-wrapper'>
        <Inputs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
