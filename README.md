# 🚀 Electron WebApp Generator

This tool lets you easily generate a **Windows `.exe` app** bundle from your **ReactJS web app** using **Electron**.

---

## 🧩 Prerequisites

- Node.js (v16 or higher)  
- npm (comes with Node)  
- A built React app (created with `create-react-app` or similar)

---

## ⚙️ Installation & Usage

Follow these steps carefully 👇

### 1️⃣ Clone this repository

```
git clone https://github.com/yourusername/electron-webapp-generator.git
cd electron-webapp-generator
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Build your React app

Inside your **React project folder**, run:

```
npm run build
```

This will create a `/build` folder.

---

### 4️⃣ Copy your build into this directory

Move the `build` folder into your `electron-webapp-generator` directory.

```
electron-webapp-generator/
├── build/
├── package.json
├── main.js
└── ...
```

![Preview](https://github.com/y4th4rthh/electron-webapp-generator/blob/main/Screenshot%202025-10-19%20113719.png)

---

### 5️⃣ Add your app icon

Place your app icon (`.ico` file) in this folder and **rename it to:**

```
iconapp.ico
```

This will be used as your Electron app’s icon.

---

### 6️⃣ Generate the `.exe` file

Run this command:

```
npm run dist
```

If everything goes well, you’ll see output similar to this:

```
Building your Electron app...
✔ App created successfully!
```

![Preview](https://github.com/y4th4rthh/electron-webapp-generator/blob/main/Screenshot%202025-10-19%20113847.png)

---

### 7️⃣ Find your new app!

Your `.exe` file will be available inside the `dist` folder:

```
dist/
└── YourAppName Setup.exe
```

🎉 **Congrats! You just created a desktop Electron app from your web app!**

---

## 🧰 Troubleshooting

If `npm run dist` fails:

- Double-check that your `build` folder exists and is complete.  
- Ensure the folder structure is correct.  
- Verify your icon file name is exactly `iconapp.ico`.  
- Try deleting the `dist` and `node_modules` folders, then reinstall:

```
rm -rf dist node_modules
npm install
npm run dist
```

---

MIT License © 2025 [Your Name]
