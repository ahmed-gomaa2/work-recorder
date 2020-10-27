import React from 'react';
import './css/WorkerForm.css'
import {connect} from 'react-redux'
import * as actions from '../actions'

const WorkerForm = (props) => {
    const [name, setName] = React.useState('');
    const [salary, setSalary] = React.useState('');
    const [card, setCard] = React.useState('');

    const handleFormSubmit = e => {
        e.preventDefault();
        const info = {
            name: name,
            salary: salary,
            card: card
        }
        props.createWorker(info)
    }

    return (
        <form onSubmit={handleFormSubmit} className={'workerForm'}>
            <div className="workerForm__line">
                <label htmlFor="">Name:</label>
                <input value={name} onChange={e => setName(e.target.value)} type="text"/>
            </div>
            <div className="workerForm__line">
                <label htmlFor="">Salary:</label>
                <input value={salary} onChange={e => setSalary(e.target.value)} type="text"/>
            </div>
            <div className="workerForm__line">
                <label htmlFor="">Card:</label>
                <input value={card} onChange={e => setCard(e.target.value)} type="text"/>
            </div>
            <button type={'submit'}>ADD</button>
        </form>
    );
};



export default connect(null, actions) (WorkerForm);