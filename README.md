# Rabbit AI – Sales Insight Automator

### AI Cloud DevOps Assignment Implementation

## Project Overview

This project was developed as part of the **AI Cloud DevOps Engineer assignment** provided in the Rabbit AI case study.

The goal of the task was to build a **Quick-Response Tool** that allows a team member to upload a sales dataset and automatically generate a meaningful summary of the data.

The application follows a **modern cloud-based DevOps architecture**, combining frontend, backend APIs, containerization, and cloud deployment.

---

# Problem Statement

Sales teams often handle large CSV or Excel datasets containing quarterly sales information. Manually analyzing this data can be time-consuming.

The objective of this project was to build a system that:

1. Accepts a CSV sales dataset upload
2. Processes the data automatically
3. Generates a concise summary
4. Returns the insight instantly to the user

---

# System Architecture

The system follows a simple cloud architecture:

```
User
  │
  ▼
Frontend (Vercel)
  │
  ▼
Backend API (FastAPI - Render)
  │
  ▼
Data Processing (Python + Pandas)
  │
  ▼
Generated Sales Summary
```

---

# Technologies Used

## Frontend

* React
* Hosted on **Vercel**

Frontend URL:
https://rabbitt-r46bvvxc3-lakshaysingla03-7833s-projects.vercel.app

---

## Backend

* Python
* FastAPI
* Pandas
* Uvicorn

Backend URL:
https://rabbitt-ytij.onrender.com

Swagger API Documentation:
https://rabbitt-ytij.onrender.com/docs

---

## DevOps Tools

The following DevOps tools and practices were applied in this project:

* **GitHub** – Version control
* **Docker** – Containerization
* **docker-compose** – Service orchestration
* **Render** – Backend cloud deployment
* **Vercel** – Frontend hosting
* **Swagger/OpenAPI** – API documentation

---

# Project Structure

```
rabbitt
│
├── backend
│   ├── main.py
│   ├── requirements.txt
│   ├── runtime.txt
│   └── Dockerfile
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

# API Implementation

## Endpoint: `/upload`

This endpoint accepts a CSV file containing sales data and an email address.

### Request Parameters

| Parameter | Type   | Description   |
| --------- | ------ | ------------- |
| file      | CSV    | Sales dataset |
| email     | string | User email    |

---

### Processing Flow

1. CSV file is uploaded via API.
2. The backend reads the dataset using **Pandas**.
3. Total revenue and units sold are calculated.
4. A summary is generated and returned.

Example Response:

```
{
 "summary": "Total revenue: 4500, Total units sold: 45",
 "email": "test@gmail.com"
}
```

---

# Docker Containerization

The backend service was containerized using Docker.

Example command:

```
docker-compose up --build
```

This command builds and runs the full environment locally.

---

# Deployment Strategy

### Backend Deployment

The backend API was deployed using **Render cloud hosting**.

Render automatically pulls the GitHub repository and deploys the FastAPI service.

---

### Frontend Deployment

The frontend application was deployed using **Vercel**, which provides continuous deployment from GitHub.

---

# Security Considerations

The following security practices were considered:

* File upload validation
* API input validation
* Separation of frontend and backend services
* Cloud environment configuration

---

# Future Improvements

The following enhancements can further improve the system:

* Integration with **Gemini AI** for advanced sales insights
* Automatic **email delivery of generated reports**
* Authentication and rate limiting
* Dashboard visualization of sales data

---

# Conclusion

This project demonstrates a practical implementation of **Cloud DevOps architecture** by integrating backend APIs, frontend interfaces, containerization, and cloud deployment platforms.

It successfully fulfills the requirements of the Rabbit AI case study by providing a working system capable of processing sales datasets and generating instant insights.
