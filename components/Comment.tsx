"use client";

import React from "react";
import { BiUpvote, BiDownvote, BiComment } from "react-icons/bi";

import CustomAvatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";

type TComment = {
  username: string;
  children?: React.ReactNode;
  comment: {
    content: string;
  };
};

const Comment: React.FC<TComment> = ({ username, comment, children }) => {
  return (
    <section
      className="
        flex 
        p-6 
        pt-0 
        pr-0 
        pl-8 
        gap-1.5 
        flex-col 
        relative 
        after:content-[''] 
        after:absolute 
        after:bg-muted-foreground/40 
        after:transition
        after:hover:bg-muted-foreground 
        after:hover:cursor-pointer 
        after:w-[2px] 
        after:h-full 
        after:top-0 
        after:left-0 
        after:z-9
    "
    >
      <CustomAvatar className="absolute z-10 shadow-white left-0 -translate-x-1/2 -translate-y-[25%] h-8 w-8" />
      <p className="font-semibold text-sm">{username}</p>
      <p className="font-normal text-sm">{comment.content}</p>
      <div className="flex gap-1.5 items-center">
        <Button size="icon" variant="ghost">
          <BiUpvote className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <BiDownvote className="h-5 w-5" />
        </Button>

        <Button variant="ghost">
          <BiComment className="h-5 w-5 mr-2" />
          reply
        </Button>
      </div>
      {children}
    </section>
  );
};

export default Comment;
