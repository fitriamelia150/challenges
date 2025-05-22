const btn_dice = document.querySelector(".dice");
const id_advice = document.querySelector(".idAdvice");
const text_advice = document.querySelector(".textAdvice");

window.addEventListener("load", getAdvice);
btn_dice.addEventListener("click", getAdvice);

async function getAdvice() {
	const response = await fetch("https://api.adviceslip.com/advice");
	const adviceRes = await response.json();
	id_advice.innerHTML = adviceRes.slip.id;
	text_advice.innerHTML = '"'+adviceRes.slip.advice+'"';

}