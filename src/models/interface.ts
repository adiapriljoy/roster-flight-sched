export interface FlightScheduleItem {
  rosterId: string;
  tailNumber: string;
  startTime: string;
  endTime: string;
  origin: string;
  destination: string;
  since: string;
  till: string;
  flightStatus: string;
  flightType: string;
  crew?: [] | {};
}

export interface Aircraft {
  af_TailNumber: string;
  af_AircraftType: string;
  af_Capacity: number;
}

export interface Flight {
  af_fcm_FlightId: string;
  af_FlightNumber: string;
  af_Aerodrome_Origin: string;
  af_Aerodrome_Destination: string;
  af_FlightType: string;
  af_TimeUTCDeparture: string;
  af_TimeUTCArrival: string;
  af_TotalFlightHours: number;
  af_FlightStatus: string;
}

export interface RosterCrew {
  af_Crew: string;
  af_CrewName: string;
  af_CrewType: string;
  af_Rank: string;
  af_TimeInActual: string;
  af_TimeOffActual: string;
}

export interface RosterPairing {
  af_fcm_RosterPairingId: string;
  af_Crew: RosterCrew[];
}

export interface RosterData {
  af_fcm_RosterId: string;
  af_Flight: Flight;
  af_Aircraft: Aircraft;
  af_TotalFlightHours: number;
  af_Origin: string;
  af_Destination: string;
  af_FlightType: string;
  af_ChocksOutProjected: string;
  af_ChocksInProjected: string;
  af_RosterPairing: RosterPairing;
}