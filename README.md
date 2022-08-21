# Electronic_School
Spring+React web application task for managing students.

## Project structure

* client - The client application built with React JS.
* server - The backend REST API on Java Spring.

## 1 Build and Run

1.1 The backend is a Spring Boot based application, make sure you have installed the following software:

* Apache Maven
* Apache Tomcat
* MySQL

1.2 Clone the source codes into your local system.

```
git clone https://github.com/Khan-Yuriy/Electronic_School
```

1.3 Enter the project folder.
1.4 Run the application by Spring boot maven plugin directly.

```
mvn spring-boot:run
```

1.5 Enter **frontend** folder.
1.6 Execute the following command to run the frontend UI.

```
npm install
npm run start
```

> NOTE: The web application will open automatically (if not, navigate to http://localhost:3000).

## 2 Functionality
2.1.1 The first page is login page, where you can authorize by following inputs:
**Username**: admin;
**Password**: admin;

2.1.2 Or you can sign up by clicking on **Register** button at the upper right corner.

### 2.2 After signing in or signing up, you will see table with students data. The following actions are available:

* Add new student
* Edit student
* Delete student
* Logout

2.3 The button **"Add new"** will open modal window in which you can fill the data of new student. 
2.3.1 You can close window by clicking outside the window.
2.3.2 Or to add more new students.

2.4 The button **"Edit"** will redirect to new page where the student data can be changed and will be redirected to the table of students.

2.5 The button **"Delete"** will open alert window in which you can choose to delete anyway.

2.6 The button **"Logout"** will redirect back to login page.
