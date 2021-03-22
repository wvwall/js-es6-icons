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


	$("#cat").append(`<i class = " ${cards[0].family} ${cards[0].prefix}${cards[0].name} "></i>`);
	$("#cat").append(`<h4> ${cards[0].name} </h4>`);

	$("#crow").append(`<i class = " ${cards[1].family} ${cards[1].prefix}${cards[1].name} "></i>`);
	$("#crow").append(`<h4> ${cards[1].name} </h4>`);

	$("#dog").append(`<i class = " ${cards[2].family} ${cards[2].prefix}${cards[2].name} "></i>`);
	$("#dog").append(`<h4> ${cards[2].name} </h4>`);

	$("#dove").append(`<i class = " ${cards[3].family} ${cards[3].prefix}${cards[3].name} "></i>`);
	$("#dove").append(`<h4> ${cards[3].name} </h4>`);
	
	$("#dragon").append(`<i class = " ${cards[4].family} ${cards[4].prefix}${cards[4].name} "></i>`);
	$("#dragon").append(`<h4> ${cards[4].name} </h4>`);
	
	$("#horse").append(`<i class = " ${cards[5].family} ${cards[5].prefix}${cards[5].name} "></i>`);
	$("#horse").append(`<h4> ${cards[5].name} </h4>`);

	$("#hippo").append(`<i class = " ${cards[6].family} ${cards[6].prefix}${cards[6].name} "></i>`);
	$("#hippo").append(`<h4> ${cards[6].name} </h4>`);

	$("#fish").append(`<i class = " ${cards[7].family} ${cards[7].prefix}${cards[7].name} "></i>`);
	$("#fish").append(`<h4> ${cards[7].name} </h4>`);

	$("#carrot").append(`<i class = " ${cards[8].family} ${cards[8].prefix}${cards[8].name} "></i>`);
	$("#carrot").append(`<h4> ${cards[8].name} </h4>`);
	
	$("#apple").append(`<i class = " ${cards[9].family} ${cards[9].prefix}${cards[9].name} "></i>`);
	$("#apple").append(`<h4> ${cards[9].name} </h4>`);

	$("#lemon").append(`<i class = " ${cards[10].family} ${cards[0].prefix}${cards[10].name} "></i>`);
	$("#lemon").append(`<h4> ${cards[10].name} </h4>`);

	$("#pepper").append(`<i class = " ${cards[11].family} ${cards[0].prefix}${cards[11].name} "></i>`);
	$("#pepper").append(`<h4> ${cards[11].name} </h4>`);

	$("#astro").append(`<i class = " ${cards[12].family} ${cards[12].prefix}${cards[12].name} "></i>`);
	$("#astro").append(`<h4> ${cards[12].name} </h4>`);

	$("#graduate").append(`<i class = " ${cards[13].family} ${cards[13].prefix}${cards[13].name} "></i>`);
	$("#graduate").append(`<h4> ${cards[13].name} </h4>`);
	
	$("#ninja").append(`<i class = " ${cards[14].family} ${cards[14].prefix}${cards[14].name} "></i>`);
	$("#ninja").append(`<h4> ${cards[14].name} </h4>`);
	
	$("#secret").append(`<i class = " ${cards[15].family} ${cards[0].prefix}${cards[15].name} "></i>`);
	$("#secret").append(`<h4> ${cards[15].name} </h4>`);


	cards.forEach((element) => {
		
			if (element.type === "animal" ) {
				$("#main-cards").children().addClass("animals");
			} else if (element.type === "vegetable") {
				$("#main-cards").children().addClass("vegetables");
			} else {
				$("#main-cards").children().addClass("users");
			}
			
	}); 

	

	/* for (let i = 0; i < cards.length; i++) {
		$("#main-cards").children().html(`<i class = " ${cards[i].family} ${cards[i].prefix}${cards[i].name} "></i>`);
		
	} */

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