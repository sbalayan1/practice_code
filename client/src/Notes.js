// 9/7/21

import { supported } from "turbolinks"

Big O Notation - https://www.youtube.com/watch?v=__vX2sjlpXU
  - is simplified analysis of an algorithm's efficiency
  - gives us an algorithm's complexity in terms of input size, N 
  - gives us a way to extract the efficiency of our algorithms from the machines they run on. 
  - Do not care about the status of the machine. 
  - Analyzes both time and space 


  - generally measured on a worst case scenario though the others are still important. 


  General Rules

    1. Ignores constants 
    2. Certain terms dominate others 

    O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(2^n) < O(n!)

- big O notation is used to express runtime in terms of "HOW QUICKLY IT GROWS RELATIVE TO THE INPUT, AS THE INPUT GETS ARBITRARILY LARGE"
  - Note that n can be the actual input or the size of the input because n is somtimes an actual number that's an input to the method or n is the number of items in an input array/object/map/etc. 

  O(1) = constant time relative to its input
    -> The input array could be 1 item or 1,000 items, but this method would still just require one "step."
  O(n) = linear time where n is the number of items in the array. 
    -> if the array has 10 itesm, we have to print 10 times. 
  O(n log n) = linearithmic time 
    -> 
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

  Question: You are given an unordered array consisting of consecutive integers [1,2,3,..., n] without any duplicats. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order. 

  In: [7,1,3,2,4,5,6]
  Out: 5
  
  Questions to ask your interviewer in this case? 
  - Can I use the sort method? 
  - Check to make sure consecutive means 1,2,3,4,5,6
  - Can I mutate my original array?
  - Will the array always start at 1? What is the minimum number? 

  Notes: 
  - In this case you would use the index of each element in the array. If the index does not match the element in the array, find the element that matches and swap the two elements. Make sure to keep track of your swaps. 

  Solution: 
  function minimumSwaps(arr) {
    let unsorted = [...arr]
    let min = Math.min(...arr)
    let swaps = 0
  
    for (let i = 0; i < unsorted.length; i++) {
      if (unsorted[i] !== i + min) {
        
        // finds the correct element
        let idx = unsorted.indexOf(i+min, i)
        let temp = unsorted[i]
  
        // swaps the current element in the unsorted array with the correct element
        unsorted[i] = unsorted[idx]
  
        // swaps the correct element with the incorrect element. 
        unsorted[idx] = temp
  
        // increase swaps by 1 if the condition is hit
        swaps++
      }
    }
    return swaps
  }
  
  console.log(minimumSwaps([7,1,3,2,4,5,6]))//5
  console.log(minimumSwaps([-7, 1, -3, 2, 4, 5, 6])) //6

  remember to ask about edge cases:
  - array that is already sorted
  - array with any negative values 
  - etc. 


Odd or Even: 
function isEvenOrOdd(n) {
  return n % 2 ? 'Odd' : 'Even';
}

console.log(isEvenOrOdd(10)); // => Even
console.log(isEvenOrOdd(10001)); // => Odd

Find Max:
function findMax(n) {
  let max; 

  for (let i = 0; i < n.length; i++) {
    if (n[i] > max || max === undefined) {
      max = n[i]
    }
  }

  return max
}

Bubble Sort: 
  function sort(n) {
    for (let outer = 0; outer < n.length; outer++) {
      let outerElement = n[outer];

      for (let inner = outer + 1; inner < n.length; inner++) {
        let innerElement = n[inner];

        if(outerElement > innerElement) {
          // swap
          n[outer] = innerElement;
          n[inner] = outerElement;
          
          // update references
          outerElement = n[outer];
          innerElement = n[inner];

        }
      }
    }
    return n;
  }

  console.log(sort([3,2,1]))
  //outer = 0 && inner = 1
  //outer element = 2 && inner element = 3 
  //[2,3,1]

  // outer = 0 && inner = 2 
  // oe = 2 && ie = 1 -> swap to oe = 1 && ie = 2
  // n = [1,3,2]

  // outer = 1 && inner = 2
  // oe = 3 && ie = 2 -> swap to oe = 2 && ie = 3
  // n = [1,2,3]

