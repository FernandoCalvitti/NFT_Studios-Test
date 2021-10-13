import React from 'react'

const Spinner = () => {
    return (
        <div className="container position-relative top-100 start-50 translate-middle">
            <div className="spinner-grow p-4 text-primary"></div>
            <div className="spinner-grow p-4 text-success"></div>
            <div className="spinner-grow p-4 text-danger"></div>
            <div className="spinner-grow p-4 text-primary"></div>
            <div className="spinner-grow p-4 text-success"></div>
            <div className="spinner-grow p-4 text-danger"></div>
        </div>
    )
}

export default Spinner