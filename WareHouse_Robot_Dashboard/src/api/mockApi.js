// mockApi.js - simple bot generator & simulator
export const generateInitialBots = () => {
  const statuses = ['idle', 'busy', 'charging', 'error'];
  return Array.from({ length: 10 }).map((_, i) => ({
    id: `bot-${String(i + 1).padStart(2, "0")}`,
    battery: Math.floor(40 + Math.random() * 60),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    currentTask: Math.random() > 0.6 ? `Task-${Math.ceil(Math.random() * 20)}` : null,
    speed: Number((Math.random() * 2).toFixed(2)),
    lastUpdated: new Date().toISOString(),
    coords: { x: Math.random() * 800, y: Math.random() * 400 }
  }));
};

const statuses = ['idle', 'busy', 'charging', 'error'];

export const randomUpdate = (bot: { battery: number; coords: { x: number; y: number; }; currentTask: any; }) => {
  const batteryDrain = Math.floor(Math.random() * 6); // 0-5%
  let newBattery = bot.battery - batteryDrain;
  if (newBattery < 0) newBattery = 0;
  // small chance to become error
  const newStatus = Math.random() < 0.02 ? 'error' : statuses[Math.floor(Math.random() * statuses.length)];
  const dx = (Math.random() - 0.5) * 40;
  const dy = (Math.random() - 0.5) * 40;
  return {
    ...bot,
    battery: Math.max(0, newBattery),
    status: newStatus,
    speed: Number((Math.random() * 2).toFixed(2)),
    lastUpdated: new Date().toISOString(),
    coords: {
      x: Math.max(0, Math.min(1200, bot.coords.x + dx)),
      y: Math.max(0, Math.min(800, bot.coords.y + dy))
    },
    // sometimes change task
    currentTask: Math.random() > 0.5 ? bot.currentTask : (Math.random() > 0.6 ? `Task-${Math.ceil(Math.random() * 100)}` : null)
  };
};

// simulate endpoint: accepts current array and returns updated after a small delay
export const fetchBots = (bots: any[]) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bots.map(b => randomUpdate(b)));
    }, 300);
  });
};
