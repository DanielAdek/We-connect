# We-connect
[![Build Status](https://travis-ci.org/DanielAdek/We-connect.svg?branch=master)](https://travis-ci.org/DanielAdek/We-connect)

WEConnect brings business men and individuals together

This project motivates me a lot because its being my dream to connecting people together to make business world an easy world for all.

Weconnect web application is built on JavaScript programming language, an implementation of JS on the font-end and back-end was adequate.

How to use the application
    As a new user, navigate to the sign up page through the link provided at the top right conner of the home page.
    fill the form and sign up

    You can also register your business, click the join business provided at the top right conner of home page. A dashboard will be created for you to control your business status and view business statistics. You can delete your business from your dashboard. And update business from your dashboard and when you done with all task you can log out.

    You can view business catalog and patronize any business. You may also want to give review to any business you patronized. Only an authenticated user can patronize business, you're advised to sign up.

    You can search businesses via the search input field provided at the catalog, you can also search businesses arround you by specifying the location or search by category.

    You can also view more business profile. Click the view profile link provided at the bottom of any business you want to view it's profile.

    As an authenticated user, you can login into your account via the login form provided at the home page. Only an authenticated user can login otherwise sign up.

visit us at http://danieladek.github.io/We-connect/templates on your browser

Programming Stack

Weconnect is built in the following:
    Postgresql
    Express
    React
    Nodejs
The stack above is what i called PERN stack in which weconnect was built, there are some other third parties and modules added, like, bootsrap 4 and some npm packages for the back-end.

How To Build WEconnect app:
    <ul>
        <li><a href="https://nodejs.org/en/download/">Download Nodejs app on your local machine</a></li>
         <li><a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads">Download Postgresql app on your local machine</a></li>
    <li><a href="https://git-scm.com/downloads">Download git bash terminal on your local machine</a></li>
    <li><a href="https://www.getpostman.com/apps">Download postman app on your local machine so that you can test your routes</a></li>
    </ul>
After downloading the nodejs app, you will automatically have npm installed already. Npm, is node package manager.

Then clone or download this <a href="https://github.com/DanielAdek/We-connect.git">Repo</a> to your local machine. On your terminal, cd into the directory where you have the file downloaded to and then install the packages by typing
    npm install
this will install all dependencies and devdependencies for the project, then run this command in your terminal:
    npm start

Open the postman and test the following existing routes:
    <html>
        <head>
          <style>
         table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 60%;
        }
        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #dddddd;
        }
        </style>
    </head>
    <body>
      <table>
        <tr>
            <th>API</th>
            <th>HTTP verb</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>/api/v1/auth/signup</td>
            <td>POST</td>
            <td>Create new user</td>
        </tr>
        <tr>
            <td>/api/v1/auth/login</td>
            <td>POST</td>
            <td>Sign in user</td>
        </tr>
        <tr>
            <td>/api/v1/business</td>
            <td>POST</td>
            <td>Create new business</td>
        </tr>
        <tr>
            <td>/api/v1/business/:businessid</td>
            <td>PUT</td>
            <td>Update a business</td>
        </tr>
        <tr>
            <td>/api/v1/business/:businessid</td>
            <td>DELETE</td>
            <td>Remove a business</td>
        </tr>
        <tr>
            <td>/api/v1/business/:businessid</td>
            <td> GET</td>
            <td>Find one business</td>
        </tr>
        <tr>
            <td>/api/v1/businesses</td>
            <td>GET</td>
            <td>Find all business also find by location or category</td>
        </tr>
        <tr>
            <td>/api/v1/businesses/:businessid/reviews</td>
            <td>POST</td>
            <td>Create reviews</td>
        </tr>
        <tr>
            <td>/api/v1/businesses/:businessid/reviews</td>
            <td>GET</td>
            <td>Find reviews for a business</td>
        </tr>
        </table>
    </body>
</html>

