# souvik-dataset-app-MERN-
Its a MERN stack app where you can add datasets of various data and then can get the data by searching by the dataset number or category number.

If you want to start the app yourself on your localmachine, you have to first do npm install inside both the root and the client folder. Then create a  .env file inside the root folder, make a .gitignore file and write node_modules inside it. Inside the .env file write your mongo atlas uri link. write it after you state ATLAS_URI, it should be like this ATLAS_URI=<<your mongo uri>>.

You can see the live app here
https://souvik-dataset-app.herokuapp.com/

When you open the app, there's a form on the first page. It is here where you can add datasets. Currently there are three datasets already uploaded, you can make new dataset or add you data to an existing dataset.

Click on add dataset number, type any number you want. Then click below on add category number and type any nymber you want.
Click on choose file and upload image and click on add data to add the data to the database.

You can also click the 'search by dataset' button, then a modal/panel would pop up and there you can type the number of the dataset you want and click on Search button to see the pictures in the box, you can scroll down inside the box to see the rest of the pictures.

You can also click the 'search by category' button and then the same thing occurs, a modal pops up and there you can type the category number search for all the data under that category.

More tweaks and functionality would be added in future as i keep on learning more.
