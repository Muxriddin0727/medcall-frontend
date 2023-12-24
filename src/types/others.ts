export interface Feedbacks {
  msg: string;
  mb_id: string;
  mb_nick: string;
}


export interface Comment {
  _id: string;
  mb_name: string;
  comment_content: string;
  mb_image: string;
  posted_at: Date;
  mb_type: string;
}

export interface File {
  uid: string;
  name: string;
  status: string;
  url: string;
}


export interface Appointment {
  _id: string;
  date: string;
  slots: {
    _id: number;
    ref_id: string;
    start: string;
    end: string;
    slot_time: string;
    patientName: string;
    doctorName: string;
    doctorLastname: string;
    doctorImg: string;
  }[];
  doctor_id: string;
  created_at: string;
  appointment_data?: Appointment[]; // add this line
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
  new_message: {
    mb_id: string;
    mb_name: string;
    mb_image: string;
    msg: string;
  }
}

export interface ChatGreetMsg {
  text: string;
}

export interface ChatInfoMsg {
  total: number;
}

export interface StickerPickerProps {
  onStickerClick: (sticker: string) => void;
}

