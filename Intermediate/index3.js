star = 0

for (var i = 0; i < 7; i++) {
	star += 1;
	if (star == 1) {
		document.write("*" + "<br>");
	}
	else if (star == 2) {
		document.write("**" + "<br>");
	}
	else if (star == 3) {
		document.write("***" + "<br>");
	}
	else if (star == 4) {
		document.write("****" + "<br>");
	}
	else if (star == 5) {
		document.write("*****" + "<br>");
	}
	else if (star == 6) {
		document.write("******" + "<br>");
	}
	else {
		document.write("*******" + "<br>");
	}
}

