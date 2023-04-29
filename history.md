1. Deploying a Simple Web Application
2. Scaling the Web Application
- Created a basic web app and create respective Dockerfile for it
- Created a image for this app with `docker build . -t express-app`
- Created container for it using `docker run -p 3000:3000 -d express-app`
- Stop and removed the container with `docker stop <container-id>` and `docker rm <container-id>`
- Before publishing renamed the tag from 'express-app' to 'ravencolevol/express-app' with `docker tag express-app:latest ravencolevol/express-app:latest`
- Created a kubernetes folder and added a deployment + service yaml with 3 replicas
- Used `kubectl apply -f app.yaml` to create the deployment and service
- Used `minikube service express-app-service --url` to expose the url and access it

3. Updating the Web Application
- Updated the application to print host name as well
- Build image for it named `ravencolevol/express-app:1.1` and pushed it to docker hub
- Simply ran same thing `kubectl apply -f app.yaml` after updating the image to 1.1 tag and observed the rollout update in the kubernetes

4. Rolling Back the Web Application
- Easy rollback with `kubectl rollout undo deployments/app-deployment`