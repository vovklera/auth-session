# - 🔐 Authentication & Session Management -

A backend system for user authentication and secure session management.

---

## 🔗 Links

API: [Deployed API](https://auth-session-nt5m.onrender.com/)

---

## 📖 API Reference

| Endpoint                         | Description            |
| :------------------------------- | :--------------------- |
| `POST /auth/register`            | User registration      |
| `POST /auth/login`               | User login             |
| `POST /auth/logout`              | User logout            |
| `POST /auth/refresh`             | Refresh user session   |
| `POST /auth/request-reset-email` | Request password reset |
| `POST /auth/reset-password`      | Reset user password    |

---

## 📌 Main functionality

- User registration and login with password hashing
- Session management with access and refresh tokens
- HTTP-only cookies for authentication
- Authentication middleware for session validation
- Password reset via email with JWT token
- Session invalidation after password reset
- Secure logout with session and cookie cleanup

---

## 💻 Technologies

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** bcrypt, JSON Web Tokens (JWT), HTTP-only cookies

**Validation:** Celebrate, Joi

**Tools:** ESLint, Prettier, Git, GitHub, Postman

**Deployment:** Render

---

## 🚀 Running the project

**— Requirements —**

Before starting, install:

- Node.js 20 or newer
- Git

### 1. Clone the repository

```
git clone https://github.com/vovklera/auth-session.git
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env` file based on the provided `.env.example` file and add the required values.

### 4. Run the development server

```
npm run dev
```

The server will be available at http://localhost:3000.
