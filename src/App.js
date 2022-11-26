import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Movie2022 from './components/Movie2022';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';



function App() {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  let handleChange = (e) => {
    setValue(e.target.value)
  }
  let handleClick = () => {
    setQuery(value)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main */}
          <Route path='/' element={
            <div className="px-4 py-3 my-5 text-center">
              <h1 className="display-5 fw-bold">Welcome to Movieholic</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Here you get accurate information about all your favourite movies. From Ratings to Cast, from Movie plot to Oscar nominations, you can learn everything. Not just of movies, you can now gather information about your favourite TV series and specials too. So what are you waiting for? <br></br>Get Started Now!</p>
                  <div className="d-flex">
                    <input className="form-control me-2" value={value} onChange={handleChange} placeholder="Enter movie, series name..." aria-label="Search"/>
                    <Link className="btn btn-outline-custom-primary" onClick={handleClick} to="/search">Search</Link>
                </div>
              </div>
            </div>
          }></Route>
          <Route path='/movieholic' element={
            <div className="px-4 py-3 my-5 text-center">
              <h1 className="display-5 fw-bold">Welcome to Movieholic</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Here you get accurate information about all your favourite movies. From Ratings to Cast, from Movie plot to Oscar nominations, you can learn everything. Not just of movies, you can now gather information about your favourite TV series and specials too. So what are you waiting for? <br></br>Get Started Now!</p>
                <div className="d-flex">
                  <input className="form-control me-2" value={value} onChange={handleChange} placeholder="Enter movie, series name..." aria-label="Search" />
                  <Link className="btn btn-outline-custom-primary" onClick={handleClick} to="/search">Search</Link>
                </div>
              </div>
            </div>
          }></Route>
          <Route path='/search' element={<SearchResults query={query} />}></Route>
        </Routes>
        <Movie2022 />
      </div>
    </Router>
  );
}

export default App;
