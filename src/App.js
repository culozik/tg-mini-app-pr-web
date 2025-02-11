import Header from "./components/Header";
import useTelegram from "./hooks/useTelegram";

import "./App.css";
import { useEffect } from "react";

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<div className="">
			<Header />
		</div>
	);
}

export default App;
