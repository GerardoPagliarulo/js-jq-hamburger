/**
* HAMBURGER MENU
* 
* mostrare / nascondere il menu principale 
* (ricordate che per vedere l’hamburger in alto a destra 
* dovete scendere a risoluzioni tipo tablet o mobile).
*/

var hamburger = $('.header-right > a');
var croce = $('.hamburger-menu > a');

hamburger.click( function () {
    $('.hamburger-menu').fadeIn('fast');
});

croce.click( function () {
    $('.hamburger-menu').fadeOut('fast');
});



