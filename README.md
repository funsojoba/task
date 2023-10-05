# tasky

Welcome to your task manager app!

![homepage](https://github.com/funsojoba/task/assets/42432746/4e0e93dd-db13-4866-860b-13253b8b4df2)

## How to get started:
* clone the repo: `git clone https://github.com/funsojoba/task.git`

### for backend:
* cd task/backend
* make sure you have docker installed on your machine
* run `cp .env.example .env` and configure the .env file
* run `make build` to build the docker image
* run `make up` to start the backend server
* the app should be running on `http://localhost:8000/`
* you can visit the API docs at [here](https://documenter.getpostman.com/view/26204419/2s9YJey1k3)

___
### for frontend:
* cd task/frontend
* install dependencies | run `npm install`
* start dev server | run `npm run dev`
* frontend code should run here `http://localhost:5173/`

* Happy hacking 👍 Tschüss!!
