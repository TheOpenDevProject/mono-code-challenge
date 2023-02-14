import { useState } from "react";
import RatingZoneContext from "./RatingZoneContext";

export interface RatingZoneProvider {
  children: React.ReactNode;
}

const RatingZoneProvider = ({ children }: RatingZoneProvider) => {
  const [rating, setRating] = useState(0);
  return <RatingZoneContext.Provider value={{ rating, setRating }}>{children}</RatingZoneContext.Provider>;
};

export default RatingZoneProvider;
