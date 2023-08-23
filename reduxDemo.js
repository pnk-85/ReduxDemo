const redux = require('redux');
 

const couterReducer = (state = {counter : 0}, action) => {
    if(action.type === 'increment'){
        return {
            counter : state.counter + 5
        };
    };
    if(action.type === 'decrement'){
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

store.dispatch({type : 'increment'});
store.dispatch({type : 'increment'});
store.dispatch({type : 'increment'});
store.dispatch({type : 'decrement'});
store.dispatch({type : 'decrement'});