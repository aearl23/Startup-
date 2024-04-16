# Startup-
Startup Repository CS260


# TechConnect

This app serves to connect entrepreneurs to ideas and projects in a university setting. The app will serve as a community where IP, disclosures, and patents can be shared and connected to entrepreneurs and funding sources 

## Specification Deliverable


### Elevator pitch

Have you ever had a great business idea you wished you could bring to life? Have you ever sat for hours thinking of a way to start a business or a new product to develop? TechConnect can bring determined students together with available technology to further innovation and produce revenue for the university, faculty, and students.

### Design

![UI draft](https://github.com/aearl23/Startup-/assets/64229908/f6962ee9-30ec-4764-82c6-4bee29dbecc8)

Here is an example of a simple UI of the login page 

![UI main page](https://github.com/aearl23/Startup-/assets/64229908/dc1ba53b-03b2-462d-a051-b1b2f96db19a)

Here is a diagram of how users will connect 

![UI Diagram](https://github.com/aearl23/Startup-/assets/64229908/c52f6448-0d7d-4958-a9a1-513d8d6f8d7e)



### Key features

- Secure login over HTTPS
- Ability to select and upload projects and ideas
- Display of projects 
- Ability to select, and comment on uploads
- Contributions from all users displayed in real-time


### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Two HTML pages. One for login and one for the main content page. Hyperlinks to selection
- **CSS** - Application styling for screen sizes, whitespace, color choice, and contrast.
- **JavaScript** - Provides login, choice display, applying uploads, display other users uploads
- **Service** - Back end for: 
  - login
  - submitting projects
- **DB/Login** - Store users, and projects in database. Register and login users. Credentials securely stored in database. 
- **WebSocket** - As each user contributes, their work is broadcast to all other users.
- **React** - Application ported to use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML pages that represent the ability to login, view the home page, view the product page, and about page 
- **Links** - The login page automatically links to the main page. The main page contains links for every project.
- **Text** - Each of the projects is represented by a textual description.
- **DB/Login** - Input box and submit button for login.


## CSS deliverable

For this deliverable, I will style the application into its final appearance.

- **Header, footer, and main content body** - Used flexbox and bootstrap to add page layout features 
- **Navigation elements** - Properly styled CSS header, footer, and main content body (shown in the dropdown menu across all pages)
- **Responsive to window resizing** - Mobile and Desktop Responsive to window resizing (Shown using bootstrap and flexbox applications)
- **Application elements** - Properly styled CSS application text content (Consistent fonts and colors)
- **Application text content** - Properly styled CSS application images (Shown displaying "logo" in the header)

## JavaScript deliverable

JavaScript enables the application to work for a single user.

- **login** - JS for future login:  Added login.js to take users to home page 
- **database** - JS for database data: table on the home page displays data of votes ranked by technology name and vote count 
- **application logic** - JS for interaction logic: Shown in the voting.js file, users can vote on projects to interact with the page. Votes will be logged and updated in real time
  
## Service deliverable

- **Node.js/Express HTTP service** -  completed following the npm install instructions, runs on port 4000
- **Static middleware for frontend** - all files set to a public directory and middleware was used
- **Backend service endpoints** - endpoints for login, getuser, vote, etc. all in index.js 
- **Frontend calls service endpoints** - vote.js calls endpoints 


## DB/Login deliverable

- **MongoDB Atlas database created** - DONE
- **Stores data in MongoDB** - Username and password Data is stored in MongoDB
- **User registration** - Creates a new account in the database, stores in mongo, authenticates users 
- **existing user** - Stores the projects under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their data
- **Restricts functionality** - You cannot vote until you have logged in

## WebSocket deliverable

- **Backend listens for WebSocket connection** - peerProxy.js file listens for websocket on backend 
- **Frontend makes WebSocket connection** - home_functions.js file uses websocket to make connection 
- **Data sent over WebSocket connection** - Comment data sent over websocket 
- **WebSocket data displayed** - All user comments displayed in real time

## React deliverable

- **Bundled and transpiled** - Bundled and built with vite 
- **Components** - react components made for home, project page, about page 
- **Router** - react-router loads pages into DOM
- **Errors** - I had multiple errors with 502 errors for both my Simon and startup deployment. The code is complete and shows completion but the website still has a few bugs 
  
