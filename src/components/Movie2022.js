import React, { useState } from 'react'

export default function Movie2022() {
    const [state1, setState1] = useState([{ "Title": "Black Panther: Wakanda Forever", "Year": "2022", "Rated": "PG-13", "Released": "11 Nov 2022", "Runtime": "161 min", "Genre": "Action, Adventure, Drama", "Director": "Ryan Coogler", "Writer": "Ryan Coogler, Joe Robert Cole", "Actors": "Tenoch Huerta, Angela Bassett, Danai Gurira", "Plot": "The nation of Wakanda is pitted against intervening world powers as they mourn the loss of their king T'Challa.", "Language": "English", "Country": "United States", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg", "Ratings": [{ "Source": "Rotten Tomatoes", "Value": "84%" }], "Metascore": "N/A", "imdbRating": "N/A", "imdbVotes": "N/A", "imdbID": "tt9114286", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "N/A", "Website": "N/A", "Response": "True" }])
    const [state2, setState2] = useState([{ "Title": "RRR", "Year": "2022", "Rated": "Not Rated", "Released": "25 Mar 2022", "Runtime": "187 min", "Genre": "Action, Drama", "Director": "S.S. Rajamouli", "Writer": "Vijayendra Prasad, S.S. Rajamouli, Sai Madhav Burra", "Actors": "N.T. Rama Rao Jr., Ram Charan Teja, Ajay Devgn", "Plot": "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.", "Language": "Telugu, English", "Country": "India", "Awards": "3 wins & 4 nominations", "Poster": "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.0/10" }, { "Source": "Rotten Tomatoes", "Value": "93%" }, { "Source": "Metacritic", "Value": "83/100" }], "Metascore": "83", "imdbRating": "8.0", "imdbVotes": "114,084", "imdbID": "tt8178634", "Type": "movie", "DVD": "N/A", "BoxOffice": "$11,339,160", "Production": "N/A", "Website": "N/A", "Response": "True" }])
    const [state3, setState3] = useState([{ "Title": "Brahmastra Part One: Shiva", "Year": "2022", "Rated": "N/A", "Released": "09 Sep 2022", "Runtime": "167 min", "Genre": "Action, Adventure, Fantasy", "Director": "Ayan Mukerji", "Writer": "Hussain Dalal, Ayan Mukerji", "Actors": "Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan", "Plot": "This is the story of Shiva who sets out in search of love and self-discovery. During his journey, he has to face many evil forces that threaten our existence.", "Language": "Hindi, Tamil, Telugu, Kannada, Malayalam", "Country": "India", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BZjY2MmI1ZWItNmU0Yy00NTdkLWJiYmQtNzFlZWNlMzkxZTZjXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "5.6/10" }, { "Source": "Rotten Tomatoes", "Value": "53%" }, { "Source": "Metacritic", "Value": "57/100" }], "Metascore": "57", "imdbRating": "5.6", "imdbVotes": "95,929", "imdbID": "tt6277462", "Type": "movie", "DVD": "N/A", "BoxOffice": "$7,839,108", "Production": "N/A", "Website": "N/A", "Response": "True" }])
    return (
        <div>
            <div className="container mt-5">
                <h2 className="fw-bold text-custom">Movies in 2022</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
                    {state1.map((element) => {
                        return (
                            <div className="col" key={element.imdbID}>
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${element.Poster})` }}>

                                </div>
                            </div>
                        )
                    })}

                    {state2.map((element) => {
                        return (
                            <div className="col" key={element.imdbID}>
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${element.Poster}')` }}>
                                </div>
                            </div>
                        )
                    })}


                    {state3.map((element) => {
                        return (
                            <div className="col" key={element.imdbID}>
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${element.Poster}')` }}>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
