# 🌿 Ayurveda Wellness Website

A beautiful, modern, and responsive React and Bootstrap frontend for an Ayurvedic wellness center. This website showcases Ayurvedic treatments, products, and services with stunning design, animations, and a comprehensive user experience.

## ✨ Features

### 🎨 Design & UI
- **Modern Design**: Clean, professional layout with Ayurvedic color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Bootstrap 5**: Built with the latest Bootstrap framework
- **Custom Styling**: Ayurvedic-themed colors and typography
- **Smooth Animations**: Hover effects, transitions, and scroll animations
- **Beautiful Images**: High-quality Ayurvedic imagery from Unsplash
- **Particle Effects**: Dynamic background animations

### 📱 Pages & Components
- **Home Page** (`/`): Hero section, services overview, testimonials, and call-to-action
- **Login Page** (`/login`): Beautiful dual-tab login for doctors and patients
- **Dashboard** (`/dashboard`): Comprehensive health metrics and recommendations
- **Doctor Login** (`/doctor-login`): Legacy doctor login page
- **Navigation**: Smart navbar with user state management
- **Footer**: Social links and contact information

### 🚀 Functionality
- **React Router**: Client-side routing between pages
- **Form Handling**: Contact forms with validation and submission
- **Interactive Elements**: Search, filtering, and booking functionality
- **Responsive Navigation**: Mobile-friendly navigation menu
- **Icon Integration**: React Icons for consistent iconography
- **State Management**: User authentication state handling
- **Animations**: Scroll-triggered animations and hover effects

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **Create React App** - Build tool

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ayurvedic-diet-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── SiteNavbar.js       # Navigation component with user state
│   ├── SiteFooter.js       # Footer component
│   ├── BeautifulHome.js    # Enhanced home page
│   ├── BeautifulLogin.js   # Beautiful login page
│   ├── DoctorLogin.js      # Legacy doctor login
│   └── Dashboard.js        # User dashboard
├── App.js                  # Main app component with routing
├── index.js                # App entry point
└── index.css               # Global styles and animations
```

## 🎨 Customization

### Colors
The website uses a custom Ayurvedic color scheme defined in CSS variables:
- Primary: `#8B4513` (Saddle Brown)
- Secondary: `#D2691E` (Chocolate)
- Accent: `#F4A460` (Sandy Brown)
- Gold: `#FFD700` (Gold)
- Sage: `#9CAF88` (Sage Green)

### Styling
- Custom CSS classes for Ayurvedic branding
- Bootstrap components with custom styling
- Responsive design breakpoints
- Hover effects and animations
- Enhanced form and component styles

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔐 Authentication

### Demo Credentials

**Doctor Login:**
- Email: `doctor@ayurveda.com`
- Password: `password123`

**Patient Login:**
- Email: `patient@ayurveda.com`
- Password: `password123`

### Features
- Dual-tab login system
- Form validation
- Loading states
- Success/error messages
- Automatic redirect to dashboard
- User state management in navigation

## 📊 Dashboard Features

### Health Metrics
- Dosha balance tracking
- Energy level monitoring
- Sleep quality assessment
- Digestion health tracking
- Visual progress bars

### Recommendations
- Personalized health tips
- Priority-based suggestions
- Completion tracking
- Category organization

### Appointments
- Upcoming session display
- Doctor information
- Date and time details
- Quick action buttons

## 🎭 Animations & Effects

### Scroll Animations
- Fade-in effects
- Slide-in animations
- Intersection Observer API
- Smooth transitions

### Interactive Elements
- Hover effects on cards
- Button animations
- Loading spinners
- Particle backgrounds

### Visual Enhancements
- Floating elements
- Gradient backgrounds
- Shadow effects
- Smooth transitions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect React settings
3. Deploy with default settings

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_SITE_NAME=Ayurveda Wellness
```

### Customization
- Update colors in `src/index.css` CSS variables
- Modify images and content in components
- Adjust animations and timing
- Customize form validation rules

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Ayurvedic wisdom and traditional practices
- Bootstrap team for the excellent framework
- React community for the amazing ecosystem
- Unsplash for beautiful imagery
- All contributors and supporters

## 📞 Support

For support and questions:
- Email: info@ayurvedawellness.com
- Phone: +1 (555) 123-4567
- Website: www.ayurvedawellness.com

## 🌟 What's Next?

Potential future enhancements:
- User registration system
- Real-time chat support
- Payment integration
- Appointment scheduling
- Health tracking mobile app
- Multi-language support
- Advanced analytics dashboard

---

**Made with ❤️ for holistic wellness**

*Experience the ancient wisdom of Ayurveda in a modern, beautiful interface.*
