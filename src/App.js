import './App.css';
import Row from "./Row";
import Banner from './Banner';
import Navbar from './Navbar';
import requests from './requests';
// import Home from "./Home";
// import HomeNavbar from './HomeNavbar';

function App() {
  return (
    <div className="App">
      {/* <HomeNavbar/>
      <Home/> */}
      <Navbar/>
      <Banner />
      <Row title="Netflix Originals" 
         fetchUrl={requests.fetchTrending}
         isLargeRow = {true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginal}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
