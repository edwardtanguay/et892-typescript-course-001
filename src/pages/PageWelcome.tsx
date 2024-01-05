interface IEmployeePhones {
	[k: string]: {
		home: string;
		office: string;
		mobile: string;
	};
}

const phones: IEmployeePhones = {
	johntaylor: {
		home: "123",
		office: "456",
		mobile: "789",
	},
};

interface ICountObject {
	[k: string]: number;
}

const categoryCounter: ICountObject = {
	linux: 54,
	react: 44,
	typescript: 34,
};

const category = "vue";
categoryCounter[category] = 99;

const formatEmployee = (employee: readonly [string, number, boolean]) => {
	employee.push;
	return `
	Full name: ${employee[0]}
	Score: ${employee[1]}
	Currently employeed: ${employee[2] ? "yes" : "no"}
	`;
};

console.log(formatEmployee(["Hans Rostbrand", 89, false]));

export const PageWelcome = () => {
	return (
		<>
			<p>React: {categoryCounter.react}</p>
			<p>Vue: {categoryCounter.vue}</p>
			<p>John's home phone: {phones.johntaylor.home}</p>
		</>
	);
};
