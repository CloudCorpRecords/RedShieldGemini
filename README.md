# Red Team AI Code Generator - Frontend

This repository contains the frontend for the Red Team AI Code Generator. The frontend allows users to input a target URL and select a type of vulnerability to analyze. The frontend communicates with the backend server to perform the analysis and display the results.

## Features

- Input form for target URL and vulnerability type
- Sends requests to the backend API
- Displays generated code, threat level, and detailed analysis

## Prerequisites

- Basic understanding of HTML, CSS, and JavaScript
- Backend server deployed and running (see backend repository for instructions)

## Setup

1. **Fork the repository:**

    Click on the "Fork" button at the top right corner of this repository's page to create a copy of this repository under your account.

2. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/red-team-ai-code-generator-frontend.git
    cd red-team-ai-code-generator-frontend
    ```

3. **Open the project:**

    Open the project in your preferred code editor.

4. **Update Backend URL:**

    Edit the `script.js` file to update the backend URL if necessary:

    ```javascript
    const backendUrl = 'https://your-backend-url.replit.app/generate';
    ```

5. **Run the frontend:**

    You can use a local server to run the frontend. For example, using Python's built-in HTTP server:

    ```bash
    python -m http.server
    ```

    Open your web browser and navigate to `http://localhost:8000` to view the application.

## Usage

1. **Enter the target URL:**

    Input the URL of the website you want to analyze.

2. **Select vulnerability type:**

    Choose the type of vulnerability you want to check for (e.g., SQL Injection, XSS, CSRF).

3. **Generate analysis:**

    Click the "Generate Code" button to send the request to the backend and display the results.

## Project Structure

- `index.html`: Main HTML file containing the structure of the web page.
- `style.css`: CSS file for styling the web page.
- `script.js`: JavaScript file containing the logic for handling form submission and displaying results.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Replit](https://replit.com/) for providing a platform to host the backend
- [Google Cloud](https://cloud.google.com/) for the Gemini API

## Contact

For questions or support, please open an issue in this repository or contact the project maintainer at your.email@example.com.
