$(document).ready(function () {
	

const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//COMBINO LE PROPRIETA' DEGLI OGGETTI PER MOSTRARE LE ICONE

	//foreach && template literal

	/* cards.forEach((element) => {

		if (element.type === "animal") {
			$("#main-cards").append(`<div class= "card an"><i class =  " ${element.family} ${element.prefix}${element.name} "></i><h4> ${element.name} </h4></div>`);
		}else if (element.type === "vegetable"){
			$("#main-cards").append(`<div class= "card veg"><i class = " ${element.family} ${element.prefix}${element.name} "></i><h4> ${element.name} </h4></div>`);
		}else {
			$("#main-cards").append(`<div class= "card us"><i class = " ${element.family} ${element.prefix}${element.name} "></i><h4> ${element.name} </h4></div>`);
		}
		
	}); */

// CREO ARRAY COLORS

	const colors = ["blue","orange","purple"];


//MAPPO NUOVO ARRAY COLOR CON ELEMENTI CARDS + KEY COLOR

	const cardsColors = cards.map((element,i,array)=> {

		if (element.type === "animal") {

			let obj = {
				...element,
				color : colors[0]
			}
			return obj;
		}else if (element.type === "vegetable") {

			let obj = {
				...element,
				color : colors[1]
			}
			return obj;
		}else {

			let obj = {
				...element,
				color : colors[2]
			}
			return obj;
		}
	});
	console.log(cardsColors);

//INSERISCO KEY COLOR COME CLASSE

	cardsColors.forEach((element) => {

		if (element.type === "animal") {
			$("#main-cards").append(`<div class= "card an"><i class =  " ${element.color} ${element.family} ${element.prefix}${element.name} "></i><h4> ${element.name} </h4></div>`);
		}else if (element.type === "vegetable"){
			$("#main-cards").append(`<div class= "card veg"><i class = "${element.color} ${element.family} ${element.prefix}${element.name} "></i><h4> ${element.name} </h4></div>`);
		}else {
			$("#main-cards").append(`<div class= "card us"><i class = "${element.color} ${element.family} ${element.prefix}${element.name} "></i><h4> ${element.name} </h4></div>`);
		}
		
	});

	
	//MOSTRO AL CLICK LE CARDS SELEZIONATE


	$("#animals").click( () => {
		$(".veg").addClass("none");
		$(".us").addClass("none");
		$(".an").removeClass("none");
	});

	$("#veg").click( () => {
		$(".an").addClass("none");
		$(".us").addClass("none");
		$(".veg").removeClass("none");
	});

	$("#user").click( () => {
		$(".an").addClass("none");
		$(".veg").addClass("none");
		$(".us").removeClass("none");
	});

	$("#all").click( () => {
		$(".an").removeClass("none");
		$(".veg").removeClass("none");
		$(".us").removeClass("none");
	});



});