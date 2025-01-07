# Portfolio Backend

Welcome to the backend of my interactive portfolio! This project serves as the server-side component, providing APIs and handling data for my portfolio application. You can view the frontend live at [https://www.anubilegdemberel.com](https://www.anubilegdemberel.com).

## Overview

This backend is built using Node.js and Express, integrating with OpenAI's API to provide intelligent responses based on my portfolio data. It is designed to be efficient, scalable, and secure, ensuring a seamless experience for users interacting with my portfolio.

## 🚀 Features

- **API Integration**: Connects with OpenAI to provide AI-driven responses about my skills and projects.
- **CORS Support**: Configured to allow requests from specified origins, enhancing security.
- **Error Handling**: Comprehensive error handling to ensure smooth operation and user experience.
- **Environment Configuration**: Utilizes environment variables for sensitive data management.

## 🛠 Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,openai,aws,firebase" alt="Tech Stack" />
</div>

### Core Technologies

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=nodejs" width="48" height="48" alt="Node.js" />
      <br>Node.js
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=express" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=openai" width="48" height="48" alt="OpenAI" />
      <br>OpenAI API
    </td>
  </tr>
</table>

### Cloud Services

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=aws" width="48" height="48" alt="AWS" />
      <br>AWS
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=firebase" width="48" height="48" alt="Firebase" />
      <br>Firebase
    </td>
  </tr>
</table>

## 🚀 Getting Started

To run this backend locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nukktae/portfolio-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5001](http://localhost:5001) in your browser to see the API running.

## 📄 API Endpoints

- **GET /**: Returns a message indicating the API is running.
- **POST /chat**: Sends a message to the AI assistant and receives a structured response.

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author

**Anu Bilegdemberel**
- Portfolio: [anubilegdemberel.com](https://anubilegdemberel.com)
- LinkedIn: [linkedin.com/in/anubilegdemberel](https://www.linkedin.com/in/anu-bilegdemberel-445366318/)

---

<p align="center">Made with ❤️ and lots of ☕</p> 