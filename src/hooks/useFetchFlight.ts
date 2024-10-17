import { useState, useEffect } from "react";
import { RosterData } from "../models/interface";

export const useRosterData = () => {
  const [rosterInfo, setRosterInfo] = useState<RosterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  
  useEffect(() => {
    const fetchRosterData = async () => {
      try {
        const response = await fetch("/mockdata.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("response: ", data)
        setRosterInfo(data);
      } catch (err: any) {
        console.log(err)
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRosterData();
  }, []);

  return { rosterInfo, loading, error };
};
