export default function (state = [], action) {
    switch (action.type) {
        case 'FETCHING_WORKERS':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}