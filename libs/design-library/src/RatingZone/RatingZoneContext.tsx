import { createContext } from "react";

export interface IRatingZoneContext {
  rating?: number;
  setRating: (rating: number) => void;
}

const RatingZoneContext: React.Context<IRatingZoneContext | undefined> = createContext<IRatingZoneContext | undefined>(undefined);

export default RatingZoneContext;