Merge Sort: 
  How it works: 
    1. Divide the array recursively until the elements are two or less. 
    2. Sort the two items in the array iteratively 
    3. Merge by taking one by one from each array such that they are in ascending order. 
  
  // Sort array in asc order using merge-sort 
  // Example 
  // sort([3,2,1]) => [1,2,3]
  // sort([3]) => [3]
  // sort([3,2]) => [2,3]
  
  // function sort(array = []) {
  //   // handles arrays with lengths equal to or less than 2. base case scenario
  //   if (array.length < 2) {
  //     return array
  //   }

  //   // sort the array. 
  //   if (array.length === 2) {
  //     return array[0] > array[1] ? [array[1], array[0]] : array
  //   }

  //   // cuts the array in half. Also maybe handles cases where you receive a string of integers? 
  //   let mid = parseInt(array.length/2, 10)

  //   // sort(array.slice(0,mid)) creates a copy of the original array and slices from index 0 to mid and sorts. sort(array.slice(mid)) does the same but from index mid to the end of the array. 
  //   return merge(sort(array.slice(0,mid), sort(array.slice(mid))))
  // }

  // function merge(array1 = [], array2 = []) {
  //   const merged = []
  //   let array1Index = 0 
  //   let array2Index = 0

  //   // execute the loop until we complete each array
  //   while (array1Index < array1.length || array2Index < array2.length)
  //     if (array1Index >= array1.length || array1[array1Index] > array2[array2Index]) {
  //       merged.push(array2[array2Index])
  //       array2Index++
  //     } else {
  //       merged.push(array1[array1Index])
  //       array1Index++
  //     }
  // }

  function sort(array) {
    if (array.length <= 1){
      return array
    }
  
    let mid = parseInt(array.length/2, 10)
    return merge(sort(array.slice(0,mid)), sort(array.slice(mid)))
  }
  
  function merge(array1, array2) {
    let merged = [], arrayIndex1=0, arrayIndex2=0
  
    while (arrayIndex1 < array1.length && arrayIndex2 < array2.length) {
      if (array1[arrayIndex1].length > array2[arrayIndex2].length) {
        merged.push(array2[arrayIndex2])
        arrayIndex2 ++
      } else {
        merged.push(array1[arrayIndex1])
        arrayIndex1 ++
      }
    }
  
    return merged.concat(array1.slice(arrayIndex1), array2.slice(arrayIndex2))
  }
  
  
  sort(['beg','life','i','to','james brown'])


Recursive Binary Search: 
function indexOf(array, element, offset = 0) {
  // split array in half
  const half = parseInt(array.length / 2);
  const current = array[half];

  if(current === element) {
    return offset + half;
  } else if(element > current) {
    const right = array.slice(half);
    return indexOf(right, element, offset + half);
  } else {
    const left = array.slice(0, half)
    return indexOf(left, element, offset);
  }
}

// Usage example with a list of names in ascending order:
const directory = ["Adrian", "Bella", "Charlotte", "Daniel", "Emma", "Hanna", "Isabella", "Jayden", "Kaylee", "Luke", "Mia", "Nora", "Olivia", "Paisley", "Riley", "Thomas", "Wyatt", "Xander", "Zoe"];
console.log(indexOf(directory, 'Hanna'));   // => 5
console.log(indexOf(directory, 'Adrian'));  // => 0
console.log(indexOf(directory, 'Zoe'));     // => 18

What does a binary search do: 

  Open the book in the middle and check the first word on it.
  If the word you are looking for is alphabetically more significant, then look to the right. Otherwise, look in the left half.
  Divide the remainder in half again, and repeat step #2 until you find the word you are looking for.


10/13/21 CodeWars 

  1. Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

  For example, if this array were passed as an argument:

  ["Telescopes", "Glasses", "Eyes", "Monocles"]

  Your function would return the following array:

  ["Eyes", "Glasses", "Monocles", "Telescopes"]

  All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

