import React, {useEffect} from 'react';
import './css/SpareParts.css'
import SparePart from "./SparePart";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import * as actions from '../actions'

const spareProducts = [
    'Screen',
    'Charging Sockets',
    'Flata',
    'Mother Board',
    'Card Home',
    'Buttons',
    'Camera',
    'SMS Home',
    'Battery',
    'flash'
]

const SpareParts = (props) => {

    useEffect(() => {
        props.fetchingSpareParts()
    })

    return (
        <div className={'spareParts'}>
            {spareProducts.map(sparePart => (
                <SparePart sparePart={sparePart} />
            ))}
        </div>
    );
};


export default connect(null, actions) (SpareParts);