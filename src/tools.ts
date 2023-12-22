export const timeout = (n: number) => {
	return new Promise((res) => setTimeout(res, n));
}