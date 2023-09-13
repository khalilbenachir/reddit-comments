import Comments from "@/components/CommentList";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { TComment } from "@/types/comment";
import { BiPlus } from "react-icons/bi";

const data: TComment[] = [
  {
    id: "comment-1",
    username: "khalil benachir",
    content: "Can't wait to see it when it's finished!",
    replies: [
      {
        id: "replie-1-1",
        username: "amine benachir",
        content: "Can't wait to see it when it's finished!",
        replies: [
          {
            id: "replie-1-1-1",
            username: "toto",
            content: "comment number 1 1 1",
          },
        ],
      },
      {
        id: "replie-1-2",
        username: "amine benachir",
        content: "Can't wait to see it when it's finished!",
      },
    ],
  },
];

export default async function Home() {
  return (
    <main className="flex min-h-auto gap-2 flex-col items-center justify-center">
      <section className="flex justify-between items-center w-full p-6">
        <Heading title="Posts (0)" description="manage your posts." />
        <Button>
          <BiPlus />
          Ad new
        </Button>
      </section>
      <Separator />
      <section className="p-6">
        <Comments data={data} />
      </section>
    </main>
  );
}
