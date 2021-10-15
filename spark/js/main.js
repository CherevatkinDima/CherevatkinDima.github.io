$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__link').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });






    $('.popup-link').click(function() {
        
        
        $('body').addClass('lock');
        $('.popup').fadeIn();
        event.preventDefault();
        

    
    });

    $('.popup__close').click(function() {
    
        $('.popup').fadeOut();
        $('body').toggleClass('lock');
        event.preventDefault();
    
    });


    $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    });

    


    $("#phone").mask("+7  (999) 999-9999");

    $('.slider').slick({
        swipe:true
    });



    

    $('#tamb').click(function() {

        $('*').removeClass('active');
       
        
        $('#1-1').addClass('active');
        event.preventDefault();
    
    });

    $('#vhod').click(function() {

        $('*').removeClass('active');
        
        
        $('#1-2').addClass('active');
        event.preventDefault();
    
    });

    $('#fire').click(function() {

        $('*').removeClass('active');
        
        
        $('#1-3').addClass('active');
        event.preventDefault();
    
    });

    $('#gates').click(function() {

        $('*').removeClass('active');
        
        
        $('#2-1').addClass('active');
        event.preventDefault();
    
    });

    $('#fance').click(function() {

        $('*').removeClass('active');
        
        
        $('#2-2').addClass('active');
        event.preventDefault();
    
    });

    $('#nerj').click(function() {

        $('*').removeClass('active');
        
        
        $('#2-3').addClass('active');
        event.preventDefault();
    
    });

    $('#stairs').click(function() {

        $('*').removeClass('active');
        
        
        $('#2-4').addClass('active');
        event.preventDefault();
    
    });
    
    $('#canopy').click(function() {

        $('*').removeClass('active');
        
        
        $('#2-5').addClass('active');
        event.preventDefault();
    
    });

    

    $('li').click(function(event) {
        $('.catalog__left').addClass('active');
        
    });

    $('.catalog__close').click(function(event) {
        $('.catalog__left').removeClass('active');
        $('*').removeClass('active');
        
    });


});








