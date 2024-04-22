import Image from "next/image";
import React from "react";

interface EmptyProps {
  path: string;
  label: string;
}

export const Empty = ({ path, label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-80">
        <Image alt="Empty" fill src={path} />
      </div>
      <p className="text-muted-foreground text-sm text-center mt-4">
        {label}
      </p>
    </div>
  );
};
