# IPDR Frontend

This is the frontend for the IPDR Web Portal, designed to provide a user-friendly interface for monitoring NAT logs. The application is built using React.js and communicates with the IPDR backend service.

## Features
- User authentication (SSO support: OAuth 2.0, LDAP, SAML)
- Dashboard with log search and filtering capabilities
- Multi-tenancy support
- Secure access for law enforcement agencies

## Prerequisites
Make sure you have the following installed:
- Node.js (>= 16.x recommended)
- npm (>= 8.x recommended)
- Git

## Installation
Follow these steps to set up the IPDR frontend:

### 1. Clone the Repository
```bash
cd /var/www
git clone https://github.com/imrankhan-coder/ipdr-frontend.git
cd ipdr-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root and configure it as needed:
```
REACT_APP_BACKEND_URL=http://your-backend-ip:port
```

### 4. Start the Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

### 6. Deploying with Nginx
Set up Nginx to serve the frontend:
1. Copy the build files to your web server directory:
   ```bash
   cp -r build /var/www/html/ipdr-frontend
   ```
2. Configure Nginx:
   ```
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html/ipdr-frontend;
       index index.html;
       location / {
           try_files $uri /index.html;
       }
   }
   ```
3. Restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

## Contributing
If you want to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under Z COM Networks Private Limited.

