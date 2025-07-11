first create .env file in your server

# ✅ Server Configuration
PORT=5000                         # Port on which your backend server runs

# ✅ MongoDB Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/dbname?retryWrites=true&w=majority

# ✅ JWT Secret Key (for authentication)
JWT_SECRET=your_super_secret_key    (you can write a/c to you); 

# ✅ Admin Credentials (for secure admin login)
ADMIN_EMAIL= admin@example.com                              (you can change a/c to you);                   
ADMIN_PASSWORD=your_admin_password                           (you can change a/c to you);
URL TO GO ADMIN PANEL  :- http://localhost:5173/admin 

# ✅ Mail Configuration (used for contact forms, notifications)
MAIL_USER=your_email@example.com        # e.g., a Gmail or SMTP email
MAIL_PASS=your_email_app_password       # App password (not your regular email password)
