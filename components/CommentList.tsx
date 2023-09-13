"use client";
import Comment from "@/components/Comment";

type TComment = {
  id: string;
  username: string;
  content: string;
  replies?: TComment[];
};

export default function Comments({ data }: { data: TComment[] }) {
  return (
    <>
      {data.map((comment) => {
        return (
          <>
            <Comment
              key={comment?.id}
              id={comment.id}
              username={comment.username}
              content={comment.content}
              replies={comment.replies}
            />
          </>
        );
      })}
    </>
  );
}
