export class Story {
  rownum: number;
  id: number;
  product_id: number;
  name: string;
  author: string;
  city: string;
  url: string;
  picture: string;
  outline: string;
  publication_date: Date
  rating: number;
  reviews: number;
  views: number;
  favorites: number;  
}

export class StoriesResponse{
  topic: string;
  stories: Story[];
  success: boolean;
  message: string;
}

export class StoryResponse{
  topic: string;
  story: Story;
  success: boolean;
  message: string;
}