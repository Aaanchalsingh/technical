import React from 'react';
import { Link } from 'react-router-dom';

function card() {
    return (
        <div className="col-sm-4 mb-8 mb-sm-3">
            <div className="card">
                <div className="card-body mb-sm-3">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi voluptate molestias cupiditate nemo doloribus nesciunt hic neque, facere commodi.</p>
                    <Link to="/" className="btn btn-primary mt-sm-3">Go Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default card
