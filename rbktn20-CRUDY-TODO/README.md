# CRUDY-TODO
## Instructions

Read this entire document before starting your work. Complete the work in order.

## Goal

Create a CRUD app using React that interfaces with a RESTful API powered by Node (with Express) and a database (MySQL) from scratch.

Don't use anything that writes code for you (like `create-react-app`).

Stick to using only the official documentation and StackOverflow. Limit your use of video and blog post tutorials. Whenever you find a solution on StackOverflow, always find where in the official documentation you can find the same answer.

### Permitted technlogies

1. For server: Node.js with [Express](https://www.npmjs.com/package/express) and [nodemon](https://www.npmjs.com/package/nodemon)
1. For frontend: [React](https://www.npmjs.com/package/react) with JSX
1. For AJAX requests: [jQuery](https://www.npmjs.com/package/jquery), [axios](https://www.npmjs.com/package/axios),or fetch
1. For database: MySQL (with [mysql](https://www.npmjs.com/package/mysql))

## Bare Minimum Requirements

### Backend Requirements

Create a RESTful API for a resource named `todos` that responds to the following endpoints:

| intention           | request type | request url | request body                              | side effect                    | response body                                                                    |
| ------------------- | :----------: | ----------- | ----------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| read all todos data   |     GET      | `/api/todos` | none                                      | none                           | `[{id: 0, description: 'wake up',status:'unchecked'}, {id: 1, description: 'brush teeth',status:'unchecked'}]` |
| create new todo data |     POST     | `/api/todos` | `{description: 'exercise'}` | creates new record in database | `{id: 3, description: 'exercise',status:'unchecked'}`                                        |

Your web server should 100% be interfacing with a database for this phase. Confirm this functionality is working properly with Postman (recommended),Thunder or via the `curl` command in your terminal.

### Frontend Requirements

Build the `Create` and `Read` functionality of a CRUD app using React. The frontend should make use of the already created, in the previous section, RESTful API endpoints to accomplish the following user stories:

1. When the user loads the page, the user should see a list of all the created todos and if there is none you should see a start button that will allow him to create a new todo (the todo list should be numbered) you can add a home button to show the list.

1. When the user types the description of a the new todo they want to input into the database and presses the `[Submit]` button, the newly created todo's information should be displayed in the list from the previous step **only after the data has been successfully written to the database**.

1. The todo should have a check button 
1. The check button should update the status of the todo to 'checked' and based on that it will display the status of that todo (green check mark for finished / nothing for pending) 
1. when you click again it shoud set it back to 'unchecked' and remove the green check mark

## More Practice

Add the backend functionality that allows users to update existing records and delete existing records. The response from the RESTful API should be that of the updated (or deleted) record.

Confirm this functionality is working properly with Postman (recommended) or via the `curl` command in your terminal.

Next, add the frontend functionality that allows users to edit existing records and delete existing records (via your RESTful API).
