# AgriSmart - AI Farming Mobile App

## Overview
AgriSmart is a comprehensive mobile farming assistant built with React Native (Expo) and TypeScript. The app provides AI-powered features for crop recommendations, disease detection, market prices, and profit analysis. This project was imported from GitHub and configured to run on Replit.

## Current State
- **Status**: Development environment configured for Replit
- **Last Updated**: October 31, 2025
- **Environment**: Replit with Expo Web support

## Project Architecture

### Tech Stack
- **Framework**: React Native with Expo SDK 54
- **Language**: TypeScript
- **Web Support**: react-native-web (running on port 5000)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation v6
- **Authentication**: Firebase Auth (Phone Authentication)
- **Database**: Firebase Firestore
- **i18n**: i18next + react-i18next (English & Tamil support)

### Key Dependencies
- expo: ^54.0.21
- react: 19.1.0
- react-native: 0.81.5
- firebase: ^12.4.0
- @react-navigation/native: ^6.1.9
- @reduxjs/toolkit: ^2.0.1
- nativewind: ^2.0.11

### Project Structure
```
agrismart/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # Application screens
│   ├── navigation/       # Navigation configuration
│   ├── store/           # Redux store and slices
│   ├── services/        # API service layer
│   ├── config/          # Configuration files
│   ├── i18n/           # Internationalization
│   └── utils/          # Utility functions
├── assets/             # Images and static assets
├── App.tsx            # Root component
└── app.config.js      # Expo configuration
```

## Features
1. **AI-Powered**:
   - Crop recommendations based on soil/weather
   - Disease detection via image analysis
   - Pest detection and natural remedies
   - Profit & loss analysis

2. **Market & Data**:
   - Real-time crop prices with trend charts
   - Weather forecasts (7-day)
   - Farming calendar with reminders

3. **Multilingual**:
   - English and Tamil support
   - Voice assistant with TTS/STT

4. **Community**:
   - Forum for farmers to share tips
   - Social features (like, comment, share)

## Configuration

### Environment Variables
Required environment variables (see `.env.example`):
- `GEMINI_API_KEY`: Google Gemini API for AI features
- `EXPO_PUBLIC_FIREBASE_*`: Firebase configuration (7 variables)

### API Configuration
Backend API base URL configured in `src/config/api.ts`:
- Development: Points to local/development Flask backend
- Production: Configurable production URL

Expected backend endpoints:
- `/crop/recommend`
- `/disease/detect`
- `/pest/detect`
- `/market/prices`
- `/finance/analyze`
- `/voice/process`
- `/translate`
- `/weather`

## Replit Setup Notes

### Port Configuration
- **Frontend (Expo Web)**: Port 5000 (configured for Replit proxy)
- **Expo Metro Bundler**: Port 8081 (internal)
- **Proxy Server**: server.js forwards requests from port 5000 to port 8081
- **Host**: 0.0.0.0 on port 5000 (required for Replit web preview)

### Workflow
- Command: `npm run web` (executes `node server.js`)
- server.js starts a proxy on port 5000 and launches Expo web
- Expo runs Metro bundler on port 8081
- Auto-reload enabled for development

### Technical Implementation
The project uses a custom proxy server to route Replit's port 5000 to Expo's default port 8081:
1. server.js creates an http-proxy server on port 5000
2. Proxy forwards all requests to localhost:8081
3. Expo CLI starts with `--web` flag on port 8081
4. WebSocket connections are proxied for hot reload functionality

## Recent Changes
- **2025-10-31**: Initial Replit setup completed
  - Configured Expo web to run on port 5000 via custom proxy server
  - Created server.js proxy that forwards port 5000 to Expo's port 8081
  - Moved Firebase credentials to environment variables (with fallbacks)
  - Created .env.example template
  - Set up workflow for web development
  - Added replit.md documentation
  - App successfully running and accessible via webview
  - Configured deployment for autoscale

## Known Issues & Limitations
1. **Mobile-First Design**: App is designed for mobile, web version may have layout differences
2. **External Backend Required**: App requires a separate Flask backend for AI features
3. **Firebase Setup Required**: Phone authentication needs Firebase project configuration
4. **Voice Features**: Voice assistant may have limited functionality on web platform

## Development Workflow
1. Install dependencies: `npm install`
2. Configure environment variables (create `.env` from `.env.example`)
3. Start development server: `npm run web`
4. Access via Replit webview on port 5000

## User Preferences
- None documented yet

## Notes
- This is a GitHub import configured for Replit environment
- Original design is for mobile (iOS/Android) but runs on web via Expo
- Firebase credentials have default values for testing but should be overridden with environment variables for production
