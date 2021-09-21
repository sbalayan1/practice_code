// 9/7/21

// Big O Notation - https://www.youtube.com/watch?v=__vX2sjlpXU

// - is simplified analysis of an algorithm's efficiency
// - gives us an algorithm's complexity in terms of input size, N 
// - gives us a way to extract the efficiency of our algorithms from the machines they run on. 
// - Do not care about the status of the machine. 
// - Analyzes both time and space 


// - generally measured on a worst case scenario though the others are still important. 


// General Rules

// 1. Ignores constants 
// 2. Certain terms dominate others 

// O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(2^n) < O(n!)


Example

Constant Time
1. x = 5 + (15 * 20) -> independent of input size N -> O(1)
2. x = 5 + (15 * 20)
    y = 15 -2 
    print x + y 
    Total time = O(1) + O(1) + O(1) = O(1)

Linear Time 

1. for x in range (0, n) -> N
    print x -> O(1)

    Time = N * O(1) = O(n)

2. y = 5 + (15 * 20)
    for x in range (0, n):
        print x 

    Time = O(1) + O(n) = O(n)


Quadratic time
1. for x in range (0,n): -> N
    for y in range (0,n): -> N
        print x * y -> O(1)

    Time = N * N * O(1) = O(n^2)

2. x = 5 + (15*20) -> O(1)
    for x in range (0,n): -> O(n)
        print x

    for x in range (0, n) -> O(n^2)
        for y in range (0,n)
            print x * y 

Time = O(1) + O(n) + O(n^2) = O(n^2) -> because O(n^2) dominates the lower order terms


What is a permutation? 
- When order DOESN'T matter, it is called a combination 
- When order DOES matter, it is called a permutation


9/18/21 REDUX Notes
What is a reducer?
- A reducer combines the current state and an action, reducing the combo into one value or into one updated state. 

ex. action -> reducer -> updated state 

Characteristics of a reducer 
- Pure functions are only determined by their input values
- Pure Functions have no side effects. By this we mean pure functions do not have any effect outside of the function. They only return a value.

Redux Flow 
    1. We hold our application's state in one plain old JavaScript object, and we update that state by passing both an action and the old state to our reducer. Our reducer returns to us our new state.
    2. So to change our state we (1) create an action (an action is just a plain object with a type key); and (2) and pass the action as an argument when we call the reducer (which is just a function with a switch/case statement). This produces a new state.
    3. Our reducer is a pure function which means that given the same arguments of state and action, it will always produce the same new state. Also it means that our reducer never updates the previous state, but rather creates a new state object.

Dispatch
-> dispatch({ type: "@@INIT" }); -> returns the existing state. Could be any kind of string 'beef', 'cat', etc. Essentially what you're doing is passing a meaningless action. This gets passed into the changeState function which renders the existing state because in this case, the default case gets hit. 
Note this can be placed at the end of a file to display the current/initial state. Initial render of HTML. 

-> Dispatch solves two problems. 
    First it persists changes to state. The dispatch function does this by first calling the reducer, and then takes the return value and assigns it to state 
    Secon it ensures that each time state updates, HTML updates to reflect the changes. It does this by simply calling the render function. Each time we call dispatch it's as if we are then calling render. Don't worry about re-rendering too much. Remember that when we integrate with React, React will only be virtually re-rendering the DOM, and then updating the DOM with the smallest number of changes to ensure a performant application.

    function changeState(state, action) {
        switch (action.type) {
          case "counter/increment":
            return { count: state.count + 1 };
          default:
            return state;
        }
      }
      
      let state = { count: 0 };
      let action = { type: "counter/increment" };
      
      changeState(state, action)
      
      
      // How dispatch works 
      
      state = changeState(state, { type: "counter/increment" });
      state;
      //  => {count: 1}
      state = changeState(state, { type: "counter/increment" });
      //  => {count: 2} 
      
      
      
      function dispatch(action) {
        state = changeState(state, action)
        return state
      }
      
      dispatch({ type: 'counter/increment' })
      // => {count: 1}
      
      dispatch({ type: 'counter/increment' })
      // => {count: 2}

