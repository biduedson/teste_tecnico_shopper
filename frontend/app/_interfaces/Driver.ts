export interface IDriver {
  id: number;
  name: string;
  description: string;
  vehicle: string;
  reviews: {
    rating: number;
    comment: string;
  };
  value: number;
}
