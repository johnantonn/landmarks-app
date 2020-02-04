export class Landmark {
  objectId: string;
  title: string;
  short_info: string;
  description: string;
  url: string;
  photo: string;
  photo_thumb: string;
  geo: {
    latitude: Number,
    longitude: Number,
  };
}
