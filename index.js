function markPresent() {
	window.markDate = new Date();
	$(document).ready(function() {
		$("div.absent").toggleClass("present");
	});
	updateClock();
}

function updateClock() {
	var currDate = new Date();
	var diff = currDate - markDate;
	document.getElementById("timer").innerHTML = format(diff / 1000);
	document.title = "ChillTab " + "[" + format(diff/1000) + "]";
	setTimeout(function() {
		updateClock()
	}, 1000);
}

function format(seconds) {
	var numhours = parseInt(Math.floor(((seconds % 31536000) % 86400) / 3600), 10);
	var numminutes = parseInt(Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 10);
	var numseconds = parseInt((((seconds % 31536000) % 86400) % 3600) % 60, 10);
	return ((numhours < 10) ? "0" + numhours : numhours) +
		":" + ((numminutes < 10) ? "0" + numminutes : numminutes) +
		":" + ((numseconds < 10) ? "0" + numseconds : numseconds);
}

markPresent();