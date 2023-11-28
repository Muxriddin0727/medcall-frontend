import { FindDoctors } from "./user";

export interface BlogsInput {
    art_subject: string;
    art_content: string;
    art_image: string;
    bo_id: string;
  }

  export interface MeLiked {
    mb_id: string;
    like_ref_id: string;
    my_favorite: boolean;
  }

  export interface Blog {
    member_data: FindDoctors;
    _id: string;
    blog_title: string;
    blog_content: string;
    blog_status: string;
    blog_description: string;
    blog_likes: string[];
    blog_views: string[];
    blog_comment: string;
    doctor_mb_id: string;
    mb_name: string;
    mb_last_name: string;
    mb_follow_cnt: number;
    createdAt: Date;
    updatedAt: Date;
    me_liked: MeLiked[];
  }

  export type BlogCardType = {
    title: string;
    id: number;
    content: string;
    short_description: string;
    created_by: string;
    views: number;
    reaction_length: number;
  };
