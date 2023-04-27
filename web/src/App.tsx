import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App bg-sky-100 h-screen gap-3 flex flex-col items-center">
      <Header />
      <Main />
    </div>
  );
}

export default App;
