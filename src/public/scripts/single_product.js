const img_click = (image, num) => {
	const img_0 = document.getElementById("img_0");
	const img_1 = document.getElementById("img_1");
	const img_2 = document.getElementById("img_2");

	if (num == 1) {
		img_1.setAttribute("class", "w-20 border border-black");
		img_0.setAttribute("class", "w-20 border");
		img_2.setAttribute("class", "w-20 border");
	} else if (num == 2) {
		img_2.setAttribute("class", "w-20 border border-black");
		img_0.setAttribute("class", "w-20 border");
		img_1.setAttribute("class", "w-20 border");
	} else {
		img_0.setAttribute("class", "w-20 border border-black");
		img_2.setAttribute("class", "w-20 border");
		img_1.setAttribute("class", "w-20 border");
	}

	const new_img = JSON.parse(image);
	const main_img = document.getElementById("main_img");
	main_img.src = new_img[num];
};
