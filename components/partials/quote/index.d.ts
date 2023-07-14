interface Comment {
    user_id: string;
    user_name: string;
    comment: string;
    _id: string;
  }
  
export interface IQuoeteList {
    _id: string;
    quote: string;
    lang: string;
    slug?: string;
    category_id: string;
    tags: string[];
    created_at: string;
    updated_at: string;
    comments: Comment[];
    author?: string;
  }
  
  export interface ITags {
    _id : string,
    name : string,
    counts : number
  }