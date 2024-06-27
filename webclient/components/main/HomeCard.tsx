/* eslint-disable @next/next/no-img-element */
import { BookmarkIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const HomeCard = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:scale-[1.02] focus-within:scale-[1.02] focus-within:shadow-md">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View article</span>
      </Link>
      <div className="relative">
        <img
          src="/placeholder.svg"
          alt="Article thumbnail"
          width={600}
          height={400}
          className="h-48 w-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 rounded-full"
        >
          <BookmarkIcon className="h-5 w-5" />
          <span className="sr-only">Bookmark</span>
        </Button>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <div
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              Math.random() < 0.5
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {Math.random() < 0.5 ? "Free" : "Paid"}
          </div>
          <div className="text-xs text-muted-foreground">
            {new Date().toLocaleDateString()}
          </div>
        </div>
        <h3 className="mb-2 text-lg font-semibold">
          Introducing the Latest Trends in Web Development
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <EyeIcon className="h-4 w-4" />
          <span>1.2K views</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
