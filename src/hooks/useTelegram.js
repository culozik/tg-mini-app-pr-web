const tg = window.Telegram.WebApp;

const useTelegram = () => {
	const onClose = () => {
		tg.close();
	};

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.show();
		} else {
			tg.MainButton.hide();
		}
	};

	return {
		onClose,
		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,
	};
};

export default useTelegram;
