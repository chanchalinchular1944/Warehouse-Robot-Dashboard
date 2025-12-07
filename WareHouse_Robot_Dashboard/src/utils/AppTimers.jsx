import { useEffect, useRef } from "react";
import useStore from "../store/useStore";
import { fetchBots } from "../api/mockApi";

// Top-level timer manager. Mount this once in App.
export default function AppTimers() {
  const bots = useStore(state => state.bots);
  const updateBots = useStore(state => state.updateBots);
  const popTask = useStore(state => state.popTask);
  const botsRef = useRef(bots);

  // keep a ref to the latest bots to avoid re-registering interval often
  useEffect(() => {
    botsRef.current = bots;
  }, [bots]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const updated = await fetchBots(botsRef.current);
        updateBots(updated);
      } catch (e) {
        console.error("Failed to fetch bots:", e);
      }
    }, 10000); // every 10 sec

    return () => clearInterval(interval);
  }, [updateBots]);

  useEffect(() => {
    const q = setInterval(() => {
      popTask();
    }, 3000); // every 3 sec

    return () => clearInterval(q);
  }, [popTask]);

  return null;
}
