# 🔐 AI Summarizer & Password Generator Chrome Extension

## 📌 Overview

This Chrome Extension integrates two practical tools into one:

1. **Password Generator** – Creates strong, customizable passwords with a one-click copy feature.
2. **AI Website Summarizer** – Uses Google Gemini AI to analyze the currently open website and provide a summary along with a safety recommendation.

---

## 🚀 Features

### ✅ Password Generator

* Adjustable length (4–32 characters)
* Optional inclusion of numbers
* Optional inclusion of symbols
* Copy-to-clipboard with instant confirmation message

### ✅ AI Website Summarizer

* Automatically gets the URL of the active Chrome tab
* Sends the URL to a local backend via **Express.js**
* Uses **Google Gemini AI** to generate:

  * Website summary
  * "OK to visit" or "Avoid" recommendation

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js + Express.js
* **AI API:** Google Gemini (`@google/genai`)
* **Extension Type:** Chrome Extension (Manifest V3)
* **HTTP Client:** Axios

---

## 📂 File Structure

```
project/
├── frontend/             # React + Vite extension UI
│   ├── src/App.jsx       # Main React component
│   ├── index.html        # Popup HTML
│   ├── manifest.json     # Extension configuration
│
├── backend/              # Express server
│   ├── index.js          # Handles AI API requests
│
└── package.json
```

---

## 🔑 Manifest.json

```json
{
  "name": "passge",
  "version": "1.0.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "index.html"
  },
  "permissions": [
    "activeTab",
    "tabs"
  ]
}
```

---

## ⚙️ Backend API

**Endpoint:** `POST /backend`
**Description:** Sends the current tab's URL to Google Gemini AI for analysis, returns a summary and safety rating.

---

## 📸 Screenshots

### Password Generated with AI Feedback

<img src="Screenshot 2025-08-12 233218.png" alt="Password with feedback" width="600" />

### Password Generated without Feedback

<img src="Screenshot 2025-08-12 233008.png" alt="Password without feedback" width="600" />

### AI Summary for Website

<img src="Sandbox:/mnt/data/Screenshot%202025-08-12%20233218.png" alt="Website Summary" width="600" />

---

## 🏃 How to Run

### 1️⃣ Start Backend

```bash
cd backend
npm install
node index.js
```

### 2️⃣ Build Frontend (React Popup)

```bash
cd frontend
npm install
npm run build
```

### 3️⃣ Load Extension into Chrome

* Open `chrome://extensions/`
* Enable **Developer mode**
* Click **Load unpacked**
* Select the `dist` folder from the frontend build

---

## 🔮 Future Enhancements

* Dark mode for popup UI
* Password strength meter
* Local storage for past summaries
* Integration with HaveIBeenPwned API to check password leaks

---
