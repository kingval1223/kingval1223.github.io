$(".js-toggle-menu").click(function(){
  $(this).toggleClass("is-active-button");
  $(this).next(".js-menu").toggleClass("is-active");
});
