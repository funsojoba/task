# tasky

Welcome to your task manager app!

How to get started:
- clone the repo: `git clone https://github.com/yourusername/tasky.git`

for backend:
    - cd tasky/backend
    - make sure you have docker installed on your machine
    - run `cp .env.example .env` and configure the .env file
    - run `make build` to build the docker image
    - run `make up` to start the backend server
    - the app should be running on `http://localhost:8000`
    - you can visit the API docs at `http://localhost:8000/docs`

for frontend:
    - cd tasky/frontend
    // install dependencies
    - run `npm install`
    // start dev server
    - run `npm run dev`
