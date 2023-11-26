import React, { useState } from "react";

function Form({ onAddItems }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmitForm(e) {
		e.preventDefault();

		const newItems = {
			description,
			quantity,
			id: crypto.randomUUID(),
		};

		onAddItems(newItems);

		setDescription("");
		setQuantity(1);
	}
	return (
		<div>
			<form onSubmit={handleSubmitForm} className="form">
				<h3>Select the items you want pick</h3>
				<select
					value={quantity}
					onChange={(e) => setQuantity(Number(e.target.value))}
				>
					{Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
						<option value={number} key={number}>
							{number}
						</option>
					))}
				</select>

				<label className="select-items">Select Items</label>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button className="form-btn">Add</button>
			</form>
		</div>
	);
}

export default Form;
