# log parser 

## Overview
 log parser is a basic log parsing and alerting system designed to process log files from security systems like SIEM (Security Information and Event Management) or other tools. It scans log files for specific patterns, such as error messages or suspicious activities, and generates alerts when such patterns are detected.<br>

 In this project, I have implemented both the frontend and backend components to achieve a seamless log parser and alart system. The frontend provides a user-friendly interface with a button to generate a __logger.log__ file. Upon clicking the button, the log file is automatically downloaded to the user's local machine.

Additionally, the interface allows users to upload the generated log file back into the system. Once the file is uploaded, the application processes it to identify and extract error logs, displaying them as the output. This streamlined process ensures efficient log generation, analysis, and error detection, making it a practical tool for log management.<br>

This project demonstrates my ability to handle both frontend and backend development. The frontend, built using __React, is deployed on Vercel__, while the backend, developed with __Java Spring Boot, is hosted on Render__. This setup highlights my skills in creating a full-stack application and managing deployment across different platforms.

[visit the page- frontend](https://log-parser-frontend.vercel.app/) <br>

### Features
 - Parses log files to detect predefined suspicious patterns.
 - Generates alerts when patterns like "failed login," "unauthorized access," or "malicious activity detected" are    found.
 - Outputs alerts with timestamps for quick review.
 - Easy-to-use system for analyzing security logs.

### Table of Contents
 1 Installation
 2 Input Format
 3 Output Example
 4 Future Enhancements

## 1 Installation

### Prerequisites
- Node.js installed

### Steps to Install
1. Clone the repository:
   ```bash
     https://github.com/ujwalbholan/logParserFrontend.git

2 . change directory: cd fileName

3 . install npm: npm Install

4 . run the file: npm run dev


## 2 input Format:
    2025-01-04 10:30:00 - User login successful
    2025-01-04 10:45:00 - Unauthorized access attempt detected
    2025-01-04 11:00:00 - Malicious activity detected in module X
    2025-01-04 11:15:00 - Failed login attempt by user admin 

## 3 outpur Example:
     ALERT: UNAUTHORIZED ACCESS DETECTED AT 2025-01-04 10:45:00
     ALERT: MALICIOUS ACTIVITY DETECTED AT 2025-01-04 11:00:00
     ALERT: FAILED LOGIN DETECTED AT 2025-01-04 11:15:00

## 4 Future Enhancements:
 - i can inhannce the frontend looks more appelinng.
 - its static i can make it more dynamic.
 - i can add the automation activities like when the alart is detected then it will send the mail to QA or send the message in the slack so all the developer are aware about the error.
 
