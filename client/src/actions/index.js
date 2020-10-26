import axios from 'axios'

export const createProduct = info => async dispatch => {
    const res = await axios.post('/api/new/product', info)

    dispatch({
        type: 'CREATE_NEW_PRODUCT',
        payload: res.data
    })
}

export const fetchProducts = () => async dispatch => {
    const res = await axios.get('/api/products');

    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: res.data
    })
}

export const completeProduct = product => async dispatch => {
    const res = await axios.post('/api/complete/product', product)

    dispatch({
        type:'COMPLETING_PRODUCT',
        payload: res.data
    })
}

export const createSparePart = sparePart => async dispatch => {
    const res = await axios.post('/api/sparePart/add', sparePart);

    dispatch({
        type: 'CREATE_NEW_SPAREPART',
        payload: res.data
    })
}

export const fetchingSpareParts = () => async dispatch => {
    const res = await axios.get('/api/spareParts/get')

    dispatch({
        type: 'FETCHING_SPAREPARTS',
        payload: res.data
    })
}

export const takeSparePart = (info) => async dispatch => {
    const res = await axios.post('/api/sparePart/take', info)

    dispatch({
        type: 'TAKE_FROM_SPAREPART',
        payload: res.data
    })
}

export const giveSparePart = (info) => async dispatch => {
    const res = await axios.post('/api/sparePart/give', info)

    dispatch({
        type: 'GIVE_TO_SPAREPART',
        payload: res.data
    })
}