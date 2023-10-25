import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDeatail/movie';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
