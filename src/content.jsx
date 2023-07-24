import React from 'react'

function content(props) {
    return (
        <div style={{height:'100vh'}} id='box1'>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">Welcome To The <span classNameName='text-primary'>{props.title}</span> </h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-outline-primary btn-lg px-4 me-md-2 fw-bold">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="bg-black rouned" src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" alt="" width="400" height="300"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default content;
