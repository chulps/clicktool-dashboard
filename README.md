# clicktool-dashboard
test project for clicktool
Open README file in editor to see notes.

TL;DR
https://clicktool2.herokuapp.com/dashboard


<!-- About this app -->

In this app I'm using some boilerplate code that enables hot reloading in dev mode and scripts to allow easy deployment to heroku. 

The Navigation was created using React-Router-Dom. I created an SVG file from a Clicktool logo PNG file that I found on the internet. The SVG is code only and is super lightweight, scalable, easy to animate, and reusable as a react component anywhere at any size without pixelation. The Timeline and Section 1 are pretty static. I used pseudo elements to make the divisions and Bootstrap for the spacing. Section 2 & 3 feature a responsive placeholder for the QR codes that ALWAYS maintains a 1:1 ratio. I didn't get to the Circular element but this countdown widget is set to reach 00:00 on my birthday, Nov 12. The exchange section is my favorite. The Participation section I missed the mark a little but only because of time restraints on my part. The core functionality is there though. The transactions table is responsive, text truncates on smaller screens and is fed data from a mapped JSON file in lieu of a proper backend. The whole site is designed to be responsive. With another day to spend on this I could have a more polished product.



<!-- To run this app locally enter these commands into your terminal  -->

<!-- 1 Clone the repository -->
git clone git@github.com:chulps/clicktool-test.git

<!-- 2 Navigate to the root directory of this app -->
cd clicktool-dashboard

<!-- 3 Install server dependencies -->
yarn setup

<!-- 4 Navigate into client folder -->
cd client

<!-- 5 Install client dependencies -->
yarn
yarn add react-router-dom
yarn add react-modal-video
yarn add webfontloader
yarn add react-rangeslider

<!-- 6 Navigate back to root folder -->
cd ../

<!-- 7 Create .gitignore file -->
touch .gitignore 
(this will write itself if you've followed the steps in order)

<!-- 8 delete and ignore some stuff -->
Delete all package-lock.json files
Make a duplicate of the .gitignore and paste it into the "/client" folder
There will be two or three more dependencies to install but its nothing crazy.


<!-- 10 Start the app!!! -->
yarn dev


