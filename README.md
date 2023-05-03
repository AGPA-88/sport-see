SportSee
========

SportSee is a React frontend project developed as part of a developer course. It contains several components, CSS files, API files, and KPI files that help users track their fitness progress.

Getting Started
---------------
### Running the Backend

The SportSee frontend relies on a backend API to retrieve data. To run the backend, follow these steps:

1\.  Clone the backend repository to your local machine:

    bashCopy code

    `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git`

2\.  Change to the project directory:

    arduinoCopy code

    `cd P9-front-end-dashboard`

3\.  Install the required dependencies:

    Copy code

    `npm install`

4\.  Start the backend server:

    arduinoCopy code

    `npm run start`

    The server should now be running on port 3000.

5\.  Configure the frontend to use the backend API:

    Open the `src/api/config.js` file and replace the `baseURL` value with `http://localhost:3000/`.

    phpCopy code

    `const axiosInstance = axios.create({

      baseURL: 'http://localhost:3000/', // <-- Replace this value

      timeout: 10000,

    });`

    Save the file.

6\.  Restart the frontend:

    Run `npm start` in the frontend project directory to restart the frontend.

    bashCopy code

    `cd sport-see

    npm start`

    The app should now be running with data from the backend API.

### Prerequisites

To run SportSee on your machine, you need to have the following software installed:

-   Node.js (version 12 or higher)
-   npm (version 6 or higher)

### Installation

1.  Clone the repository to your local machine:

    bashCopy code

    `git clone https://github.com/AGPA-88/sport-see.git`

2.  Change to the project directory:

    bashCopy code

    `cd sport-see`

3.  Install the required dependencies:

    Copy code

    `npm install`

### Running the App

To start the app, run the following command in the project directory:

sqlCopy code

`npm start`

The app should now be running at [http://localhost:3000](http://localhost:3000/). Open your web browser and go to that URL to see the app in action.

Usage
-----

SportSee allows users to track their fitness progress through various KPIs (Key Performance Indicators). To use the app, follow these steps:

1.  Log in with your username and password.
2.  View your fitness dashboard, which shows your progress across various KPIs.
3.  Select a KPI to view more detailed information about your progress.

Contributing
------------

If you want to contribute to this project, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Make your changes and test them thoroughly.
4.  Commit your changes with clear and concise commit messages.
5.  Push your changes to your fork.
6.  Create a pull request for your changes.

License
-------

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/LICENSE) file for details.