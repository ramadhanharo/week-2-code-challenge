// empty shopping list
let shoppingList = [];

const form = document.querySelector('inputbox');
const container = document.querySelector('.container');

// get values from inputs and add to the array

function displayItems() {
	container.innerHTML = '';

	shoppingList.forEach((item, index) => {
		const itemCard = `<div class="item">
				<div id="details-${index}" class="">
					<h4 class="title">${item.name}</h4>
					<p class="price">Ksh ${item.price}</p>
				</div>
				<div class="check">
					<input type="checkbox" id="mark-${index}" onclick="togglePurchased(${index})" />
					<label for="mark-${index}">Mark as purchased</label>
				</div>
			</div>`;

		return container.insertAdjacentHTML('beforeend', itemCard);
	});

	clearList();
}

function togglePurchased(index) {
	const checkbox = document.getElementById(`mark-${index}`);
	const details = document.getElementById(`details-${index}`);

	if (checkbox.checked) {
		details.classList.add('purchased');
	} else {
		details.classList.remove('purchased');
	}
}

function clearList() {
	const btns = document.querySelector('.btn-sections');
	const clear = document.querySelector('.clear-list');

	if (shoppingList.length > 0) {
		btns.classList.remove('hidden');
	}
	clear.addEventListener('click', () => {
		shoppingList = [];
		container.innerHTML = ''; // Clear the UI
		btns.classList.add('hidden');
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const itemName = e.target.product.value;
	const itemPrice = e.target.price.value;

	shoppingList.push({
		name: itemName,
		price: itemPrice,
	});
	form.reset();
	displayItems();
});
