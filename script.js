const squares = document.querySelectorAll(".square");

squares.forEach((square, index) => {
	square.addEventListener("mouseover", () => {
		squares.forEach((otherSquare, otherIndex) => {
			if (otherIndex !== index) {
				otherSquare.style.backgroundColor = "#6F4E37"; // Coffee color
			}
		});
	});

	square.addEventListener("mouseout", () => {
		squares.forEach(sq => {
			sq.style.backgroundColor = "#E6E6FA"; // Lavender color
		});
	});
});
