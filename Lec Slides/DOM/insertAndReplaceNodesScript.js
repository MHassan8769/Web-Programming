window.addEventListener("load",initAll,false);
var nodeChgArea;

function initAll()
{
	document.getElementById("theForm").addEventListener("submit", nodeChanger, false);
	nodeChgArea = document.getElementById("modifiable");
}

function addNode()
{
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
	nodeChgArea.appendChild(newGraf);
}

function delNode()
{	
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);
	nodeChgArea.removeChild(oldGraf);
}

function insertNode()
{	
	var grafChoice = document.getElementById("grafCount").selectedIndex; // where user wants to enter
	var inText = document.getElementById("textArea").value; // what user wants to enter
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
	var allGrafs = nodeChgArea.getElementsByTagName("p"); // array of p
	var oldGraf = allGrafs.item(grafChoice);
	nodeChgArea.insertBefore(newGraf,oldGraf);
}

function replaceNode()
{
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);
	nodeChgArea.replaceChild(newGraf,oldGraf);
}

function nodeChanger(evt)
{	
	var actionType = -1;
	var pGrafCT = nodeChgArea.getElementsByTagName("p").length;
	var radioButtonSet = document.getElementById("theForm").nodeAction;

	for (var i = 0; i < radioButtonSet.length; i++)
	{
		if (radioButtonSet[i].checked)
		{
			actionType = i;
		}
	}

	switch(actionType)
	{
		case 0:
			addNode();
			break;
		case 1:
			if (pGrafCT > 0)
			{
				delNode();
				break;
			}
		case 2:
			if (pGrafCT > 0)
			{
				insertNode();
				break;
			}
		case 3:
			if (pGrafCT > 0)
			{
				replaceNode();
				break;
			}	
		default:
			alert("No valid action was chosen");		
	}

	document.getElementById("grafCount").options.length = 0;

	for (i = 0; i < nodeChgArea.getElementsByTagName("p").length; i++) 
	{
		document.getElementById("grafCount").options[i] = new Option(i+1);
	}

	evt.preventDefault();
}