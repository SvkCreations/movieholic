import React from 'react'
import { useState, useEffect } from 'react';
import imdb from '../imdb.png'
import tomatoes from '../rotten-tomatoes.png'
import Loading from './Loading';
import Nodata from './Nodata';

export default function SearchResults(props) {
    const [state, setState] = useState({
        results: [],
        loading: true,
        success: true
    })
    const [search, setsearch] = useState({
        results: [],
        loading: true,
        success: true
    })
    const url = `https://www.omdbapi.com/?apikey=9ca4c84e&t=${props.query}`
    const searchUrl = `https://www.omdbapi.com/?apikey=9ca4c84e&s=${props.query}&page=1`
    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(url);
            const json = await response.json();
            if (json.Response === "True") {
                setState({
                    results: [json],
                    loading: false,
                    success: true
                })
            }
            else {
                setState({
                    results: [],
                    loading: false,
                    success: false
                })
            }

        };

        fetchData();
    }, [])
    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(searchUrl);
            const json = await response.json();
            if (json.Response === "True") {
                setsearch({
                    results: json.Search,
                    loading: false,
                    success: true
                })
            }
            else {
                setsearch({
                    results: [],
                    loading: false,
                    success: false
                })
            }

        };

        fetchData();
    }, [])
    return (
        <div className='container my-3 my-md-5 pb-4 pb-md-5 border-bottom'>
            {state.success &&
                <div>
                    <h5 className="text-custom px-3 px-md-0 pb-1">Search Results for "{props.query}"</h5>
                    {state.loading &&
                        <div>
                            
                            <Loading />
                        </div>
                    }
                    {state.results.map((element) => {
                        return (
                            <div key={element.imdbID} className="row featurette d-flex align-items-center border-bottom justify-content-center p-3 pb-md-5 gap-4 gap-md-0">
                                <div className="col-md-7 order-2">
                                    <div className="row d-flex align-items-center justify-content-center">
                                        <div className="col-md-6">
                                            <h2 className="featurette-heading fw-bold lh-1 text-custom">{element.Title}</h2>
                                            <p className="text-muted">{element.Genre}</p>
                                            {/* <p className="fw-bold">{element.Rated}</p>                                  */}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-auto d-flex align-items-center justify-content-center">
                                                    <img src={tomatoes} alt="" className='p-0 m-0' width="40px" />
                                                    <p className='mx-3 mt-3'>{element.Ratings[1] ? element.Ratings[1].Value : "Ratings: NA"}</p>
                                                </div>
                                                <div className="col-auto d-flex align-items-center justify-content-center">
                                                    <img src={imdb} alt="" className='p-0 m-0' />
                                                    <p className='mx-3 mt-3'>{element.imdbRating}/10</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Cast: {element.Actors}</p>
                                    <p className='p-0 m-0'>{element.Plot}</p>
                                    <p>A {element.Type} by <span className='text-custom'>{element.Director}</span></p>
                                    <p className='p-0 m-0'>Runtime: <b>{element.Runtime}</b></p>
                                    <p className='p-0 mb-2'>Total Box-office Collection: {element.BoxOffice}</p>
                                    <i className="text-muted my-5">Released on {element.Released}</i>

                                </div>
                                <div className="col-md-5">
                                    <img className='bd-placeholder-img bd-placeholder-img-lg featurette-image mx-auto rounded' src={element.Poster} alt="" height="auto" style={{ border: "2px solid white" }} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {!state.success &&
                <Nodata />
            }

            <div className="container mt-5">
                <h2 className="text-custom fw-bold">All results</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
                    {search.loading && <Loading/>}
                    {search.results.map((element) => {
                        return (
                            <div className="col" key={element.imdbID}>
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${element.Poster})` }}>
                                </div>
                            </div>
                        )
                    })}
                    </div>
            </div>

        </div>
    )
}
