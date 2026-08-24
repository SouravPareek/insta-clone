# 📸 Pixly (Full Stack)

A full-stack Instagram-like social media application built using modern web technologies.
This project focuses on core social features like authentication, post creation, and feed interaction.

🔗 **Live Demo:** https://insta-clone-9n3w.onrender.com
> Note: hosted on Render's free tier, so the backend spins down after inactivity — the first request may take 30–50s to wake up.

---

## 🚀 Current Features

* 🔐 User Authentication (Register & Login)
* 📝 Create Posts (with image upload)
* 📰 Feed System (view all posts)
* ❤️ Like / Unlike posts
* 🖼 Image upload using ImageKit
* 🍪 Authentication using JWT & cookies

---

## 🛠 Tech Stack

### Frontend

* React.js
* SCSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

### Other Tools

* ImageKit (image storage & delivery)
* JWT (authentication)
* Render (deployment)

---

## 📂 Project Structure

```
insta-clone/
├── Backend/
│   ├── dist/          # frontend build (served by backend)
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middlewares/
│   │   └── app.js
│   └── server.js
│
├── Frontend/
│   ├── src/
│   └── ...
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/insta-clone.git
cd insta-clone
```

---

### 2. Setup Backend

```
cd Backend
npm install
npm run dev
```

Create a `.env` file inside `Backend/`:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```

---

### 3. Setup Frontend

```
cd Frontend
npm install
npm run dev
```

---

### 4. Build Frontend (for production)

```
npm run build
```

Copy the generated `dist` folder into `Backend/`.

---

## ⚠️ Project Status

🚧 This project is **currently under development**

### ✅ Completed Features:

* Authentication (Register / Login)
* Feed system
* Create Post
* Like / Unlike posts

### 🔜 Upcoming Features:

* Follow / Unfollow users
* User Profile page
* Edit profile
* Comments system
* Notifications
* Explore page

---

## 🧠 Learning Highlights

* Implemented secure authentication using JWT & cookies
* Integrated third-party service (ImageKit) for media handling
* Built REST APIs using Express and MongoDB
* Deployed a full-stack application on Render
* Managed environment variables for production

---

## 🌐 Deployment

This project is deployed on Render:

👉 https://insta-clone-9n3w.onrender.com/feed

---

## 📌 Notes

* Initial load may be slow due to Render free tier (cold start)
* Project is actively being improved with additional features

---

## 👨‍💻 Author

**Sourav Pareek**
