export type TComment = {
  id: string;
  username: string;
  content: string;
  replies?: TComment[];
};
