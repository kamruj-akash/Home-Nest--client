src/
│
├── main.jsx
├── App.jsx
├── index.css                     # Tailwind base + custom global styles
│
├── assets/                       # Images, icons, and static assets
│   ├── logo.png
│   ├── banner/
│   │   ├── slide1.jpg
│   │   ├── slide2.jpg
│   │   └── slide3.jpg
│   └── properties/
│       └── default-house.jpg
│
├── components/                   # Shared UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PropertyCard.jsx
│   ├── LoadingSpinner.jsx
│   ├── ProtectedRoute.jsx
│   ├── ToastMessage.jsx
│   ├── RatingStars.jsx
│   ├── ConfirmModal.jsx
│   ├── SectionTitle.jsx
│   └── ThemeToggle.jsx
│
├── layouts/                      # Layout wrappers
│   ├── MainLayout.jsx            # Navbar + Outlet + Footer
│   └── AuthLayout.jsx            # For Login/Register pages
│
├── pages/                        # All route pages
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Banner.jsx
│   │   ├── FeaturedProperties.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Spotlight.jsx
│   │   └── HowItWorks.jsx
│   │
│   ├── AllProperties/
│   │   └── AllProperties.jsx
│   │
│   ├── PropertyDetails/
│   │   ├── PropertyDetails.jsx
│   │   ├── ReviewList.jsx
│   │   └── AddReview.jsx
│   │
│   ├── AddProperty/
│   │   └── AddProperty.jsx
│   │
│   ├── MyProperties/
│   │   ├── MyProperties.jsx
│   │   └── UpdateProperty.jsx
│   │
│   ├── MyRatings/
│   │   └── MyRatings.jsx
│   │
│   ├── Auth/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── GoogleLogin.jsx
│   │
│   ├── NotFound/
│   │   └── NotFound.jsx
│   │
│   └── Shared/
│       └── ErrorBoundary.jsx
│
├── routes/                       # React Router setup
│   └── Routes.jsx
│
├── context/                      # Global contexts (Firebase Auth, Theme)
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/                        # Custom reusable hooks
│   ├── useAuth.js
│   ├── useTheme.js
│   ├── useAxiosSecure.js
│   ├── useFetch.js
│   └── useToast.js
│
├── firebase/                     # Firebase setup files
│   └── firebase.config.js
│
├── utils/                        # Helper functions
    ├── formatDate.js
    ├── formatPrice.js
    ├── passwordValidator.js
    ├── scrollToTop.js
    └── constants.js