Rendering State 
-> To render the above^^^ on the page we can write a render function that changes our HTML:

    function render() {
        document.body.textContent = state.count;
    } 

    render();

Full example of using the reducer, dispatch, and render functions with redux 

let state = { count: 0 }

function changeState(state, action) { 
    switch (action.type) {
        case 'counter/increment': 
            return { count: state.count + 1 }
        default:
            return state
    }
}

function render() {
    document.body.textContent = state.count
}

function dispatch(action) {
    state = changeState(state,action)
    render()
}

render()
dispatch({type: '@@INIT'})


// adding event listeners to execute dispatch when a button is clicked. 
let button = document.getElementById('button')

button.addEventListener('click', () => {
    dispatch({type: 'counter/increment'})
}

// Refactoring redux code into a library that can be used across JS applications. 
    // 1. Encapsulate application state by wrapping code in a function 
    // 2. Move Code Common to Every JavaScript Application Inside Our New Function
    // 3. Abstract away the reducer 

    // With this set up, we've got a fully functional store, that encapsulates our state and provides a controlled way to write (dispatch) and retrieve (getState) information.

    // Every piece of code that would be common to any JavaScript application following this pattern is wrapped inside of the createStore function. Any code that is particular to our application is outside that function.
    
    // What's particular to a specific application?
    //     1. How the DOM is updated in our render function
    //     2. What events trigger a dispatch method
    //     3. How our state should change in response to different actions being dispatched.

    //     ***These are all implemented outside of our createStore function.***
    
    // What is generic to each application following this pattern?
    //     1. That a call to dispatch should call a reducer, reassign the state, and render a change.
    //     2. This is implemented inside the createStore function.

1. 
    function createStore() {
        // state initially is a global variable that can be mistakenly changed. wrap this stat into a function to avoid this. 
        let state;
    }

2. 
    function createStore() {
        let state; 


        // moving dispatch into the createStore function makes state accessible. 
        function dispatch(action) {
            state = reducer(state,action)
            render();
        }

        // is used to retrieve data from the store function. This method simply returns the state so we can use it elsewhere in our application. Note you also need to add the getState function to the object the createStore returns
        function getState() {
            return state
        }

        return {
            dispatch, 
            getState
        }

    }

    function reducer(state = {count: 0}, action) {
        switch(action.type) {
            case 'INCREASE_COUNT': 
                return {count: state.count + 1}
            default: 
                return state
        }
    }

    function render() {
        let container = document.getElementById('container')
        container.textContent = store.getState().count
    }

    // in order to access the dispatch method, we will create a variable called store and set it equal to the result of calling createStore. Because createStore returns an object that contains the dispatch method, we can now access the method from store. 
    let store = createStore()
    store.dispatch({ type: '@@INIT' })

    let button = document.getElementById('button')

    button.addEventListener('click', () => {
        store.dispatch({ type: 'INCREASE_COUNT' })
    })

// 3. Abstract away the reducer ??so that createStore is generic for any JS application?? <- unsure what this means. As you can see below, createStore takes the reducer as the argument. This sets the new store's reducer as reducer. When an action is dispatched, it calls the reducer that we passed through when creating the store.

function createStore(reducer) {
    let state;
  
    function dispatch(action) {
      state = reducer(state, action);
      render();
    }
  
    function getState() {
      return state;
    };
  
    return {
      dispatch,
      getState
    };
  };
  
  function reducer(state = { count: 0 }, action) {
    switch (action.type) {
      case 'INCREASE_COUNT':
        return { count: state.count + 1 };
  
      default:
        return state;
    }
  }
  
  
  function render() {
    let container = document.getElementById('container');
    container.textContent = store.getState().count;
  };
  
  let store = createStore(reducer) // createStore takes the reducer as an argument
  store.dispatch({ type: '@@INIT' });
  let button = document.getElementById('button');
  
  button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
  });