# 🚀 Autosuggest Search Bar (Full Stack Project)

This is a **Full Stack Autosuggest Search Bar Application** built to demonstrate my skills in **React (frontend)**, **.NET 6 Web API (backend)**, and **SQL Server (database)**.  

The application provides real-time search suggestions as the user types, fetching data from a database using a clean and scalable API.  

---

## ✨ Features

- 🔎 **Live Autosuggestions** as you type into the search bar.  
- 🎯 **Search Term Highlighting** in suggestions.  
- ⌨️ **Keyboard Navigation Support** (Arrow ↑/↓ to navigate, Enter to select).  
- 🖱️ **Mouse Selection Support** for suggestions.  
- ⚡ **Optimized Backend API** built with .NET 6 and Entity Framework Core.  
- 🗄️ **SQL Server Database Integration** for dynamic suggestions.  
- 🧑‍💻 **Clean Code & Branching Strategy** followed using GitHub.  

---

## 🛠️ Tech Stack

**Frontend (Client)**  
- React 18  
- Vite (Bundler)  
- JavaScript (ES6+)  
- CSS3 (Basic styling)  

**Backend (Server)**  
- .NET 6 Web API  
- C#  
- Entity Framework Core  
- Swagger (API testing)  

**Database**  
- SQL Server (MSSQL)  
- Suggestions Table:  
  - `Id` (int, primary key, identity)  
  - `Text` (nvarchar)  

**Tools**  
- Git & GitHub (Version Control)  
- Visual Studio 2022 (Backend)  
- Visual Studio Code (Frontend)  
- SQL Server Management Studio (Database)  

---

## 📂 Project Structure

```
autosuggest-project/
│
├── client/                # React Frontend
│   ├── src/
│   │   ├── components/    # SearchBar & SuggestionsList
│   │   └── App.jsx
│   └── package.json
│
├── server/                # .NET Backend
│   ├── Controllers/       # SuggestionsController.cs
│   ├── Data/              # DbContext & Seed Data
│   ├── Models/            # Suggestion.cs
│   └── Program.cs
│
└── README.md              # Project Documentation
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd autosuggest-project
```

### 2️⃣ Setup the Backend (Server)
```bash
cd server
dotnet restore
dotnet ef database update   # Apply migrations & seed database
dotnet run                  # Start backend (default: https://localhost:5261)
```

### 3️⃣ Setup the Frontend (Client)
```bash
cd client
npm install
npm run dev                # Start frontend (default: http://localhost:5173)
```

---

## 📸 Screenshots

> *(Add screenshots here after running the project — e.g., search bar UI, suggestions list, database view from SSMS.)*  

---

## 🚀 Future Enhancements

- Add **debounce** to reduce unnecessary API calls.  
- Implement **authentication** for secured APIs.  
- Add **pagination** or limit results for performance.  
- Deploy on **Azure / AWS** for live demo.  

---

## 🏆 About This Project

This project was developed as part of a **Full Stack Developer role application**.  
It demonstrates my ability to work on both **frontend and backend**, integrate with databases, and follow industry best practices.  

---

## 👨‍💻 Author

**Prasad Deshpande**  
- 🌐 [LinkedIn](https://linkedin.com/in/your-profile)  
- 📧 your.email@example.com  
- 📂 [GitHub](https://github.com/your-username)  

