import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
// import * as tools from './tools';

// console.log(111);
// await tools.timeout(2000);
// console.log(222);

const humidity = 79;
// humidity = 88;
console.log(humidity);

// let nnn = 823 as const;
// console.log(nnn);

const x = 10 as 70;
console.log(x);

// const date3 = "whatever" as Date;
// const date4 = "whatever" as unknown as Date;
// date4.toISOString(); // TypeScript allows this now, but in runtime it will cause an error
// console.log('date4', date4); // "whatever"

function App() {
	return (
		<>
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</>
	);
}

export default App;
