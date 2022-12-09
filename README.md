# Getting Started Redux

There are four fundamental concepts that govern the flow of data in React-Redux applications.

1. Redux store: The Redux store, simply put, is an object that holds the application state. A redux store can consist of small state objects which are combined into one large object. Any component in the application can easily access this state (store) by hooking up to it through the connect method.
2. Action creators: Action creators, as the name suggests, are functions that return actions (objects). Action creators are invoked when the user interacts with the application through its UI (button click, form submission,  etc) or at certain points in a component’s lifecycle (component mounts, component un-mounts, etc).
3. Actions: Actions are simple objects which conventionally have two properties- type and payload. The type property is usually a string that specifies identifies the action, and the payload is an optional property that contains some data that is required to perform any particular task. The main function of action is to send data from the application to the Redux store.
4. Reducers: Reducers are pure functions that update the state of the application in response to actions. Reducers take a previous state and an action as the input and return a modified version of the state. Since the state is immutable, a reducer always returns a new state, which is an updated version of the previous state.

## `Data flow in a Redux`

==> The flow of data in a React-Redux application begins at the component level when the user interacts with the application UI. This interaction leads to the action creators dispatching an action.
==> When an action is dispatched, it is received by the root reducer of the application and is passed on to all the reducers. Thus, it becomes the reducer’s task to determine if it needs to update the state based on the dispatched action.
==> This is checked by using a simple switch statement to filter out the required actions. Each (smaller) reducer in the application accepts the dispatched action and if the type of the dispatched action matches, it returns a newly updated state.
==> It is essential to note here that the state never actually changes in redux. Instead, the reducer always generates a new state which is a copy of the old state, but with some modifications.
==> The store then informs the component about the new state which in turn retrieves the updated state and re-renders the component.
==> Another important observation here is that flow of data in a React-Redux application is unidirectional, i.e., it only goes in one direction.

### `Reference`

See the section about [redux](https://www.geeksforgeeks.org/whats-the-typical-flow-of-data-like-in-a-react-with-redux-app/) for more information.