Solution: 
  1. Bubble Sort 
    function sortByLength (array) {
      for (let i = 0; i<array.length; i++) {
        let outerElement = array[i]
        
        for (let j= i+1; j<array.length; j++) {
          let innerElement = array[j]
          
          if (outerElement.length > innerElement.length) {
            array[i] = innerElement
            array[j] = outerElement
            
            outerElement = array[i]
            innerElement = array[j]
    
          }
        }
      }
      
      return array
    };

  -> Time complexity of O(n^2)

Easy Solution: 
  function sortByLength (array) {
    array.sort((a,b) => a.length - b.length)
  }

  2. All Star Code Challenge #22

  Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

  Any remaining seconds left over are ignored.

  Note:
  The string output needs to be in the specific form - "X hour(s) and X minute(s)"

  For example:

  3600 --> "1 hour(s) and 0 minute(s)"
  3601 --> "1 hour(s) and 0 minute(s)"
  3500 --> "0 hour(s) and 58 minute(s)"
  323500 --> "89 hour(s) and 51 minute(s)

  Solution: 
    function toTime(seconds) {
      let hours = Math.floor(seconds/3600)
      let minutes = Math.floor((seconds - hours * 3600)/60)
      
      seconds >= 3600 ? null : hours = 0
      
      return `${hours} hour(s) and ${minutes} minute(s)` 
    }

  3. Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).
  
    The input string will only consist of lower case letters and/or spaces.

    Solution: 

    function getCount(str) {
      var vowelsCount = 0;
      let copyOfString = str.split('')
      
      for(let i = 0; i<copyOfString.length; i++) {
        if (copyOfString[i].match(/[aeiou]/gi)){
          vowelsCount ++
        }
      }
    
      return vowelsCount;
    }

    Best Solution: 

    function getCount(str) {
      return (str.match(/[aeiou]/ig)||[]).length;
    }


3. In the following 6 digit number:

  283910
  91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

  1234567890
  67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Solution: 

function solution(digits){
  let copyOfDigits = digits.split('')
  let max = 0
  
  for (let i = 0; i<copyOfDigits.length; i++) {
    let series = parseInt(copyOfDigits.slice(i,i+5).join(''),10)
    
    if (series !== undefined) {      
      series > max ? max = series : null
    }    
  }
  return max
}

4. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Solution: 

  function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    let mapOfAlphabet = new Map()
    
    for (let i = 0; i<alphabet.length; i++) {
      mapOfAlphabet.set(alphabet[i], 0)
    }
    
    for (let i = 0; i<string.length; i++) {
      mapOfAlphabet.set(string.toLowerCase()[i], 1)
    }
    
    for (let i = 0; i< alphabet.length; i++) {
      if (mapOfAlphabet.get(alphabet[i]) === 0) {
        return false
      } 
    }
    
    return true
  }

Best Solution: 

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every((x) => string.toLowerCase().includes(x));
}


5. Implement a function that returns the minimal and the maximal value of a list (in this order).

Solution: 
  function getMinMax(arr){
    let sortArray = arr.sort((a,b) => a-b)
    
    return [sortArray[0], sortArray[sortArray.length-1]]
  };

6. Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

Solution: 
  function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
  }

7. In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.

Solution: 

https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2


  Master Theorem

    procedure p( input x of size n ):
      if n < some constant k:
        Solve x directly without recursion
      else:
        Create a subproblems of x, each having size n/b
        Call procedure p recursively on each subproblem
        Combine the results from the subproblems

