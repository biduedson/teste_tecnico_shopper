export interface IRouteDetails {
  distance: {
    text: string; // Ex: "51.0 km"
    value: number; // Ex: 51049 (em metros)
  };
  duration: {
    text: string; // Ex: "1 hour 8 mins"
    value: number; // Ex: 4088 (em segundos)
  };
  end_address: string; // Ex: "R. Augusta, 330 - Consolação, São Paulo - SP, 04302-050, Brazil"
  end_location: {
    lat: number; // Ex: -23.5510038
    lng: number; // Ex: -46.6493169
  };
  start_address: string; // Ex: "R. Bahia, 200 - Parque Cento e Vinte, Francisco Morato - SP, 07941-060, Brazil"
  start_location: {
    lat: number; // Ex: -23.2698542
    lng: number; // Ex: -46.7439545
  };
}
