import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App bg-sky-100 flex flex-col items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