let permutations = (string) => {

  // 1: a conditional checks if the size of the input is smaller than a constant.
  if (string.length <= 1) {
    return [string]
  }
  
  // : Make an empty array. If my final solution may return more than one “correct” element (in this case, permutations), I’ll need a place to store them before I return the complete solution
  let permutationsArray = []

  // Iterate! If I need to find all the ordered combinations of characters in a string, creating a loop to iterate through all the characters in a string seems like a decent place to start.
  for (let i = 0; i<string.length; i++) {
    let char = string[i]

    // collect and assign remaining chars to variable. slice the characters from index 0 (the first character in the string) to index i (our current character, char). Then, we’ll join the characters from index i + 1 (the next character after char) to index string.length (the last character in string).
    let remainingChars = string.slice(0,i) + string.slice(i+1, string.length)
    

    //     use Javascript’s indexOf method to identify if the current character has already been run through our findPermutations method. indexOf returns the first index of a character, so if we’ve already run findPermutations for an “a”, for example, the indexOf(“a”) will be different than the index of char, the current, later “a”. If this is true, we can continue, which will essentially skip the current iterative loop and move on to the next.
    if (string.indexOf(char) !== i) {
      continue
    }
    

    // 2: if the input is larger than said constant, the input is broken down into smaller pieces until they are all small enough to run the procedure on directly
    for (let p of permutations(remainingChars)) {

    // 3: when this is done, the results of all the pieces post-procedure can be combined and returned as a single large bit of data.
      permutationsArray.push(char + p)
    }
  }
  
  return permutationsArray
}

8. What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

  Solution: 

  function anagrams(word, words) {
    let anagramArray = []
    let sortedWord = word.split('').sort().join('')
    
    for (let i = 0; i<words.length; i++) {
      let sortedArrayWord = words[i].split('').sort().join('')
  
      if (sortedWord === sortedArrayWord) {
        anagramArray.push(words[i])
      }
    }
    
    return anagramArray
  }

    Better Solution: 
    function anagrams(word, words) {
      word = word.split('').sort().join('');
      return words.filter(function(v) {return word == v.split('').sort().join('');});
    }

  Best Solution (O(n) time complexity): 

    let anagrams = (word, words) => {
      let anagramsArray = []
      words.map(w => {
        if (anagram(word, w) === true) {
          anagramsArray.push(w)
        }
      })
    
      return anagramsArray
    }
    
    let anagram = (stringA, stringB) => {
      let charMapA = getCharMap(stringA)
      let charMapB = getCharMap(stringB)
    
      if(stringA.length !== stringB.length) {
        return false
      }
    
      for (let i in charMapA) {
        if (charMapA[i] !== charMapB[i]) {
          return false
        } 
      }
      return true
    }
    
    let getCharMap = (string) => {
      let charMap = {}
      for (let i = 0; i<string.length; i++) {
        charMap[string[i]] !== undefined ? charMap[string[i]] ++ : charMap[string[i]] = 1
      }
    
      return charMap
    }


9. Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

Solution: 

  let moveZeros = (arr) => {
    let filter0 = arr.filter(char => char !== 0)
    for (let i = 0; i<arr.length; i++) {
      arr[i] === 0 ? filter0.push(arr[i]) : null
    } 

    return filter0
  }

10. Description:
// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4 
//  2 \4\ 6 
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function longestSlideDown (in ruby/crystal/julia: longest_slide_down) that takes a pyramid representation as argument and returns its' largest 'slide down'. For example,

// longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) => 23
// By the way...
// My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// (c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.

Solution: 

let longestSlideDown = (pyramid) => {
  return pyramid.reduceRight((last, current) => {
    return current.map((v, i) => v + Math.max(last[i], last[i+1]))
  })[0]
}

// 11. Your task is to write function factorial.

Solution (iteratively): 

  let factorial = (n) => {
    let product = 1
    if (n <= 1) {
      return product
    } else {
      for (let i = n; i>=1;  i--) {
        product = product * i
      }
    }

    return product
  }

Solution (recursively): 

  let factorial = (n) => {
    return n <= 1 ? 1 : factorial(n-1) * n 
  }

