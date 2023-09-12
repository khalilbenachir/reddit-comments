"use client";

import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TAvatar = {
  src?: string;
  className?: string;
};

const CustomAvatar: FC<TAvatar> = ({ src, className }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt="profile image" />
      <AvatarFallback className="bg-red-400">KB</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
