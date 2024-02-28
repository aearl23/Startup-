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

- **HTML pages** - Two HTML page that represent the ability to login
- **Links** - The login page automatically links to the main page. The main page contains links for every project.
- **Text** - Each of the projects is represented by a textual description.
- **DB/Login** - Input box and submit button for login. 

## CSS deliverable

For this deliverable, I will style the application into its final appearance.

- **Header, footer, and main content body**
- **Navigation elements** 
- **Responsive to window resizing** - Mobile and Desktop
- **Application elements** - Used good contrast and whitespace
- **Application text content** - fonts


## JavaScript deliverable

JavaScript enables the application to work for a single user.

- **login** - login button it takes you to the main page.
- **database** - Displayed the listed projects 
- **application logic** - The highlight and ranking projects based on frequency of views

  
## Service deliverable

- **Node.js/Express HTTP service** 
- **Static middleware for frontend** 
- **Backend service endpoints** 
- **Frontend calls service endpoints** 

## DB/Login deliverable

- **MongoDB Atlas database created**
- **Stores data in MongoDB** 
- **User registration** - Creates a new account in the database.
- **existing user** - Stores the projects under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their work
- **Restricts functionality** - You cannot vote until you have logged in

## WebSocket deliverable

For this deliverable, I used webSocket to update the projects in real-time

- **Backend listens for WebSocket connection**
- **Frontend makes WebSocket connection** 
- **Data sent over WebSocket connection** 
- **WebSocket data displayed** - All user listings display in realtime

## React deliverable

- **Bundled and transpiled** 
- **Components** - Login, project list, upload are all components.
- **Router** - Routing between login and upload components.
- 


### Updates and commits 

**2/5**

Today I completed the following deliverables:

- I created an HTML page for each page of my application including some CSS styling, and a custom logo. I also learned small details such as how to center an image
- I created the placeholders for the Database which will collect usernames and passwords. I am still unsure how to fully link the database to my website
- I created the placeholder for the WebSocket. In my home page, I envision the WebSocket allowing messaging within the application of user comments and I added
  the initial framework of the communication. I am still unsure of how to complete it.

**2/13**

- For the CSS styling deliverable, I added features like an image, flexbox, responsiveness, and headers and footers to my web application 
- I made all the pages have the same layout, used styling from bootstrap as well as features such as a collapsable menu and accordion boxes
- Startup CSS Deliverables: 
- Properly styled CSS header, footer, and main content body (shown in the dropdown menu across all pages)
- Properly styled CSS navigation elements (Shown in the dropdown menu and header)
- Responsive to window resizing (Shown using bootstrap and flexbox applications)
- Properly styled CSS application elements (Consistent fonts, colors, backgrounds, and layouts)
- Properly styled CSS application text content (Consistent fonts and colors)
- Properly styled CSS application images (Shown displaying "logo" in the header)

