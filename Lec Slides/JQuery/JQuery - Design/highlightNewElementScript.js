$(document).ready(function(){
    $("#bodyText").hide();

    $("#textToggle").click(
        function() {
            // $("#bodyText").toggle(2000, {} ,"highlight");
            $("h1").toggle(2000,"swing", function() {
                alert("Im call back function");
            });
            return false;
        }
    );
});

