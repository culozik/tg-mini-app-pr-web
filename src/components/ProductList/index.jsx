import { useState } from "react";

import ProductItem from "../ProductItem";

import useTelegram from "../../hooks/useTelegram";

import "./ProductList.css";

const products = [
	{ id: 1, title: "Product 1", description: "Description 1", price: 100 },
	{ id: 2, title: "Product 2", description: "Description 2", price: 200 },
	{ id: 3, title: "Product 3", description: "Description 3", price: 300 },
	{ id: 4, title: "Product 4", description: "Description 4", price: 400 },
	{ id: 5, title: "Product 5", description: "Description 5", price: 500 },
];

const ProductList = () => {
	const [addedItems, setAddedItems] = useState([]);
	const { tg } = useTelegram();

	const getTotalPrice = (items) => {
		return items.reduce((acc, item) => acc + item.price, 0);
	};

	const onAdd = (product) => {
		const alreadyAdded = addedItems.find((item) => item.id === product.id);
		let newItems = [];

		if (alreadyAdded) {
			newItems = addedItems.filter((item) => item.id !== product.id);
		} else {
			newItems = [...addedItems, product];
		}

		setAddedItems(newItems);

		if (newItems.length === 0) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
			tg.MainButton.setParams({
				text: `Buy ${newItems.length} items for $${getTotalPrice(newItems)}`,
			});
		}
	};

	return (
		<div className="list">
			{products.map((product) => (
				<ProductItem
					key={product.id}
					product={product}
					onAdd={onAdd}
					className="item"
				/>
			))}
		</div>
	);
};

export default ProductList;
