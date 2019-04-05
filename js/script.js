/*!
 * Quickly (https://giacomolaw.me/)
 * Copyright 2019 Giacomo Lawrance
 * Licensed under MIT (https://github.com/giacomolaw/quickly/blob/master/LICENSE.txt)
 */

// mobile navbar
function navtoggle() {
	var nav = document.getElementById("nav");
	if (nav.classList.contains("responsive"))
		nav.classList.remove("responsive");
	else
		nav.classList.add("responsive");
}