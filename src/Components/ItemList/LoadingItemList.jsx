import React from 'react'


const LoadingItemList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center opacity-50 ItemListLoader">
            <div className="col col-md-6 col-lg-3 p-2">
                <div className="w-100 border bg-light rounded py-3 justify-content-center">
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '3em'}}>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '0.5em'}}>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '0.5em'}}>-</h5>
                    </div>
                    <div className="row">
                        <div className="col-3 text-end"><button className="btn btn-secondary btn-sm">-</button></div>
                        <div className="col bg-secondary opacity-25">-</div>
                        <div className="col-3 text-start"><button className="btn btn-secondary btn-sm">+</button></div>
                    </div>
                </div>
            </div>
            <div className="col col-md-6 col-lg-3 p-2">
                <div className="w-100 border bg-light rounded py-3 justify-content-center">
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '3em'}}>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '0.5em'}}>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '0.5em'}}>-</h5>
                    </div>
                    <div className="row">
                        <div className="col-3 text-end"><button className="btn btn-secondary btn-sm">-</button></div>
                        <div className="col bg-secondary opacity-25">-</div>
                        <div className="col-3 text-start"><button className="btn btn-secondary btn-sm">+</button></div>
                    </div>
                </div>
            </div>
            <div className="col col-md-6 col-lg-3 p-2">
                <div className="w-100 border bg-light rounded py-3 justify-content-center">
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '3em'}}>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '0.5em'}}>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '0.5em'}}>-</h5>
                    </div>
                    <div className="row">
                        <div className="col-3 text-end"><button className="btn btn-secondary btn-sm">-</button></div>
                        <div className="col bg-secondary opacity-25">-</div>
                        <div className="col-3 text-start"><button className="btn btn-secondary btn-sm">+</button></div>
                    </div>
                </div>
            </div>
            <div className="col col-md-6 col-lg-3 p-2">
                <div className="w-100 border bg-light rounded py-3 justify-content-center">
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '3em'}}>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '0.5em'}}>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5 style={{height: '0.5em'}}>-</h5>
                    </div>
                    <div className="row">
                        <div className="col-3 text-end"><button className="btn btn-secondary btn-sm">-</button></div>
                        <div className="col bg-secondary opacity-25">-</div>
                        <div className="col-3 text-start"><button className="btn btn-secondary btn-sm">+</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingItemList
