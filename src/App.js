
import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {

  let allArticles =[
    {
      date: "2020-12-11",
      title: "On the Street in Brooklyn",
      image: "/blog-image-1.jpg",
      content: "Cray Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto libero a id eum facilis repellendus aperiam dolorem recusandae vel accusantium veniam unde optio commodi incidunt, eaque molestias eos porro."
    },
    {
      date: "2020-11-11",
      title: "Vintage in Vogue",
      image: "/blog-image-2.jpg",
      content: "Selfies ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto libero a id eum facilis repellendus aperiam dolorem recusandae vel accusantium veniam unde optio commodi incidunt, eaque molestias eos porro."
    }
  ];

  return (

    <div className='mainContainer'>

    <div className='border'></div>
    <div className="App">
      <Header/>
      <Nav/>
      <Article articles={allArticles}/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;


