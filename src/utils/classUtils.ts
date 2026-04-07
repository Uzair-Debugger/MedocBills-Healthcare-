import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const ctx = (...classes: Array<string | false | null | undefined>) => clsx(...classes);
export const mergeClass = (...classes: Array<string | false | null | undefined>) => twMerge(clsx(...classes));
