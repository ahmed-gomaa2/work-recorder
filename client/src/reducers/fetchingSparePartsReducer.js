export default function (state=[], action) {
    switch (action.type) {
        case 'FETCHING_SPAREPARTS':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}