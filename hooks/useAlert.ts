import { useState } from "react";
import { string } from "three/webgpu";

const useAlert = () => {
	const [alert, setAlert] = useState({
		show: false,
		text: "",
		type: "danger",
	});

	const showAlert = ({
		text,
		type = "danger",
		show,
	}: {
		text: string;
		type: string;
		show: boolean;
	}) => setAlert({ show: true, text, type });
	const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

	return { alert, showAlert, hideAlert };
};

export default useAlert;
