# Travora 2.0 🌍

A comprehensive tourism platform for Sri Lanka featuring a modern client application and an administrative dashboard for managing travel content.

![Travora Demo](docs/readme-image.gif)

## 🏗️ Project Structure

This monorepo contains two main applications:

- **`admin/`** - Next.js 15 admin dashboard with authentication and content management
- **`client_01/`** - React client application with tourism content and booking features
- **`docs/`** - API documentation and response examples

## ✨ Features

### Client Application (`client_01/`)

- 🏖️ **Attractions Showcase** - Browse Sri Lankan tourist destinations with detailed information
- 🗺️ **Tour Plans** - Multi-day tour packages with pricing and itineraries
- 🚗 **Vehicle Rentals** - Car and van rental services with specifications
- 📸 **Photo Gallery** - Beautiful gallery of tourist locations
- 📱 **Responsive Design** - Mobile-first design with modern UI components
- 🔍 **Route Management** - Clean routing with React Router

### Admin Dashboard (`admin/`)

- 🔐 **Authentication System** - JWT-based login with role management
- 📊 **Dashboard Interface** - Clean admin interface for content management
- 👥 **User Management** - User creation, authentication, and role-based access
- 🛡️ **Protected Routes** - Middleware-based route protection
- 🎨 **Theme Support** - Dark/light mode toggle
- 📝 **Content Forms** - Form handling with validation using React Hook Form + Zod

## 🚀 Tech Stack

### Frontend

- **React 18/19** - Component library
- **Next.js 15** - Full-stack framework (admin)
- **Vite** - Build tool (client)
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI component library
- **React Router** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Server state management

### Backend & Database

- **PostgreSQL** - Primary database
- **Node.js** - Runtime environment
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/travora-2.0.git
   cd travora-2.0
   ```

2. **Install dependencies for both applications**

   ```bash
   # Install admin dependencies
   cd admin
   npm install

   # Install client dependencies
   cd ../client_01
   npm install
   ```

3. **Environment Setup**

   Create `.env.local` in the `admin/` directory:

   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/travora_db
   JWT_SECRET=your-super-secret-jwt-key
   ```

4. **Database Setup**
   ```bash
   cd admin
   npm run seed
   ```

## 🎯 Usage

### Development

**Start the admin dashboard:**

```bash
cd admin
npm run dev
```

Admin dashboard will be available at `http://localhost:3000`

**Start the client application:**

```bash
cd client_01
npm run dev
```

Client application will be available at `http://localhost:5173`

### Production

**Build and start admin:**

```bash
cd admin
npm run build
npm start
```

**Build and preview client:**

```bash
cd client_01
npm run build
npm run preview
```

## 🗂️ Project Architecture

### Admin Application Structure

```
admin/
├── app/                    # Next.js app directory
│   ├── (root)/            # Authentication pages
│   ├── dashboard/         # Protected dashboard pages
│   └── api/              # API routes
├── components/            # Reusable UI components
├── server/               # Backend logic
│   ├── db/              # Database connection
│   ├── models/          # Data models
│   ├── services/        # Business logic
│   └── utils/           # Helper utilities
└── middleware.ts         # Route protection
```

### Client Application Structure

```
client_01/
├── src/
│   ├── components/       # UI components
│   ├── pages/           # Route components
│   ├── hooks/           # Custom React hooks
│   └── lib/            # Utilities
└── public/             # Static assets
```

## 🔌 API Integration

The project includes comprehensive API documentation in `docs/Travora-API-Responce.md` covering:

- **Attractions API** - Tourist destinations with details and ratings
- **Tour Plans API** - Multi-day packages with pricing and itineraries
- **Gallery API** - Photo management for locations
- **Vehicle Rental API** - Car and van rental listings

## 🛡️ Security Features

- JWT-based authentication with secure token handling
- Password hashing using bcryptjs
- Protected API routes with middleware validation
- Role-based access control
- CSRF protection through Next.js middleware

## 🎨 UI/UX Features

- Modern, responsive design using Tailwind CSS
- Consistent component library with Shadcn/ui
- Dark/light theme support
- Mobile-first approach
- Smooth animations and transitions
- Accessible form handling with validation

## 📄 Available Scripts

### Admin (`admin/`)

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with initial data

### Client (`client_01/`)

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [API Documentation](docs/Travora-API-Responce.md)
- [Component Documentation](admin/components.json)

---

Built with ❤️ for Sri Lankan tourism industry
