$(document).ready(function(){
    
    /*$('#header02').hide();
    
    $('.con05_01 img').hover(function(){
        $(this).attr('src','../img/main/con05Img02.png')
    },function(){
         $(this).attr('src','../img/main/con05Img02_bw.png')
    });
    
    $('.con05_02 img').hover(function(){
        $(this).attr('src','../img/main/con05Img03.png')
    },function(){
         $(this).attr('src','../img/main/con05Img03_bw.png')
    });
    
    $('.con05_03 img').hover(function(){
        $(this).attr('src','../img/main/con05Img04.png')
    },function(){
         $(this).attr('src','../img/main/con05Img04_bw.png')
    });*/
    
    $('.con01List').slick({
        slidesToShow: 3,
        slidesToScroll:3,
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [ // 반응형 웹 구현 옵션
					{ 
						breakpoint: 769, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:1,
                            slidesToScroll:1,
                            dots:false,
						} 
					}
				]
        
    });
    
    
    //리뷰
    $('.rvw').slick({
        slidesToShow:4,
        //slidesToScroll:1,
        infinite: true,
        autoplay: true,
        autoplaySpeed:0,
        speed:3600,
        arrows:false,
        dots:false,
        cssEase:'linear',
        pauseOnHover:true,
        responsive: [ // 반응형 웹 구현 옵션
					{ 
						breakpoint: 769, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:2,
        
						} 
					}
				]
        
    });
    
    $('.rvw li').hover(function(){
        $(this).css('opacity','0.8')          
        $(this).addClass('blog')
    },function(){
        $(this).css('opacity','1'); 
     });    
    
    
    //con03 hover
    $('.recipe01_1,.con03R li p').hide();
    
    $('.con03L').hover(function(){
        $('.recipe01_1').show(),        
        $('.recipe01').hide()        
    },function(){
        $('.recipe01_1').hide(); 
        $('.recipe01').show(); 
     });
    
    
   $('.r1').hover(function(){
        $('.recipe02_1').show(),        
        $('.recipe02').hide()        
    },function(){
        $('.recipe02_1').hide(); 
        $('.recipe02').show(); 
     }); 
    
    
     $('.r2').hover(function(){
        $('.recipe03_1').show(),        
        $('.recipe03').hide()        
    },function(){
        $('.recipe03_1').hide(); 
        $('.recipe03').show(); 
     });  
    
    $('.r3').hover(function(){
        $('.recipe04_1').show(),        
        $('.recipe04').hide()        
    },function(){
        $('.recipe04_1').hide(); 
        $('.recipe04').show(); 
     });  
    
    

     $('.topBtn').hide();
     $(window).scroll(function(){
        var sc_top=$(this).scrollTop();
        //var sc_left=$(this).scrollLeft();
                
        if(sc_top>800){
            $('.topBtn').show();
        }else if(sc_top<100){
            $('.topBtn').hide();
        }
    });
    
    

    
   


});





