//the below demonstrates how here, var is function scoped.
function name() {
  var test = 'hello world'
  console.log(test)
}

function testScope() {
  // console.log(test) => var is inaccessible in the console log and will throw an error

  //we can access var by invoking the name() function
  return name()
}

// testScope()



//The below demonstrates how even though we reassign test2, using function one, the console log uses the test2 var scoped to function two. regardless of order, function two will return 'yomama' ie. one() then test2 or vice versa
//if it was not a var however and it was just, test2 = 'yomama', then order would take precedence and you'd assign yomama or dupri depending on the order of test2 and one.
var test2 = 'jermaine'

function one() {
  test2 = "dupri"
}

function two() {
  var test2 = "yomama"
  one()
  console.log(test2)
}

//what is test2 going to be?
two()
//=> 'yomama'

