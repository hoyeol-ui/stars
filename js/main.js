$(function(){

    

    $(".lazy").slick({
        dots: true,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });


      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });



      $(".regular2").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2
        
      });


    $(".language").click(function(){
       $(".sub_con").slideToggle().css({'border':'2px solid #333'});
      });

      

      $('.sitemap').click(function(){
 
         $('.site_full').fadeIn(1000);
    
      })
      $(".sitemap_close").click(function(){
        $(".site_full").fadeOut(1000);
       });

       $(".popup_open").click(function(){
        $(".popup").show();
       });

       $(".pop_close").click(function(){
        $(".popup").css('display','none');
       });

       $('.depth1 > li').mouseover(function(){
         $('.depth2 > li').stop().slideDown(500)
       });

       $('#nav').mouseleave(function(){
        $('.depth2 > li').stop().slideUp(500)
      });


            $('#notice_rolling1').vTicker({   
              // 스크롤 속도(default: 700)  
              speed: 500,  
              // 스크롤 사이의 대기시간(default: 4000)  
              pause: 2000,  
              // 스크롤 애니메이션  
              animation: 'fade',  
              // 마우스 over 일때 멈출 설정  
              mousePause: false,  
              // 한번에 보일 리스트수(default: 2)  
              showItems: 4,  
              // 스크롤 컨테이너 높이(default: 0)  
              height: 0,  
              // 아이템이 움직이는 방향, up/down (default: up)  
              direction: 'up'  
      
            });  

            $('#notice_rolling2').vTicker({   
              // 스크롤 속도(default: 700)  
              speed: 500,  
              // 스크롤 사이의 대기시간(default: 4000)  
              pause: 2000,  
              // 스크롤 애니메이션  
              animation: 'fade',  
              // 마우스 over 일때 멈출 설정  
              mousePause: false,  
              // 한번에 보일 리스트수(default: 2)  
              showItems: 4,  
              // 스크롤 컨테이너 높이(default: 0)  
              height: 0,  
              // 아이템이 움직이는 방향, up/down (default: up)  
              direction: 'up'  
      
            });  



})