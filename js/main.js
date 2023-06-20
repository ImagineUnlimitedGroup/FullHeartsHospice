// Делаем открывающийся список
const list = document.querySelectorAll(".services__li")

list.forEach(element => {
	element.addEventListener("click", () => {
		element.classList.toggle('active')

		const text = element.querySelector('.service__description')

		text.classList.toggle('active')
	})
});


// Изменение номера телефона

// Устанавливаем нужный часовой пояс
const options = {
	timeZone: "America/Denver",
	hour: "numeric",
  weekday: "short"
};



// Функция определяющая нужный номер
function changePhoneNumber() {
	phone = ''

	// Получаем нужный день недели и час в формате "Mon, 19"
	const now = new Date();
	let time = now.toLocaleString("en-GB", options);
	
	date = time.split(',')

	day = date[0]

	hour = Number(date[1])

	// Определяем номер телефона

	// Рабочие часы:
	if (hour > 9 && hour < 17) {
		phone = '+17203810181'
	} else {
		// Первый человек:
		if (day == 'Mon' || "Wed" || "Fri" || "Sun") {
			phone = '+18186243522'
		} else {

			// Второй человек
			phone = '+17204869294'
		}
	}

	phone = "tel:" + phone

	document.getElementById("headerBtn").href = phone
	document.getElementById("heroBtn").href = phone
}

changePhoneNumber()
setInterval(changePhoneNumber, 120000)