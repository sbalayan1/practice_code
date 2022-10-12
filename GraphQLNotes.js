What is GraphQL
    -> is language that lets your frontend communicate with your backend
    -> to make a request to the server, we send a graphql query. The query will have the same shape that you expect to receive back from the API as json.
    -> graphql functions as a runtime for executing queries
    -> the server defines types for the data that's available and resolvers to actually fetch data from the database'
    -> introspection to the backend to see what data is available

    -> the checkboxes represent different queries we can make to the api
    -> the graphql query gets a json payload response, returned from the server
        - the properties on the json obj are identical to the way we structured in our json query
        - everything is strongly typed
        - working with graphql, you will always know the exact shape of the data you are getting back from the server
        - only returns the fields requested

    -> single entry point into the api
        - the query sent from the front end determines what the response is from the backend

    -> you can reuuse values throughout your queries using variables. These are prefixed with a $
    -> @directives => include, skip
    -> note queries can take arguments
    -> ! exclamation point makes an argument required

    npm i --save-dev nodemon => saves the nodemon dependency as a dev dependency and lets us reload our server whenever we save our files

Union Type Fragments
Mutations
    -> mutations write data or change data on the server
    -> work like a query but signal that data will be modified on the server

Most use the apollo client to work with on a front end application. It's a state management library that let's you write graphql then see your results updated in your UI.

=> install apollo graphql extension on vs code
=> create apllo.config.js: this tells apollo where to find our backend api => points to public space-x api
=> launch-list.graphql  => are files that represent queries 
=> launch-details.graphql => are files that represent queries 

=> ng add apollo-angular => adds apollo dependencies and creates graphql module in the app directory. modify that module by changing where to find the api by updating the uri variable

graphql code generator => tool that lets you look at your schema and automatically generate interfaces and servcies that can fetch data.
    => codegen.yml => tells the graphql code generator where to find the graphql files and what to generate once it finds them.
    => package.json => scripts: {"codegen": "gql-gen"} => creates a codegen command that runs our generator => npm run codegen runs our generator






