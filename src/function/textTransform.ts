export const capitalize = (str: string) => {
	let string = str;
	return string.charAt(0).toUpperCase() + str.slice(1);
};

export const uppercase = (str: string) => {
	let string = str;
	return string.toUpperCase();
};
