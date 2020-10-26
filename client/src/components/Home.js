import React, {useEffect} from 'react';
import './css/Home.css'
import {connect} from 'react-redux'
import * as actions from '../actions'
import TableLine from "./TableLine";

const Home = (props) => {
    const [customer, setCustomer] = React.useState('')
    const [contact, setContact] = React.useState('')
    const [device, setDevice] = React.useState('')
    const [diagnose, setDiagnose] = React.useState('')
    const [estimated, setEstimated] = React.useState('')
    const [spareParts, setSpareParts] = React.useState('')
    const [cost, setCost] = React.useState('')
    const [adding, setAdding] = React.useState(false)
    const [status, setStatus] = React.useState(false)

    const handleAdding = () => {
        setAdding(!adding)
    }

    useEffect(() => {
        props.fetchProducts()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const info = {
            customer: customer,
            contact: contact,
            device: device,
            diagnose: diagnose,
            estimatedDate: estimated,
            spareParts: spareParts,
            cost: cost,
            status: status
        }
        props.createProduct(info).then(() => {
            props.fetchProducts()
        })

    }

    return (
        <div className={'home'}>
            {props.products[0] && (
                <table className="home__table">
                    <tr className={'home__tableHeader'}>
                        <th>Done</th>
                        <th>Customer</th>
                        <th>Contact</th>
                        <th>Device</th>
                        <th>Diagnose</th>
                        <th>Enter Date</th>
                        <th>Estimated Date</th>
                        <th>Spare Parts</th>
                        <th>Cost</th>
                    </tr>
                    {props.products.map((product, index) => {
                        if(index % 2 ===0) {
                            return <TableLine product={product} classLine={'home__evenItem'}/>
                        }else{
                            return <TableLine product={product} classLine={'home__oddItem'}/>
                        }
                    })}
                </table>
            )}

            {adding ? (
                <form onSubmit={handleSubmit} className="home__addLine">
                    <div className="home__addLineItem">
                        <label htmlFor="">Customer:</label>
                        <input value={customer} onChange={e => setCustomer(e.target.value)} type="text"/>
                    </div>
                    <div className="home__addLineItem">
                        <label htmlFor="">Contact:</label>
                        <input value={contact} onChange={e => setContact(e.target.value)} type="text"/>
                    </div>
                    <div className="home__addLineItem">
                        <label htmlFor="">Device:</label>
                        <input value={device} onChange={e => setDevice(e.target.value)} type="text"/>
                    </div>
                    <div className="home__addLineItem">
                        <label htmlFor="">Diagnose:</label>
                        <input value={diagnose} onChange={e => setDiagnose(e.target.value)} type="text"/>
                    </div>
                    <div className="home__addLineItem">
                        <label htmlFor="">Estimated Date:</label>
                        <input value={estimated} onChange={e => setEstimated(e.target.value)} type="text"/>
                    </div>
                    <div className="home__addLineItem">
                        <label htmlFor="">Spare Parts:</label>
                        <input value={spareParts} onChange={e => setSpareParts(e.target.value)} type="text"/>
                    </div>
                    <div className="home__addLineItem">
                        <label htmlFor="">Cost:</label>
                        <input value={cost} onChange={e => setCost(e.target.value)} type="text"/>
                    </div>
                    <div className="home__formButtons">
                        <button type={"submit"}>ADD</button>
                        <button className={'home__formCancel'} onClick={handleAdding}>Cancel</button>
                    </div>
                </form>
            ): (
                <div onClick={handleAdding} className={'home__add'}>ADD PRODUCT</div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, actions) (Home);