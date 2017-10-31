# SITS Single Page Applications
This project aims to enhance the current SITS Tasking offering to aid in the creation of simple single page applications.
I chose the react framework as unlike other client side frameworks such as Angular, it only concerns itself with rendering the application state.
The motivations for this project were to create a highly re-usable component based framework to enable the rapid application of SITS solutions whilst providing consistency, testability and a modern user experience.

## What do i need?
- A SITS environment (preferably not production)
- An e:Vision environment
- A license for SITS tasking (SV202)
- A solid grasp of SITS tasking and SRL development

## What would be beneficial?
- Knowledge of latest javascript development techniques (es6/node)
- Knowledge of the React/Redux frameworks
- Perseverance

## How Does it work?

This solution utilises the React and Redux libraries to render a single page client side application to the end user. The client interacts with the SITS application via multiple hidden inputs and buttons which have been created utilising standard SITS components (TTE, TTQ, TEC, TCR).

## Retrieving State

Create a SIW_YGSL link on the page to an SRL which contains a json object of your state. Mark this with the data attribute [data-get-state] - the redux shared actions will now be able to automatically retrieve the new state (which will be verified when you perform asynchronous updates on data).

## Performing Asynchronous Updates

Create a button ttq (and the necessary TEC, TCR records) to update fields à la standard tasking. Mark this in some way using data attributes (in the example value action this is [data-value-button]). When you are ready to fire the ajax call, call the function triggerAsync() and pass in this identifier: triggerAsync('[data-value-button]')
