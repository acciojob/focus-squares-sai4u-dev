//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((square, index) => {
	square.addEventListener("mouseenter", () => {
		squares.forEach((otherSquare, otherIndex) => {
			if (otherIndex !== index) {
				otherSquare.style.backgroundColor = "#6F4E37"; // Coffee color
			}
		});
	});

	square.addEventListener("mouseleave", () => {
		squares.forEach(sq => {
			sq.style.backgroundColor = "#E6E6FA"; // Lavender color
		});
	});
});
