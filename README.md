# project-4-full-stack-development
# Student Management system

A Full Stack Student Management System built using **Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, and Bootstrap**. This application allows users to perform CRUD (Create, Read, Update, Delete) operations on student records through a responsive web interface.

---

##  Project Description

The Student Management System is a web-based application that helps manage student records efficiently. Users can add new students, view all students, update student information, delete student records, and search for students. The frontend communicates with the backend through RESTful APIs, and all data is stored in MongoDB.

---

##  Features

- Add New Student
- View All Students
- Update Student Details
- Delete Student Records
- Search Students
- Responsive User Interface
- REST API Integration
- MongoDB Database
- Form Validation
- Error Handling

---

##  Technologies Used

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Fetch API)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Tools
- VS Code
- Postman
- Git & GitHub

---

##  Project Structure

```
Student-Management-System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── add.html
│   ├── edit.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
└── README.md
```

---

##  Database Schema

| Field | Type |
|-------|------|
| Name | String |
| Email | String |
| Phone | String |
| Course | String |
| Semester | Number |
| Age | Number |

---

##  API Endpoints

### Get All Students

```
GET /api/students
```

### Get Student By ID

```
GET /api/students/:id
```

### Add Student

```
POST /api/students
```

### Update Student

```
PUT /api/students/:id
```

### Delete Student

```
DELETE /api/students/:id
```

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/student-management-system.git
```

### Navigate to Backend

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/studentdb
```

### Start MongoDB

Make sure MongoDB Server is running on port **27017**.

### Run Backend Server

```bash
npm run dev
```

or

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

### Open Frontend

Open the `frontend/index.html` file in your browser, or use the VS Code **Live Server** extension.

---

##  Screens

- Home Page
- Add Student
- Edit Student
- Student List
- Delete Confirmation

---

##  CRUD Operations

- Create Student
- Read Students
- Update Student
- Delete Student

---

##  Learning Outcomes

- REST API Development
- Express.js Routing
- MongoDB Integration
- Mongoose Models
- CRUD Operations
- Frontend and Backend Integration
- Fetch API
- JSON Data Handling
- Form Validation
- Error Handling

---

##  Author

**Atika Khalid**

BS Software Engineering

---

##  License

This project is developed for educational purposes as a Full Stack Development course project.

---

##  Future Improvements

- User Authentication
- Login & Registration
- Admin Dashboard
- Pagination
- Student Photo Upload
- Attendance Management
- Result Management
- Export Data to PDF/Excel

---

##  Contributing

Contributions, suggestions, and improvements are welcome. Feel free to fork the repository and submit a pull request.

---

For any questions regarding this project, feel free to contact the project author through GitHub.
