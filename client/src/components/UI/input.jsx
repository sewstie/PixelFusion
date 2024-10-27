import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      placeholder="email"
      className={cn(
        "flex h-10 w-full rounded-md border border-focus bg-transparent px-3 py-2 text-sm text-title ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus focus:border-focus disabled:cursor-not-allowed disabled:opacity-50 caret-white",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };