# rentaplace

RentAPlace is an online store to rent the home for short and long-time
duration. There are 2 users on the application: -
1. User
2. Owner

## User Stories –
1. As a user I can login, Logout and Register into the application.
2. As a user I can search property as per the different search criteria’s as: -
   a. Check-in and check-out date 
   b. Place to visit
   c. Type of property like (flat, apartment, villas)
   d. Features like pool, pool facing, beach, beach facing, garden, garden facing and many more
5. As a user I can see the properties in list or card view.
6. As a user can reserve the property.
7. As a user can send message on the application to the owner

## Owner Stories –
1. As an Owner I can login, Logout and Register into the application.
2. As an Owner I can add properties on the platform. Properties can be more than one.
3. As an owner I can delete and get the properties.
4. As an owner I can see the messages of the users.
5. As an owner I can reply to those the messages
6. As an owner I get mail as soon as the user reserves a property.
7. As an owner I can either confirm the reserved status or cancel it.

## Instructions to run the project:

1. Please connect your server with your database, in my case I have used derby server and dbeaver DBMS, and change the database configuration inside application.properties file as per your availaible DBMS and server(edit server config in pom.xml).

2. Run the both spring boot micrservices(rentahome and chat) and this will create tables in your DB(using JPA). Once tables are created for raw data to observe in UI please run the SQL commands provided in data.sql file.

3. Please add node modules inside the angular project folder and install bootstrap and ngfilter, for that follow below commands
   3.1 In Angular app please install Ngfilter and bootstrap(don't forget to import in style.css) by running following commands:<br>
          npm install bootstrap --save <br>
          npm install --save ng2-search-filter

4. Now run the angular project(on port 4200) and in browser you can view the project on localhost:4200
