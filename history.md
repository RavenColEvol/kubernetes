1. Deploying a Simple Web Application
- Created a basic web app and create respective Dockerfile for it
- Created a image for this app with `docker build . -t express-app`
- Created container for it using `docker run -p 3000:3000 -d express-app`
- Stop and removed the container with `docker stop <container-id>` and `docker rm <container-id>`