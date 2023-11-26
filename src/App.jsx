import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import List from "./components/List.jsx";

function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(newItem) {
		setItems((items) => [...items, newItem]);
	}

	function handleDeleteItems(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	return (
		<div className="app">
			<Header />
			<Form onAddItems={handleAddItems} />
			<List items={items} onDeleteItems={handleDeleteItems} />
			<Footer />
		</div>
	);
}

export default App;