// 11. I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two

  Solution (iterative): 

    let nthFibo = (n) => {
      let a = 0, b = 1, c = 0
      if (n<=2) {
        c = (a+b) * (n-1)
      } 

      if (n>2) {
        for (let i = 0; i<n-2; i++) {
          c = a + b
          a = b 
          b = c
        }
      }

      return c
    }


  Solution (recursive): 

    let nthFibo = (n) => {
      let product = 0 
      if (n===1) {
        product = 0
      }

      if (n===2) {
        product = 1
      }

      if (n>2) {
        product = nthFibo(n-1) + nthFibo(n-2)
      }

      return product
    }


  //  12. Build a function that returns an array of integers from n to 1 where n>0.
  Solution: 

  let reverseSeq = (n) => {
    let reversed = []
    while (n>0) {
      reversed.push(n)
      n--
    }
    
    return reversed
  }

// 13. Find an element in array such that sum of left array is equal to sum of right array

Solution: 

  let findEvenIndex = (arr) => {
    let left = []
    let right = []
    let leftSum = 0
    let rightSum = 0

    for (let i = 0; i<arr.length; i++) {
      leftSum = leftSum + arr[i]
      left.push(leftSum)
    }

    for (let j = arr.length-1; j>-1; j--) {
      rightSum = rightSum + arr[j]
      right.push(rightSum)
    }

    right = right.reverse()

    for (let k = 0; k<left.length; k++) {
      if (left[k] === right[k]) {
        return k
      }
    }
  }

14. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

Solution: 
  function lovefunc(flower1, flower2){
    let isOdd1 = null
    let isOdd2 = null
    
    flower1%2 == 0 ? isOdd1 = false : null
    flower2%2 == 0 ? isOdd2 = false : null
    
    if (isOdd1 === isOdd2) return false
    
    return true
  }


Best Solution: 
  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }

15. Move all exclamation marks to the end of the sentence

Examples
  remove("Hi!") === "Hi!"
  remove("Hi! Hi!") === "Hi Hi!!"
  remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
  remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
  remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

Solution: 
  function remove(s){ 
    let sentence = []
    let count = 0
    
    for (let i = 0; i<s.length; i++) {
      if (s[i] !== '!') {
        sentence.push(s[i])
      }
      
      if (s[i] === '!') {
        count ++
      }
    }
    
    for (let j = 0; j<count ; j++) {
      sentence.push('!')
    }
    
    return sentence.join('')
  }

16. Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

Solution: 

  let number = (arr) => {
    let count = 0
    let newArr = []
    
    for (let i = 0; i<arr.length; i++) {
      count ++ 
      newArr.push(`${count}: ${arr[i]}`)
    }
    
    return newArr
  }

Best Solution: 

  let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)


17. Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.

Solution: 
  function save(sizes, hd) {
    let currCapacity = 0
    let count = 0
      
    for (let i = 0; i<sizes.length;i++) {
      if (sizes.length === 1 && sizes[i] <= hd) {
        return 1
      } else if (sizes.length === 1 && sizes[i] > hd ){
        return 0
      }
      
      if (currCapacity < hd) {
        currCapacity += sizes[i]
        count ++
      }
      
      if (currCapacity === hd) {
        return count
      }
      
      if (currCapacity > hd) {
        count --
        return count
      }
    }
    
    return count
  }

Best Solution: 
  function save(sizes, hd) {
    let i = -1;
    while (hd >=0) {
      hd -= sizes.shift();
      i++;
    }
    return i;
  }

18. In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

Solution: 
  let solve = (str) => {
    if (str === str.toLowerCase() || str === str.toUpperCase()) {
      return str
    }
    
    let upperCaseCount = 0
    let lowerCaseCount = 0
    
    for (let i = 0; i<str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        lowerCaseCount ++
      }
      
      if (str[i] === str[i].toUpperCase()) {
        upperCaseCount ++
      }
    }
    
    if (upperCaseCount > lowerCaseCount) return str.toUpperCase()
    if (lowerCaseCount > upperCaseCount || lowerCaseCount === upperCaseCount) return str.toLowerCase()
    
    
  }

Best Solution: 

