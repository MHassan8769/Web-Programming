window.onload = initAll;

function initAll() 
{
	document.getElementById("redirect").onclick = initRedirect;
	document.getElementById("butnID").onclick = initRedirect;
}
function initRedirect()
{	
	// alert("The content of other webpage");
	// debugger;
	console.log(this);
	// window.location = this;
	// window.location = "daisy.jpg";
	return false;	

	// window.location = "legend.html";
	// return false;
} 
