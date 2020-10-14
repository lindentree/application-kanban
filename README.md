# Toy Kanban Board - Hiring Process

## Context

This is a full-stack Trello app, with a MongoDB/Node.js(Express) back-end, and a Vue 3.0 front-end. Applicant cards can be created or modified via the API using Postman or curl.

Example: POST http://localhost:3000/applicants/ with a body of 

{
  "name": "Jenna",
  "contact": "5101234567",
  "status": "Applied"

}

This will create an applicant card in the column matching the applicant status. (You will have to refresh the app to see the new card)

The cards will update their status accordingly in the database as they move between columns. You can also modify the front-end code while the container is running, it will hot-reload.

Also, the applicant data should persist in your local MongoDB even if you shut down the container(you may have to modify the volume mount path in the docker compose).

## Setup

After you git clone this repository, you can simply run docker-compose build and then docker-compose up. The front-end will be available at http://localhost:8080/ and is connected to the running server/MongoDB instance. (The server is available at http://localhost:3000)

## To Do

[] - Add the ability to create cards in the UI

[] - Upload candidate resumes

[] - Edit other candidate info


