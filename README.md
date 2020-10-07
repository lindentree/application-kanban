Description:

(This exercise will require the same skills needed by the position. While we hope you could finish it fully, the green part is Nice to have. The red part following each section is a description of the section’s purpose.)

Let’s build a toy kanban board to manage the hiring process, similar to trello, where each column is corresponding to one stage of the hiring process. For example:

[Applied] [Phone Screen] [On site] [Offered] [Accepted] [Rejected]

[A test of your javascript/frontend framework skills, see if you can handle relative complicated events like drag-n-drop]

We can add new cards to the Applied column. Each card represents one candidate with some basic information such as name, education, contact ... (you can decide what information to show, this is not important.) and a resume file as an attachment. We can also leave comments to a card. 

[A test of your REST/backend/database skills, and see if you can handle more difficult client/server messaging, such as file uploading.]

A card can be dragged and dropped into a different column, if we want to change its status, for example, from “Applied” to “Phone Screen”.

Implement user login to protect this system. 

Interviewers and HRs can rate a candidate’s performance using 5 stars. And an average score shall be displayed.

[A test to see how you maintain sessions, and how you handle sensitive data securely.]

Please use GitHub to track your progress and send back your project link.

[Git skills.]

Once finished, Please also create a docker container to run your system with a one liner.

Ideally we should have one build.sh script to create the docker container with your code built and ready to run. And another script run.sh to start the docker with a mapped port, so that opening http://localhost:<port>/ should navigate to the management system. ( Or a deployment on a cloud provider with https access. )

[Deployment / DevOps skills. Given we are open to the technologies you can use to finish this project, having a docker container / or a live deployment will help us verify your project submission quickly.]

Technology:

Frontend: 

Preferred: vue.js
Acceptable: react, svelte, angular

Backend:
Preferred: node.js (such as express.js) or spring boot
Acceptable: golang, any rust or c++ based backend, django

Database:
Preferred: mongodb, mysql
Acceptable: postgresql, sqlite

Reverse proxy (optional):
Haproxy or nginx 
