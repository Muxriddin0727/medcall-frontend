export interface BlogsInput {
    art_subject: string;
    art_content: string;
    art_image: string;
    bo_id: string;
  }

  export interface Blog {
    _id: string;
    blog_subject: string;
    blog_content: string;
    blog_status: string;
    blog_description: string;
    blog_likes: number;
    blog_views: number;
    blog_comment: string;
    mb_id: string;
    mb_name: string;
    mb_last_name: string;
    mb_follow_cnt: number;
    createdAt: Date;
    updatedAt: Date;
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
