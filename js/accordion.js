$(function(){
$("ul.submenu").hide();
$("div.category").click(function(){
$("ul.submenu li").click(function(){
$("ul.submenu").hide();
});
$("ul.submenu").slideUp();
if($("+ul",this).css("display")=="none"){
$("+ul",this).slideDown();
}
});
});
