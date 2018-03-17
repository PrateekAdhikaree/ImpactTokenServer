/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {
	if (form.id.value=="donor" && (form.pass.value=="donate"))
	{
		window.load("userdashboard.html");
	} else {
		alert("Invalid Password or UserID")
	}
}