function solve(s){
  let lowerC = 0;
  let upperC = 0;
  for( let i = 0;i<s.length;i++){
    if( s[i] == s[i].toUpperCase()){
      upperC++;
    }
    else{
      lowerC++;
    }
  }
  return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

19. Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

Solution: 
  function repeatStr (n, s) {
    let count = 0 
    let string = []
    while (count < n) {
      string.push(s)
      count ++
    }
    return string.join('');
  }

Best Solution: 

  function repeatStr (n, s) {
    return s.repeat(n);
  }

20. Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                 
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
                  
 persistence(4) === 0 // because 4 is already a one-digit number


Solution: 
  function persistence(num) {
    let count = 0 
    let numArray = num.toString().split('')
    
    if (numArray.length <= 1) {
      return count
    }
    
    while (numArray.length > 1) { 
      let digits = numArray.reduce((a,b) => parseInt(a) * parseInt(b)) 
      numArray = digits.toString().split('')
      count ++
    }
    
    return count
  }

Alternate Solution: 

function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

21. As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.

Best Solution: 

  let getLastDigit = (n) => {
    let [a,b] = [0,1]

    for (let i = 0; i<n; i++) {
      [a,b] = [b, (a+b) % 10]
    }

    return a
  }

Time complexity: O(n)
Note it's possible to do this in O(log n) but it's probably better to do this in O(1) if you're going to do O(log n) since you can. 

22. Just like in the "father" kata, you will have to return the last digit of the nth element in the Fibonacci sequence (starting with 1,1, to be extra clear, not with 0,1 or other numbers).

You will just get much bigger numbers, so good luck bruteforcing your way through it ;)

Solution:     
  function fib(f) {
    f[0] = 0
    f[1] = 1
    
    for (let i=2; i<= 59; i++) {
      f[i] = ((f[i-1] + f[i-2]) % 10)
    }
  }

  function lastFibDigit(n){
    let f = []
    fib(f)
    let index = n % 60
    return f[index]
  }

Alternative Solutions: 

  const lastFibDigit = (function() {
    const LAST_DIGIT = [
      0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 
      5, 9, 4, 3, 7, 0, 7, 7, 4, 1, 
      5, 6, 1, 7, 8, 5, 3, 8, 1, 9, 
      0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 
      5, 1, 6, 7, 3, 0, 3, 3, 6, 9, 
      5, 4, 9, 3, 2, 5, 7, 2, 9, 1,
    ]

    // The sequence of final digits in Fibonacci numbers repeats in cycles of 60.
    return index => LAST_DIGIT[index % 60]
  })()


Time Complexity: O(1)

// twoSum improved

let twoSumImproved = (arr, target) => {
  let hash = {}
  for (let i=0; i<arr.length; i++) {
    let num = arr[i]
    hash[num] = i
  }

  for (let i = 0; i<arr.length; i++) {
    let diff = target - arr[i]
    if(hash[diff] && hash[diff] !== i) {
      return [i, hash[diff]]
    }
  }
}

// Another way to do twoSum
let findTwoSum = (arr, target) => {
  let foundValues = new Set()
  for (let i =0; i<arr.length; i++) {
    if (foundValues.has(target - arr[i])) {
      return true
    }

    foundValues.add(arr[i])
  }

  return false
}


// merge sort 

let sort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  let mid = Math.floor(arr.length/2)
  return merge(sort(arr.slice(0,mid)), sort(arr.slice(mid)))
}

let merge = (arr1, arr2) => {
  let merged = []
  let index1 = 0
  let index2 = 0

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] > arr2[index2]) {
      merged.push(arr2[index2]) 
      index2 ++
    } else {
      merged.push(arr1[index1])
      index1 ++
    }
  }

  return merged.concat(arr1.slice(index1), arr2.slice(index2))
}


// peak mountain index using recursive binary search 
let binarySearch = (arr, start, end) => {
  let mid = start + Math.floor((end-start)/2)
  
  if (arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]) {
      return mid
  } else if (arr[mid] < arr[mid+1]) {
      return binarySearch(arr, mid+1, end)
  } else if (arr[mid] < arr[mid-1]) {
      return binarySearch(arr, start, mid-1)
  }
}   

let peakIndexInMountainArray = (arr) => {
  return binarySearch(arr, 0, arr.length-1)
}