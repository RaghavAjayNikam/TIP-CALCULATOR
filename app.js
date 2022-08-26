window.onload = () =>
	//the function called when Calculate button is clicked.
	{
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {
	/*assign values of ID : amount, person and service to
	variables for calculations.*/
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	/*if statement will work when user presses
		calculate without entering values. */
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	//checking number of persons
	if (persons === '1')
	//if there is only one person 
		document.querySelector('#each').style.display = 'none';
	else
	//if there are more 
		document.querySelector('#each').style.display = 'block';

	//fixing the total amount upto 2 digits 
	let total = (amount * service) / persons;
	total = total.toFixed(2);

	//finally displaying the tip value
	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}
