# DI Frontend Exercise

## Getting Started

First, ensure you have installed `bun`. This repo also contains a `justfile` for easy automation with `just`.

- [Bun](https://bun.sh/)
- [Just](https://just.systems/)

Second, install the dependencies and run the development server:

```fish
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Challenge

This repository provides a blank slate on which to solve the following problem statement.

### Tech

The application should be written using React with TypeScript. Please ensure you have a React development environment (e.g. VSCode, Bun, etc.).

The form request should conform to REST or GraphQl, but the server/API need not exist for the exercise.

### User Story

> **As a** user,<br> **I want** immediate feedback when a field is invalid,<br> **So that** I can correct my entry and proceed with valid data

### Acceptance Criteria

> **Given** a registration form exists with the following fields: First Name; Last Name; Email Address; Password; Confirm Password,<br> **When** I enter data that conforms to the rules below,<br> **Then** the form is submitted and a request is made with the form data.<br> **When** I enter data that does not conform to the rules below,<br> **Then** the form is prevented from submitting and the appropriate error message appears at each field to advise the user.<br>

### Validation rules

- None of the form fields should be empty.
- First Name should be at least 3 characters long.
- Last Name should be at least 3 characters long.
- Email should follow a regex text to be verified.
- Password and Confirm Password should match.
- All fields should be required.
