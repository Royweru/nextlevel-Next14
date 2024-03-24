import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
import { useCourseModal } from "@/hooks/useCourseModal";
import { ScrollArea } from "../ui/scroll-area";
import { UploadCloud, UploadCloudIcon } from "lucide-react";

export const CourseModal = () => {
  const { isOpen, onClose, data } = useCourseModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.title}</DialogTitle>
          <DialogDescription>{data.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className=" h-[350px]  w-full">
            <div className=" flex flex-col space-y-5">
            {data.chapters?.map((chapter) => (
            <div
              key={chapter.path}
              className=" w-full p-2 flex justify-between space-x-2  bg-transparent rounded-2xl"
            >
              <div className=" font-serif text-2xl  font-bold text-emerald-900 italic underline">
                {chapter.title}
              </div>
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                <a href={chapter.path} download={chapter.title}>
                <UploadCloudIcon className=" w-12 h-12" />
              </a>
                </TooltipTrigger>
                <TooltipContent>
                    Click to download file
                </TooltipContent>
              </Tooltip>
              </TooltipProvider>
              
            </div>
          ))}
            </div>
         
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
