import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { Route, Routes } from "react-router-dom";

export default function Pages() {
	return (
		<div>
			<Popular />
			<Veggie />
		</div>
	);
}