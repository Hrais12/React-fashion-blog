
import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (

    <div className='mainContainer'>

    <div className='border'></div>
    <div className="App">
      <Header/>
      <Nav/>
      <Article/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;


