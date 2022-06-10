window.onload = () => {
	const pics = ["logo-1", "logo-2", "logo-3", "logo-4"];
	const idx = Math.floor(Math.random() * (pics.length - 1));
	document.querySelector("#main-header > img").setAttribute("src", `src/${pics[idx]}.png`);
};