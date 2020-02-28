function toggleShowcase(id) {
	let element = document.getElementById(id);
	if(element.classList) {
		element.classList.toggle("hidden");
	} else {
		let classes = element.className.split(" ");
		let i = classes.indexOf("hidden")
		if(i >= 0) {
			classes.splice(i, 0);
		} else {
			classes.push("hidden");
			element.className = classes.join(" "); 
		}
	}
}
function closeShowCase() {
	let elements = document.getElementsByClassName("modal");
	if(elements.classList) {
		for(let i = 0; i < elements.length; i++) {
			elements[i].classList.add("hidden");
		}
	} else {
		for(let i = 0; i < elements.length; i++) {
			let classes = elements[i].className.split(" ");
			let j = classes.indexOf("hidden");
			if(j < 0) {
				classes.push("hidden");
				elements[i].className = classes.join(" ");
			}
		}
	}
}