MATTHEW CASTILLO

1. What problem does the context API help solve?

    A: Context provides a way to share values (such as props) between components without having to explicitly pass a prop through every level of the tree.
    - We use the Context API when we have global data that lots of components share (things like user or theme), or when we have to pass data through intermediate components. The API can help keep your state relatively clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    A: 'actions' are objects such as an array that basically change the state, the 'store' is an immutable piece of data coming from redux that holds the value of state, and we call our reducers within our created store, the reducers process changes to state by comparing the old state (initial state) to the newly given state from the action and render those changes to the UI.
    - Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    A: Application state is the "global" state that all components in the component tree can access. This is the state that your application is in and basically what is being rendered. Component state is the state that is local to a single component and cannot be seen outside of this component, unless it is passed down through props. 
    - If your application is small and there isn't a lot of data flowing around, it is a good idea to utilize Component state, but if your app requires a large chunk of data which multiple components within your app need access to including information from child components to parent components, than it is useful and easier to manage by using Application state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    A: Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators. It changes our action creators by making them asynchronous from synchronous thus allowing us to change them before having to wait for our APP to fully render.

5. What is your favorite state management system you've learned in this sprint? Please explain why!

    A: I prefer Context API to be honest, because of that whole two lines of code to get started with handling our state management, the redux way just seems very complicated and there are a lot of layers that if you mess up, you gotta search through multiple files to see where you messed up. It is still better than having no state management, but I prefer context API because it seems easier.