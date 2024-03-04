window.addEventListener("load", nameFieldInit, false);


/* This function is called when window has completed loading. */
function nameFieldInit()
{
	var userName = "";
	if (document.cookie != "")  /* Checking that document.cookie contains something. */
	{	
		userName = document.cookie.split("=")[1];  /* The method "split('=')" splits a cookie into an array  */
	}
	document.getElementById("nameField").value = userName;
	// document.getElementById("nameField").onblur = setCookie;
	document.getElementById("cookieForm").onsubmit = setCookie;
}

function setCookie()
{
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);
	var userName = document.getElementById("nameField").value;
	document.cookie = "userName=" + userName + ";expires=" + expireDate.toGMTString(); /* The function toGMTString() coverts the expireDate object into a text string so that it can be written into the cookie */
	// document.getElementById("nameField").blur();
	return false;
}