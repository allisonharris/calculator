//Get all the keys from document
var keys = document.querySelectorAll('#calculator span');

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
			if(btnVal == '=') {
				var equation = inputVal;
			}

			//Replace all insances of x and ÷ with * and / respectively.  This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
				equation = equation.replace(/x/g, '*').replace(/÷/g. '/');

				if(equation)
					input.innerHTML = eval(equation);
				}

			

	}
}