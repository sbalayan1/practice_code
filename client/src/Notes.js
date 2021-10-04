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

- big O notation is used to express runtime in terms of "HOW QUICKLY IT GROWS RELATIVE TO THE INPUT, AS THE INPUT GETS ARBITRARILY LARGE"
  - Note that n can be the actual input or the size of the input because n is somtimes an actual number that's an input to the method or n is the number of items in an input array/object/map/etc. 

  O(1) = constant time relative to its input
    -> The input array could be 1 item or 1,000 items, but this method would still just require one "step."
  O(n) = linear time where n is the number of items in the array. 
    -> if the array has 10 itesm, we have to print 10 times. 
  O(n^2) = quadratic time 
  -> Example: nesting two loops
  If our array has nn items, our outer loop runs nn times and our inner loop runs nn times for each iteration of the outer loop, giving us n^2 total prints. If the array (n) has 10 items, we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.


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

Space Complexity 

  Sometimes we want to optimize for using less memory instead of (or in addition to) using less time. Talking about memory cost (or "space complexity") is very similar to talking about time cost. We simply look at the total size (relative to the size of the input) of any new variables we're allocating.


    This function takes O(1)O(1) space (we use a fixed number of variables):
      function sayHiNTimes(n) {
        for (let i = 0; i < n; i++) {
          console.log('hi');
        }
      }

    This function takes O(n)O(n) space (the size of hiArray scales with the size of the input):
      function arrayOfHiNTimes(n) {
        const hiArray = [];
        for (let i = 0; i < n; i++) {
          hiArray[i] = 'hi';
        }
        return hiArray;
      }

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


// Implementing Redux in React. 
    //1.  import our createStore() function from the official Redux library. Normally, to install Redux into a React application, you need to install two packages, redux and react-redux by running npm install redux react-redux
    //2. Redux provides a function, createStore(), that, when invoked, returns an instance of the Redux store for us. So we can use that function to create a store. We want to import createStore() in our src/index.js file, where ReactDOM renders our application.
    //3.  To avoid passing store as a prop, we use the Provider component, which is imported from react-redux. The Provider component wraps the top level component, App, in this case, and is the only component where store is passed in. By including the Provider, we'll be able to access our Redux store and/or dispatch actions from any component we want, regardless of where it is on the component tree.
    // 4. To gain access to the store somewhere in our app, we use two hooks provided by react-redux: the useDispatch hook (for dispatching actions to the store), and the useSelector hook (for selecting parts of state to access within our components).


// More about the useDispatch and useSelector hooks. 
    // 1. useDispatch: The Redux store has a special dispatch method that we must call any time we want to create a new state. The useDispatch hook gives us access to that dispatch method so we can use it from any of our components!
    // 2. useSelector: Is the way we can interact with the getState method via the Redux store. This hook takes a callback function as an argument that will get called with the state object from our Redux store. Whatever the callback function returns will be returned by the hook. Another effect of using the useSelector hook is that it effectively 'subscribes' our components to changes in the Redux store state. Whenever the value returned by our useSelector hook changes, the useSelector hook will cause our component to re-render. So as the store's items property increases, Counter will display a different number!


// The below lets your redux store communicate with the redux devtools extension in your browser 
    const store = createStore(
        counterReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

// The properties of Actions and how to use action creators to create an action 
    Actions are just Plain Old JavaScript Objects (POJOs) with at least one property called type. 

    // Example of an action creator 
        function addTodo(todo) {
            return {
            type: 'ADD_TODO',
            todo: todo
            }
        }

    //   Notice how in the above we can generate different payload properties depending on what we pass to the addTodo function. 
    // example 
        addTodo('buy groceries');
        // -> { type: 'ADD_TODO', todo: 'buy groceries' }

        addTodo('watch netflix');
        // -> { type: 'ADD_TODO', todo: 'watch netflix' }

    // example of dispatching an action creator 
        store.dispatch(addTodo('buy groceries'));

    // Action creators basically let us separate redux specific code and our react components by storing a changeable action object inside of a function. This keeps us from having to rewrite the action object everytime we need to dispatch an action. 

// Exploring useDispatch in more detail and organizing Redux dispatching logic using action creators 
    // -> look at react-hooks-redux-use-dispatch-lab and prior repos in Mod4 for more information


// Combining redux reducers using combineReducers()
    // The combineReducers() function allows us to write two or more separate reducers, then pass each reducer to the combineReducers() function to produce the reducer we wrote above. Then we pass that combined reducer to the store in src/index.js.

    // Through combineReducer, we're telling Redux to produce a reducer which will return a state that has both a key of books with a value equal to the return value of the booksReducer() and a key of authors with a value equal to the return value of the authorsReducer(). 
    
    // We'll also need to import our new root reducer in the src/index.js file:

    // Dispatching Actions
        // The combineReducer() function returns to us one large reducer that looks like the following:

const initialState = {
  authors: [], //array of authors
  books: [], // array of books
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "books/add":
      return; // ...
    case "books/remove":
      const newBooks = state.books.filter((book) => book.id !== action.payload);
      return; // ...
    // ...
  }
} 
        // Because of this, we can dispatch actions the same way we always did. store.dispatch({ type: 'books/add', { title: 'Snow Crash', author: 'Neal Stephenson' } }); will hit our switch statement in the reducer and add a new author.


        String Challenge

        Have the function StringChallenge(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.
        
        If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.

        Examples
        Input: "<div><div><b></b></div></p>"
        Output: div
        Input: "<div>abc</div><p><em><i>test test test</b></em></p>"
        Output: i

        function StringChallenge(str) { 

            // code goes here 
            // turn string into an array 
            // first element in the array should be equal to the last element of the array and so on. 
            let array = str.split('><')
          
          
            // iterate through the array from the first and last index. 
            for (let i=0; i<array.length; i++) {
              
              // continue to iterate through if the two are the same. 
              for (let j=i+1; j<array.length; j++)
                if ('/' + array[i].split('<').join('') === array[array.length - j].split('>').join('')) {
                  i++
                  j++
                  return true
          
              // return the invalid element if the two are not equal
                } else {
                  return array[i].split('<').join('')
                }
            }
          }
             
          // keep this function call here 
          console.log(StringChallenge(readline()));

        let str = "<div>word</div>"

  function StringChallenge(str) {
    let stringArray = str.split('')
    let updatedArray = []
    let j = 0 

    for (let i = 0; i < stringArray.length; i++) { 

      if (stringArray[i] === '<') {
        j = i
        i++
      } else if (stringArray[i] === '>') {
        let word = stringArray.slice(j,i+1)
        updatedArray.push(word.join(''))
        i++

      } else {
        i++
      }
    }

    return updatedArray

  }

  console.log(StringChallenge(str))
