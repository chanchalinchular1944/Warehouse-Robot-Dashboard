# Warehouse Robot Dashboard

## Overview
Frontend dashboard to monitor warehouse robots. Features:
- Authentication (client)
- Home Dashboard with key stats
- Bot status grid (10 bots)
- Task allocation form & task queue (auto pop every 3s)
- Analytics (charts)
- SVG Map rendering (bonus)


## Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173` 

## Folder structure
See `src/` for components, pages, store, api, utils.

## Notes
- Bots are simulated by `src/api/mockApi.js`
- Timers are in `src/utils/AppTimers.jsx`
- State is in `src/store/useStore.js`
