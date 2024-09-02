import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * sortArrayOfObjectsByKey
 */

export function sortArrayOfObjectsByKey(array: any[], key: string, ascending: boolean = true) {
	return array.sort((a, b) => {
		if (a[key] < b[key]) return ascending ? -1 : 1;
		if (a[key] > b[key]) return ascending ? 1 : -1;
		return 0;
	});
};