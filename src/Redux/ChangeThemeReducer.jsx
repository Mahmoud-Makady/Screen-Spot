const INITIAL_VALUE = {
    theme: "dark"
}


export default function changeThemeReducer(state = INITIAL_VALUE, action) {
    switch(action.type){
        case 'CHANGE_THEME':
            return{
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
}