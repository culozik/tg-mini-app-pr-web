import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Form from "./components/Form";
import useTelegram from "./hooks/useTelegram";

import "./App.css";

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<div className="">
			<Header />
			<Routes>
				<Route index element={<ProductList />} />
				<Route path={"form"} element={<Form />} />
			</Routes>
		</div>
	);
}

export default App;
