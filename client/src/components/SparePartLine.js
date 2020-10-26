import React from 'react';
import './css/SparePartLine.css'
import * as actions from '../actions'
import {connect} from 'react-redux'

const SparePartLine = (props) => {
    const [dec, setDec] = React.useState(0)
    const [inc, setInc] = React.useState(0)

    const handleTakeClick = () => {
        const info = {
            id: props.sparePart._id,
            take: parseInt(dec)
        }

        props.takeSparePart(info).then(() => {
            props.fetchingSpareParts()
        })
        setDec(0)
    }

    const handleGiveClick = () => {
        const info = {
            id: props.sparePart._id,
            give: parseInt(inc)
        }

        props.giveSparePart(info).then(() => {
            props.fetchingSpareParts()
        })
        setInc(0)
    }
    return (
        <div className={'sparePartLine'}>
            <h3>{props.sparePart.device}</h3>
            <p>{props.sparePart.price} EGP</p>
            <p>{props.sparePart.amount} Units</p>
            <div className={'sparePartLine__dec'}>
                <input min={0} type={'number'} value={dec} onChange={e => setDec(e.target.value)}/>
                <div onClick={handleTakeClick} className={'sparePart__take'}>Take</div>
            </div>
            <div className={'sparePartLine__inc'}>
                <input min={0} value={inc} onChange={e => setInc(e.target.value)} type="number"/>
                <div onClick={handleGiveClick} className={'sparePart__add'}>Add</div>
            </div>
        </div>
    );
};


export default connect(null, actions) (SparePartLine);