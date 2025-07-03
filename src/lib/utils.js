// helps to combine classes
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs)=>{
    // cn - classname
    return twMerge(clsx(inputs));
}