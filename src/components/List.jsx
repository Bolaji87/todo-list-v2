import React from "react";

function List({ items, onDeleteItems }) {
	return (
		<div>
			<ul className="items">
				{items.map((item) => (
					<Items item={item} key={item.id} onDeleteItems={onDeleteItems} />
				))}
			</ul>
		</div>
	);
}
function Items({ item, onDeleteItems }) {
	return (
		<li className="list">
			<button onClick={() => onDeleteItems(item.id)} className="delete-btn">
				❌
			</button>
			<span className="quantity">{item.quantity} </span>

			<span> {item.description}</span>
		</li>
	);
}
export default List;
