// *********

	// \\
   //   \\
  //_____\\
 //_______\\
//		   \\


let inputData = document.querySelector(".input"),
	options = document.getElementById("option"),
	result = document.getElementById("result"),
	actionType = document.querySelectorAll(".actionType");

function action() {
	if (options.value == 'px-to-rem-em') {
		actionType[0].innerHTML = 'PX';
		actionType[1].innerHTML = 'REM, EM';
		result.innerHTML = inputData.value / 18;
	}else if (options.value == 'rem-em-to-px') {
		actionType[1].innerHTML = 'PX';
		actionType[0].innerHTML = 'REM, EM';
		result.innerHTML = inputData.value * 18;
	}
}