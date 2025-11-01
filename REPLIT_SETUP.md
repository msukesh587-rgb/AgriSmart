# AgriSmart - Replit Setup Guide

This document explains how AgriSmart has been configured to run on Replit.

## What Was Done

### 1. Port Configuration
AgriSmart is an Expo/React Native application that normally runs on multiple ports. For Replit, we needed to configure it to run on port 5000.

**Solution**: Created a custom proxy server (`server.js`) that:
- Listens on port 5000 (Replit's webview port)
- Forwards all requests to Expo's Metro bundler on port 8081
- Handles WebSocket connections for hot module reloading

### 2. Dependencies
All npm dependencies were installed successfully:
- Expo 54.0.21
- React Native 0.81.5 with react-native-web
- Firebase for authentication
- Redux Toolkit for state management
- And many more...

### 3. Environment Variables
Firebase credentials were configured to use environment variables with fallback defaults:

**Required (optional - defaults are provided)**:
- `GEMINI_API_KEY` - For AI features (currently not used in code)
- `EXPO_PUBLIC_FIREBASE_*` - 7 Firebase configuration variables

See `.env.example` for the complete list.

### 4. Workflow
Configured the `expo-web` workflow to run `npm run web`, which executes `node server.js`.

## How It Works

```
User's Browser (Replit Webview)
         ↓
    Port 5000 (Proxy Server - server.js)
         ↓
    Port 8081 (Expo Metro Bundler)
         ↓
    React Native App (rendered as web)
```

## Running the Project

The project starts automatically via the workflow. To manually restart:
1. Use the "Run" button in Replit, or
2. Execute `npm run web` in the shell

## Development

### Making Changes
1. Edit files in the `src/` directory
2. Changes will auto-reload in the browser
3. The Metro bundler will rebundle the app

### File Structure
- `src/screens/` - App screens
- `src/components/` - Reusable components
- `src/navigation/` - Navigation setup
- `src/store/` - Redux state management
- `src/services/` - API services
- `src/i18n/` - Internationalization (English & Tamil)
- `server.js` - Custom proxy server for Replit

## Known Limitations

1. **Mobile-First Design**: The app was designed for mobile devices. Some layouts may not be optimal on desktop browsers.

2. **Backend Required**: Many features require a Flask backend that provides:
   - Crop recommendations
   - Disease/pest detection
   - Market prices
   - Weather data
   
   Update `src/config/api.ts` to point to your backend.

3. **Firebase Authentication**: Phone authentication requires a properly configured Firebase project. Update environment variables or the defaults in `src/config/firebase.ts`.

4. **Voice Features**: Voice assistant features may have limited functionality on web compared to mobile.

## Deployment

The deployment is configured as "autoscale" which is suitable for stateless web applications. When you're ready to deploy:
1. Click the "Publish" button in Replit
2. Follow the deployment wizard

## Troubleshooting

### App Not Loading
1. Check that the workflow is running (look for green status)
2. Wait for Metro bundler to complete (initial bundle takes 30-60 seconds)
3. Check browser console for errors

### Port Issues
The proxy server handles all port routing. If there are issues:
1. Restart the workflow
2. Check `server.js` for any errors in the logs

### Environment Variables
If Firebase features aren't working, check that environment variables are set correctly or update the defaults in `src/config/firebase.ts`.

## Next Steps

1. **Connect Backend**: Set up or connect to a Flask backend API
2. **Configure Firebase**: Set up Firebase project for authentication
3. **Add Features**: Extend the app based on your needs
4. **Test Features**: Try the different screens (Crop, Market, Community, etc.)

## Support

For Replit-specific issues, check the Replit documentation.
For app-specific questions, refer to the original README.md.
