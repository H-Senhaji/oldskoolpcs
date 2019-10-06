

1. Add an event handler to your `<select>` element, so that whenever the value of the drop-down changes we run a method called `updateSelection`.
  
   Method element updateselection maken
   forms reactsite onChange, thishandleChange function
   ipv thishandleChange updateSelection (same method)
   onChange = event
   value is  name (declared in renderapp.js)
   event.target.value 
   handlechange invullen met even.target.value

-->

1. Add the `updateSelection` method to the `App` component class. Inside the method save the selected value in the `local state`.
1. At the end of this step, changing the selected item of the drop-down should update the `App` component's local state and store the selected value.

   consolelog updateSelection to see if works
   
1. The value of the `<select>` element should be read from the local state. (the `<select>` should be a `controlled component`)

## Step 3 - Dispatching Redux Actions

Now that we can select a computer model from the drop-down, you will add a button which adds the selected item to an array in the Redux state.

### Requirements

**Note:** _The name of currently selected model should be stored in the `local state` of the App component if you were able to complete step 1 & 2. If step 1 & 2 are not working you can `hardcode` the computer model in your action_

1. Wrap you App component using the `connect` function from react-redux to connect it the redux store.

   check in developerstool if dispatched

1. Add a `<button>` with the text `Add` to the app component. Attach an event listener to it which calls an event handler.


   console log to see if button works (eventhandler arrowfunction)


1. Define a new action type which has, as its payload, an object containing all the data for the current selected computer model stored in the `local state` of the App component.
1. The action should be `dispatched` from your component when the user clicks the `Add` button.



This is what it should look like from your Redux Dev Tools:

![action details](https://res.cloudinary.com/speltaculair/image/upload/c_scale,w_600/v1559033097/actions_xrpyro.png)

## Step 4 - Handling Redux actions

Now that we are dispatching an action to the store we need to handle it.

Look at [this section of the reader for an example](https://readest.codaisseur.com/courses/intermediate-bootcamp/09-intro-to-redux/02-redux/01-theory).

### Requirements

1. Your initial Redux state should be an empty array `[]`.
1. Implement the reducer so that it handles the action and adds the selected data to the state. The state will look like this after several items have been added

:
iets in inital state zetten om te zien wat er gebeurd tijdens het adden -> difference is de nieuwe versie en action returnd huidige en nieuwe model die zijn geadd. Alles wat in state is, is wat het returnd



![state after 3 additions](https://res.cloudinary.com/speltaculair/image/upload/c_scale,w_600/v1559033085/state_l7lxvk.png)

## Step 5 - Reading from the Redux state
