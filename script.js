const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const table = document.querySelector('table');
const newRow = document.createElement('tr');
const newCol = document.createElement('td');
const getSum = () => {
//Add your code here
	const allPrice = document.querySelectorAll('.price');
	let totalPrice = 0;

	for(let price of allPrice){
		totalPrice += parseInt(price.textContent);
	}

	newCol.textContent = `Total Price: Rs ${totalPrice}`;
	newCol.setAttribute('id','ans');
	newRow.appendChild(newCol);
	table.appendChild(newRow);
	
};

getSumBtn.addEventListener("click", getSum);

