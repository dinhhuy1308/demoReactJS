const burgerState = {
    burger: {salad:1, cheese: 1, beef: 1},
    menu: {
        salad: 10,
        cheese: 20,
        beef: 30,
    },
    total: 60
}

export const BurgerReducer = (state = burgerState, action ) => {
    switch (action.type) {
        case 'ADD_BREADMID': {
            let {propsBurger,amount} = action
            if (amount === -1 && state.burger[propsBurger] < 1) {
                return {...state}
            }

            let burgerUpdate = {...state.burger};
            burgerUpdate[propsBurger] += amount
            state.burger = burgerUpdate

            //Tính tổng tiền
            state.total += amount * state.menu[propsBurger]

            return {...state}
        }
            
    
        default:
            break;
    }
    
    return {...state}
} 