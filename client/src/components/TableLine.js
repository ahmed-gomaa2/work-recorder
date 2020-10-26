import React from 'react';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import {connect} from 'react-redux'
import * as actions from '../actions'

const TableLine = (props) => {

    const handleChecked = () => {
        props.completeProduct(props.product).then(() => {
            props.fetchProducts()
        })
    }

    return (
        <tr className={`${props.product.status && 'tableLine__done'} ${props.classLine} `}>
            <td onClick={handleChecked} className={'home__done'}>
                {props.product.status ? (
                    <LibraryAddCheckIcon />
                ) : (
                    <CheckBoxOutlineBlankIcon/>
                    )}
            </td>
            <td>{props.product.customer}</td>
            <td>{props.product.contact}</td>
            <td>{props.product.device}</td>
            <td>{props.product.diagnose}</td>
            <td>{props.product.enterDate}</td>
            <td>{props.product.estimatedDate}</td>
            <td>{props.product.spareParts}</td>
            <td>{props.product.cost}</td>
        </tr>
    );
};



export default connect(null, actions) (TableLine);