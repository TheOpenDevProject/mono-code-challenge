import RatingZoneContext from "../RatingZoneContext";
import React from "react";

export function useRatingZoneContext() {
  const context = React.useContext(RatingZoneContext);
  if (context === undefined) {
    throw new Error("useRatingZoneContext must be used within a RatingZoneProvider");
  }
  return context;
}
