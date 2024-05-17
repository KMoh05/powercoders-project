function loadScript(url, integrity) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.integrity = integrity;
        script.crossOrigin = "anonymous";
        script.referrerPolicy = "no-referrer";
        script.onload = resolve;
        script.onerror = reject;
        document.head.append(script);
    });
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.js", "sha512-BbVEDjbqdN3Eow8+empLMrJlxXRj5nEitiCAK5A1pUr66+jLVejo3PmjIaucRnjlB0P9R3rBUs3g5jXc8ti+fQ==")
    .then(() => console.log('math.js loaded'))
    .catch(() => console.log('Failed to load math.js'));

loadScript("https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.min.js", "sha512-iphNRh6dPbeuPGIrQbCdbBF/qcqadKWLa35YPVfMZMHBSI6PLJh1om2xCTWhpVpmUyb4IvVS9iYnnYMkleVXLA==")
    .then(() => console.log('math.min.js loaded'))
    .catch(() => console.log('Failed to load math.min.js'));
		
		// Function that display value 
		function dis(val) { 
			document.getElementById("result").value += val 
		} 

		function myFunction(event) { 
			if (event.key == '0' || event.key == '1' 
				|| event.key == '2' || event.key == '3' 
				|| event.key == '4' || event.key == '5' 
				|| event.key == '6' || event.key == '7' 
				|| event.key == '8' || event.key == '9' 
				|| event.key == '+' || event.key == '-' 
				|| event.key == '*' || event.key == '/') 
				document.getElementById("result").value += event.key; 
		} 

		var cal = document.getElementById("calcu"); 
		cal.onkeyup = function (event) { 
			if (event.keyCode === 13) { 
				console.log("Enter"); 
				let x = document.getElementById("result").value 
				console.log(x); 
				solve(); 
			} 
		} 

		// Function that evaluates the digit and return result 
		function solve() { 
			let x = document.getElementById("result").value 
			let y = math.evaluate(x) 
			document.getElementById("result").value = y 
		} 

		// Function that clear the display 
		function clr() { 
			document.getElementById("result").value = "" 
		} 
