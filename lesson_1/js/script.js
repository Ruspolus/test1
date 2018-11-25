//домашнее задание

function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая програма");

	function showSkills() {
		let skills = ['C++', 'Html', 'CSS'];

		for(let i = 0; i < skills.length; i++) {
			document.body.innerHTML += "Я владею " + skills[i] + "<br>"; //document.write(skills[i]); 
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Можете войти!")
		} else {
			alert("Ранова-то еще!")
		}
	}

	checkAge();

	function calcPow(num) {
		document.write(num*num); 
	}
	calcPow(4);
}

myFirstApp("Alex", 32);






//let number = 5;
//console.log(number);
//console.log('Hello');

//alert('Вход воспрещен!');

//et answer = confirm("Есть ли вам 18 лет?");
//let answer = prompt("Есть ли вам 18 лет?");
//console.log(answer);

/*let answers = [];

answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколко вам лет?", "");
answers[3] = prompt()

document.write(answers);*/

//очередное упражнение
/*let answers = [],
	questions = [
	"Как ваше имя?",
	"Как ваша фамилия?",
	"Сколко вам лет?"
	];

for (let i = 0; i < questions.length; i++){
	answers[i] = prompt(questions[i])
}

document.write(answers);*/