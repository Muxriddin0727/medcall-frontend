import { MeLiked } from "./blogs";

export interface FindDoctors {
    _id: string;
    mb_username: string;
    mb_name: string;
    mb_last_name: string;
    mb_email: string;
    mb_password: string;
    mb_type: string;
    mb_status: string;
    mb_price: string;
    mb_address?: string;
    mb_description?: string;
    mb_image: string;
    mb_profession: string;
    mb_degree: string;
    mb_experience: string;
    mb_point: number;
    mb_top: string;
    mb_views: string[];
    mb_likes: string[];
    mb_comments: string[];
    mb_follow_cnt: number;
    mb_subscriber_cnt: number;
    me_liked: MeLiked[];
    createdAt?: Date;
  }

  export interface Member {
    _id: string;
    mb_name: string;
    mb_email: string;
    mb_username: string;
    mb_password: string;
    mb_type: string;
    mb_status: string;
    mb_address?: string;
    mb_description?: string;
    mb_image?: string;
    mb_point?: number;
    mb_top?: string;
    mb_views: number;
    mb_likes: number;
    mb_follow_cnt: number;
    mb_subscriber_cnt: number;
    createdAt: Date;
    me_liked: MeLiked[];
    
  }

 