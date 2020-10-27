import React, {useEffect} from 'react';
import './css/Workers.css'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import * as actions from '../actions'

const Workers = (props) => {
    useEffect(() => {
        props.fetchingWorkers()
    }, [])
    return (
        <div className={'worker'}>
            <div className="worker__header">
                <h3>Workers: </h3>
                <Link to={'/worker/add'} >ADD WORKER</Link>
            </div>
            {props.workers.map((worker, index) => (

                <div className={`worker__line ${index % 2===0 ? 'worker__lineEven': 'worker__lineOdd'}`}>
                    <h4>{worker.name}</h4>
                    <p>{worker.salary} EGP</p>
                    <p>{worker.card}</p>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        workers: state.workers
    }
}

export default connect(mapStateToProps, actions) (Workers);