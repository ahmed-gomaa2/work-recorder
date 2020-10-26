import React from 'react';
import './css/SparePart.css'
import SparePartLine from "./SparePartLine";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

const SparePart = (props) => {
    return (
        <div className={'sparePart'}>
            <div className="sparePart__name">
                <p>{props.sparePart}</p>
                <Link to={'/sparePart/add'} className="sparePart__addProduct">
                    ADD {props.sparePart}
                </Link>
            </div>
            {props.spareParts.map(sparePart => {
                if(sparePart.part === props.sparePart) {
                    return <SparePartLine part={props.sparePart} sparePart={sparePart}/>
                }
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        spareParts: state.spareParts
    }
}

export default connect(mapStateToProps, null) (SparePart);