"use client";
import Comment from "@/components/Comment";

const data = [
  {
    id: "comment-1",
    username: "khalil benachir",
    content: "Can't wait to see it when it's finished!",
    replies: [
      {
        id: "replie-1-1",
        content: "Can't wait to see it when it's finished!",
      },
      {
        id: "replie-1-2",
        content: "Can't wait to see it when it's finished!",
      },
    ],
  },
  {
    id: "comment-2",
    username: "amine benachir",
    content: "Can't wait to see it when it's finished!",
    replies: [
      {
        id: "replie-2-1",
        content: "Can't wait to see it when it's finished!",
      },
      {
        id: "replie-2-2",
        content: "Can't wait to see it when it's finished!",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen gap-8 flex-col items-center justify-center">
      {data.map((comment) => {
        return (
          <>
            <Comment
              key={comment?.id}
              username={comment.username}
              comment={{
                content: comment.content,
              }}
            >
              {!!comment.replies.length &&
                comment.replies.map((replie) => (
                  <Comment
                    key={replie?.id}
                    username={comment.username}
                    comment={{
                      content: replie.content,
                    }}
                  />
                ))}
            </Comment>
          </>
        );
      })}
    </main>
  );
}
