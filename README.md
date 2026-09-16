# DevStack

## Project Description

DevStack is a simple technology stack builder website.
Users can explore different technologies and add them to their own stack.

I built this project using React, TypeScript, and Tailwind CSS.

## Technologies Used

- React.js
- Tailwind CSS
- DaisyUI
- TypeScript
- React-Toastify
- JSON
- Vite

## 3 Main Features

1. Users can explore different technologies and add them to their stack.
2. Users can remove individual technologies or remove all technologies.
3. Users can see toast notifications when adding or removing technologies.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX means JavaScript XML.
It allows us to write HTML-like code inside JavaScript.
It makes React code easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent to a child component.
State is used to store and manage data inside a component.
Props cannot be changed by the child, but state can be updated.

### 3. What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to create and manage state.
I used it in the Technologies component to store the selected technologies.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is a React Hook used to handle side effects, such as fetching data.

In this project, I used the use hook with Suspense to load the JSON data.
So, I did not need to use useEffect for loading the data.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list.
It helps React update the list correctly when items change.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In my project, I show an empty stack message when no technology is selected.
When technologies are added, I show the selected technologies instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component through props.

The parent can also pass a function to the child.
The child calls that function to send information back to the parent.

In my project, I passed the onAdd function from Technologies to StackTechnologies and CardTach.