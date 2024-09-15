export const combineClasses = function (...classes: any): string {
	return classes.filter((item: any) => !!item).join(" ");
};
