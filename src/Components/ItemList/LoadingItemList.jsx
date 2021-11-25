import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const LoadingItemList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center ItemListLoader">
            <div className="col col-md-6 col-lg-3 p-2">
                <div className="w-100 border bg-light rounded py-3 justify-content-center">
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <ItemCount stock="0" />
                </div>
            </div>
            <div className="col col-md-6 col-lg-3 p-2">
                <div className="w-100 border bg-light rounded py-3 justify-content-center">
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <ItemCount stock="0" />
                </div>
            </div>
            <div className="col col-md-6 col-lg-3 p-2">
                <div className="w-100 border bg-light rounded py-3 justify-content-center">
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <ItemCount stock="0" />
                </div>
            </div>
            <div className="col col-md-6 col-lg-3 p-2">
                <div className="w-100 border bg-light rounded py-3 justify-content-center">
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <div className="col mx-3 opacity-25 rounded bg-secondary">
                        <h5>-</h5>
                    </div>
                    <ItemCount stock="0" />
                </div>
            </div>
        </div>
    )
}

export default LoadingItemList
