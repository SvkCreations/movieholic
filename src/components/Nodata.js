import React from 'react'
import loading from '../nodata.png'

export default function Nodata() {
    return (
        <div className='container'>
            <div className="row text-center">
                <h2 className="display-6 text-custom">Movie with that name not found!</h2>
                <p className='p-0 m-0'>Suggestions:</p>
                <ul className='list-unstyled'>
                    <li>Make sure that all words are spelled correctly</li>
                    <li>Try different keywords</li>
                    <li>Try more general keywords.</li>
                </ul>
            </div>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-auto">
                    <img src={loading} alt="" width="350px" />
                </div>
            </div>

        </div>
    )
}
