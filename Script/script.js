/* Function Navbar */

$('.nav-link').on('click', function(){
    $(".navbar-collapse").collapse("hide");
    
});

/* Filtro Galeria */

$('.filter-btn').on('click', function(){
    let type = $(this).attr('id');
    let boxes = $('.galery-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');


    if(type == 'cortes-btn'){
        eachBoxes('cortes', boxes)
    }else if( type == 'slao-btn'){
        eachBoxes('slao', boxes)
    }else{
        eachBoxes('all', boxes)
    }


});

function eachBoxes(type, boxes){
    if(type == 'all'){
        $(boxes).fadeIn();
    }else{
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow')
            }else{
                $(this).fadeIn('')
            }
        })
    }
}

/* scroll para secoes */

var divId;

$('.nav-link').click(function(){    
  divId = $(this).attr('href');
   $('html, body').animate({
    scrollTop: $(divId).offset().top - 70
  }, 150);
});