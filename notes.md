Class notes file for midterm and final use

1/12: Github setup Assignment
I learned the basics of Github including howto setup my repo from the startup project, how to commit changes, push, and pull into my dev envirnment. 


1/22: Server setup with EC2 
IP address: 44.211.198.60
Key found in CS260 file 


2/5

Today I completed the following deilverables:
1) I created a HTML page for each page of my applicataion including some CSS stlying, and a custom logo. I also learned small details sucha s how to center an image 
2) I created the place holders for the Database which will collect usernames and passwords. I am still unsure how to fully link the data base to my website 
3) I created the place holder for the websocket. In my home page, I envision the websocket allowing messaging within the application of user comments and I added the initail framework of the communication. I am still unsure on how to complete it.


2/7 CSS Flexbox 

The flex display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. In order to demonstrate the power of flex we will build an application that has a header, footer, and a main content area that is split into two sections, with controls on the left and content on the right.

Now we can use Flexbox to make it all come alive. We make the body element into a responsive flexbox by including the CSS display property with the value of flex. This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the flex-direction property with a value of column. We then add some simple other declarations to zero out the margin and fill the entire viewport with our application frame.

To get the division of space for the flexbox children correct we add the following flex properties to each of the children.

header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.

That completes our original design, but we also want to handle small screen sizes. To do this, we add some media queries that drop the header and footer if the viewport gets too short, and orient the main sections as rows if it gets too narrow.

To support the narrow screen (portrait mode), we include a media query that detects when we are in portrait orientation and sets the flex-direction of the main element to be column instead of row. This causes the children to be stacked on top of each other instead of side by side.

To handle making our header and footer disappear when the screen is to short to display them, we use a media query that triggers when our viewport height has a maximum value of 700 pixels. When that is true we change the display property for both the header and the footer to none so that they will be hidden. When that happens the main element becomes the only child and since it has a flex value of 1, it takes over everything.


4/5 React Deliverable

- Move backend code to a separate service directory with the public frontend code. 
- create vite service to bundle code, like live server
- make router and bring in main html
- replace anchor tags and other parts to navlinks / jsx components
- copy and pasting js and html files to jsx, porting all code to jsx for react and vite
- change functions to export components
- browser router controls everthing displayed on single page app

