const emailError = $(".email-input .error");
const emailInput = $(".email-input input");
const getStartedBtn = $(".email-input button");

emailError.hide();

function checkEmail(i) {
	const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(emailRegex.test(emailInput.eq(i).val()) == false) {
		emailError.eq(i).show();
		emailInput.eq(i).addClass("wrong");
	}
}

getStartedBtn.click(function() {
	var btnId = $(this).attr("id");
	checkEmail(parseInt(btnId.slice(btnId.length - 1,)) - 1);
});

$("a").click(function(event) {
	event.preventDefault();
});