export interface Feedbacks {
  msg: string;
  mb_id: string;
  mb_nick: string;
}

export interface Appointment {
  _id:string;
  slot_id: string;
  mem_id: string;
  ref_id: string;
  date: string;
  
  slots: [];
  doctor_id: string;
  created_at: string;
};

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

export interface MemberLiken {
  like_group: string;
  like_status: number;
  like_ref_id: string;
}


export interface CartItem {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

export interface SearchObj {
  page: number;
  limit: number;
  order: string;
}

export interface ChatMessage {
  msg: string;
  mb_id: string;
  mb_nick: string;
  mb_image: string;
}

export interface ChatGreetMsg {
  text: string;
}

export interface ChatInfoMsg {
  total: number;
}

