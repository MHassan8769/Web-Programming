$(document).ready(function(){
    $("#example").dialog({
        modal:false,
        resizable: false,
        buttons: [{
            text: "OK",
            click: function() {
                $(this).dialog("close");
            } 
        }]
    });
});