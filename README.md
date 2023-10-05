# tasky

Welcome to your task manager app!

![homepage](https://github.com/funsojoba/task/assets/42432746/4e0e93dd-db13-4866-860b-13253b8b4df2)

## How to get started:
* clone the repo: `git clone https://github.com/funsojoba/task.git`

### For backend:
* cd task/backend
* make sure you have docker installed on your machine
* run `cp .env.example .env` and configure the .env file
* run `make build` to build the docker image
* run `make up` to start the backend server
* the app should be running on `http://localhost:8000/`
* you can visit the API docs at [here](https://documenter.getpostman.com/view/26204419/2s9YJey1k3)
* for development purpose, my db credentials are default postgres credentials on Docker
    ```
        POSTGRES_DB=postgres
        POSTGRES_USER=postgres
        POSTGRES_PASSWORD=postgres
    ```
* You can use these values to generate value for the `SQLALCHEMY_DATABASE_URI` in your `.env`
* You can access the content of your database through adminer, visit `http://localhost:8080/`, set the `System` option to `PostgreSQL`, and input the credentials provided above
___
### For frontend:
* cd task/frontend
* install dependencies | run `npm install`
* start dev server | run `npm run dev`
* frontend code should run here `http://localhost:5173/`



## Technologies
* Python (Flask, Flask Restful)
* Docker (Containerization)
* Postgres (Database)
* React (Redux toolkit, react router, styled component)


Happy hacking 👍 Tschüss!!
