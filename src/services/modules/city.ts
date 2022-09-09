import TripRequest from "../request";

export function getCitys(): any {
  return TripRequest.get({
    url: "/city/all",
  });
}
