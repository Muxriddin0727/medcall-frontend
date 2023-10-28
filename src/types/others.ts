export interface Feedbacks {
  msg: string;
  mb_id: string;
  mb_nick: string;
}

export type MainCardType = {
  _id: string;
  discount?: boolean;
  main_image?: string;
  title?: string;
  price?: number;
  sold_times?: number;
  created_at?: Date;
  created_by?: string;
  count?: number;
  discount_price?: number;
  category?: string;
  short_description?: string;
  detailed_images?: string[];
  description?: string;
  comments?: [];
  rate?: number;
};

export interface IntroItemType {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  src: string;
}
