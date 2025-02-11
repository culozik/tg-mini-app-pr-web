import React from "react";
import Button from "../Button";

import useTelegram from "../../hooks/useTelegram";
import "./header.css";

const Header = () => {
	const { onClose, onToggleButton, user } = useTelegram();

	return (
		<div className="header">
			<Button onClick={onClose}>Close</Button>
			<Button onClick={onToggleButton}>Toggle</Button>
			<span className="username">{user?.username}</span>
		</div>
	);
};

export default Header;
