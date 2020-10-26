import React from 'react';
import './css/SparePartsForm.css'
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

const SparePartsForm = (props) => {
    const [part, setPart] = React.useState('Screen');
    const [device, setDevice] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [price, setPrice] = React.useState('')

    const handleSectionChange = e => {
        setPart(e.target.value)
    }

    const handleDeviceChange = e => {
        setDevice(e.target.value)
    }

    const handlePriceChange = e => {
        setPrice(e.target.value)
    }

    const handleAmountChange = e => {
        setAmount(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const sparePart = {
            device: device,
            part: part,
            amount: amount,
            price: price
        }

        props.createSparePart(sparePart)
    }
    return (
        <form onSubmit={handleFormSubmit} action="" className="spareParts__form">
            <div className="spareParts__formItem">
                <label htmlFor="">Part:</label>
                <select onChange={handleSectionChange} id='sections' value={part}>
                    {spareProducts.map(sparePart => (
                        <option>{sparePart}</option>
                    ))}
                </select>
            </div>
            <div className="spareParts__formItem">
                <label htmlFor="">Device:</label>
                <input value={device} onChange={handleDeviceChange} type="text"/>
            </div>
            <div className="spareParts__formItem">
                <label htmlFor="">Amount:</label>
                <input value={amount} onChange={handleAmountChange} type="text"/>
            </div>
            <div className="spareParts__formItem">
                <label htmlFor="">Price:</label>
                <input value={price} onChange={handlePriceChange} type="text"/>
            </div>

            <button type={"submit"}>ADD</button>
        </form>

    );
};

// const mapStateToProps = state => {
//     return {
//
//     }
// }

export default connect(null, actions) (SparePartsForm);