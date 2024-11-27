import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-focus bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground focus:border-white disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-white",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
