import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RateAverage = (props) => {

    const { rateAverage } = props
    
    return (
        <div className="row" style={{height: 1 + "em"}}>
            <div className="col">
                <div className="position-relative">
                    <div className="d-flex px-0 position-absolute top-0 start-0 opacity-25">
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                    </div>
                    <div className="d-flex px-0 position-absolute top-0 start-0 text-primary" style={{maxWidth: 0.99*parseFloat(rateAverage) + "em", overflow: "hidden"}}>
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                        <FontAwesomeIcon className="fa-sm px-0 mx-0" icon={faStar} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RateAverage