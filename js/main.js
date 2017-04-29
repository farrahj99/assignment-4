$(document).ready();

function showMore(event) {
	$("#show-this-on-click").slideDown(); 
	$(".readless").show();
	$(".readmore").hide(); 
	event.preventDefault();
}

function showLess(event) {
	$("#show-this-on-click").slideUp();
	$(".readmore").show();
	$(".readless").hide();
	event.preventDefault();
}

function showShow(event) {
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
	event.preventDefault();
}



$(".readmore").click(showMore); 

$(".readless").click(showLess); 

$(".learnmore").click(showShow);



// function stopLoading(event) {
// 	event.preventDefault();
// }


// $("#fun").click(stopLoading); 


// event.preventDefault()