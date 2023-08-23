const redux = require('redux');
 

const couterReducer = (state = {counter : 0}, action) => {
    if(action.type === 'INCREMENTBY2'){
        return {
            counter : state.counter + 2
        };
    };
    if(action.type === 'DECREMENTBY2'){
        return { 
            counter : state.counter - 5
        };
    };
};

const store = redux.createStore(couterReducer);


const conterSubScriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};


store.subscribe(conterSubScriber);

store.dispatch({type : 'INCREMENTBY2'});
store.dispatch({type : 'INCREMENTBY2'});
store.dispatch({type : 'INCREMENTBY2'});
store.dispatch({type : 'DECREMENTBY2'});
store.dispatch({type : 'DECREMENTBY2'});