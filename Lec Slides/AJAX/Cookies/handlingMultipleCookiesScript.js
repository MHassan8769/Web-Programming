window.addEventListener("load", initPage, false);

function initPage()
{
    var now = new Date();
    var expireDate = new Date();
    expireDate.setMonth(expireDate.getMonth()+6);
    var hitCt = parseInt(cookieVal("pageHit"));
    hitCt++;
    var lastVisit = cookieVal("pageVisit");
    if (lastVisit == 0)
    {
        lastVisit = "";
    }
    document.cookie = "pageHit=" + hitCt + ";expire=" + expireDate.toGMTString();
    document.cookie = "pageVisit=" + now + ";expire=" + expireDate.toGMTString();
    var outMsg = "You have visited this page " + hitCt + "times.";
    if (lastVisit != "")
    {
        outMsg += "<br></br>Your last visit was " + lastVisit; 
    }
    console.log(outMsg);
    document.getElementById("cookieData").innerHTML = outMsg;
}

function cookieVal(cookieName)
{
    var thisCookie = document.cookie.split("; ");
    for (var i=0; i<thisCookie.length; i++)
    {
        if (cookieName == thisCookie[i].split("=")[0])
        {
            return thisCookie[i].split("=")[1];
        }
    }
    return 0;
}

