# Lab 36-37

## Project: Beginning of the process in creating an e-Commerce storefront using React with Redux, coupled with your live API server

### Author: Tricia Sawyer

### Problem Domain

- Lab 36 features

Today, we begin the first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
As a user, I want to choose a category and see a list of all available products matching that category.
As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

- Lab 37 features

In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

As a user, I want to choose from products in the list and add them to my shopping cart.
As a user, I want to see the products that I’ve added to my shopping cart in a growing list on the side of the page”.
As a user, I want to change the quantity of items I intend to purchase in the header. i.e. CART (1)
As a user, I want to be able to remove an item from my shopping cart.
Application Flow:

User sees a list of categories.
Chooses a category and sees a list of products.
Clicks the “Add to Cart” button on any product.
Sees a list of all products in the "< SimpleCart />" side menu.
Clicks the delete button on an item and sees the item removed (see stretch goals for this lab).
Changes the cart total in the header. If two different products are in the cart you should see: CART (2).

- Lab 38

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock.
As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it.

- Lab 39

In phase 4, we will be completing work on our Virtual Store by adding two full page views to the application: Product Details and Checkout.

The user stories from Phases 1, 2 and 3 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered.

### Links and Resources

[Code sandbox](https://6k3j56-5173.csb.app/)

[Vite](https://vitejs.dev/guide/)

[Git issues solution](https://www.youtube.com/watch?v=yo2bMGnIKE8)

[Randomized images](https://awik.io/generate-random-images-unsplash-without-using-api/)

[Testing with vite](https://zaferayan.medium.com/how-to-setup-jest-and-react-testing-library-in-vite-project-2600f2d04bdd)

[Redux toolkit](https://redux-toolkit.js.org/api/configureStore)

[API products](https://api-js401.herokuapp.com/api/v1/products)

[API categories](https://api-js401.herokuapp.com/api/v1/categories)

### Collaborators

- Ryan Gallaway in code review
- Stephen Clemmer heped me in lab 36 with fixing the categories button display
- Code review for lab 37 and 38 and chat gpt to help write tests
- Daniel Frey helped with reviewing code and helping me see some missing things that caused bugs

### UML

![UML](./assets/lab36-UML.png)

### Set up

Run

- `npm create vite@latest`

Follow the steps given

- `npm run dev`

- `npm i redux react-redux @redux-devtools/extension`

- `npm i @reduxjs/toolkit`
