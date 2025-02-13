import { useCallback, useEffect, useState } from "react";

import useTelegram from "../../hooks/useTelegram";

import "./Form.css";

const Form = () => {
	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");
	const [street, setStreet] = useState("");
	const [subject, setSubject] = useState("physical");
	const { tg } = useTelegram();

	const onSendData = useCallback(() => {
		const data = {
			country,
			city,
			street,
			subject,
		};

		tg.sendData(JSON.stringify(data));
	}, [country, city, street, subject]);

	useEffect(() => {
		tg.onEvent("mainButtonClicked", onSendData);

		return () => {
			tg.offEvent("mainButtonClicked", onSendData);
		};
	}, [onSendData]);

	useEffect(() => {
		tg.MainButton.setParams({
			text: "Send",
		});
	}, []);

	useEffect(() => {
		if (!country || !city || !street) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	}, [country, city, street]);

	const onChangeCountry = (e) => {
		setCountry(e.target.value);
	};
	const onChangeCity = (e) => {
		setCity(e.target.value);
	};
	const onChangeStreet = (e) => {
		setStreet(e.target.value);
	};
	const onChangeSubject = (e) => {
		setSubject(e.target.value);
	};

	return (
		<div className="form">
			<h3>Enter information about yourself</h3>
			<input
				type="text"
				placeholder="Country"
				value={country}
				onChange={onChangeCountry}
				className="input"
			/>
			<input
				type="text"
				placeholder="City"
				value={city}
				onChange={onChangeCity}
				className="input"
			/>
			<input
				type="text"
				placeholder="Street"
				value={street}
				onChange={onChangeStreet}
				className="input"
			/>
			<select value={subject} className="select" onChange={onChangeSubject}>
				<option value="physical">Physical</option>
				<option value="legal">Legal</option>
			</select>
		</div>
	);
};

export default Form;
