function toggleShowcase(id) {
	let element = document.getElementById(id);
	let body = document.getElementById("_body");
	if(element.classList) {
		element.classList.toggle("hidden");
		body.classList.toggle("unscrollable");
	} else {
		let classes = element.className.split(" ");
		let body_classes = body.className.split(" ");
		let i = classes.indexOf("hidden")
		let j = body_classes.indexOf("unscrollable");
		if(i >= 0 && j < 0) {
			classes.splice(i, 0);
			body_classes.push("unscrollable");
		} else {
			body_classes.splice(j, 0);
			classes.push("hidden");
			element.className = classes.join(" ");
		}
	}
}
function closeShowCase() {
	let elements = document.getElementsByClassName("modal");
	document.getElementById("_body").className = "";
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
