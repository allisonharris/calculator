//Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];

//Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		//Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;

		//Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
			//If clear key is pressed, erase everything
			if(btnVal == 'C') {
				input.innerHTML = '';
			}

			//If eval key is pressed, calculate and display the result
			else if(btnVal == '=') {
				var equation = inputVal;
			}

			//Replace all insances of x and ÷ with * and / respectively.  This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
				equation = equation.replace(/x/g, '*').replace(/÷/g. '/');

				if(equation)
					input.innerHTML = eval(equation);
				}

			//Basic functionality of the calculator is complete, but there are some problems like
			//1. No two operators should be added consecutively.
			//2. The equation shouldn't start from an operator except minus.
			//3. There should not be more than 1 decimal in a number.

			//I'll fix these issues using some simple checks

			//indexOf only works in IE9+
			else if(operators.indexOf(btnVal) > -1 {

					//Operator is clicked
					//Get the last character from the equation
					var lastChar = inputVal[inputVal.length -1];

					//Only add operator if input is not empty and there is no operator at the last
					if(inputVal != '' && operators.indexOf(lastChar) == -1) {
						input.innerHTML += btnVal;

					//Allow minus if the string is empty
					else if(inputVal == '' && btnVal == '-')
						input.innerHTML += btnVal;
					}
					
					//Replace the last operator (if exists) with the newly pressed operator
						if(operators.indexOf(lastChar) > -1 && inputVal.length > 1 {
							//Here, '.' matches any character while $ donotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
								input.innerHTML = inputVal.replace(/.$/, btnVal);
							}
						}
			//if any other key is pressed, just append input
			else {
				input.innerHTML += btnVal;
			}
	}
}