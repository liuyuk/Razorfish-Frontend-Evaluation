$(document).ready(function(){
    $("button.likebutton").click(function() {
        alert("You liked his profile!");
        $(this).css('background-color', 'indianred');
        $(this).css('color', 'lightgray');
    });
});