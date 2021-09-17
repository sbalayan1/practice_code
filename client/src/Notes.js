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


