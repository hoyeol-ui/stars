$(function(){

    

    $(".lazy").slick({
        dots: true,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
      });


      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:3000,
      });



      $(".regular2").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:3000,
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

            $('.sec2_box1').mouseover(function(){
              $('.sec2_txt1_on').show()
              $('.img1_off').hide()
              $('.sec2_box1 > .sec2_btn').css({'background-color':'#ef4b49','color':'#fff'})
              $('.sec2_box1 > .sec2_txt1_on').css({'display':'block'})
            });

            $('.sec2_box1').mouseleave(function(){
              $('.sec2_txt1_on').hide()
              $('.img1_off').show()
              $('.sec2_box1 > .sec2_btn').css({'background-color':'white','color':'#333'})
              $('.sec2_box1 > .sec2_txt1_on').css({'display':'none'})
            });

            $('.sec2_box2').mouseover(function(){
              $('.sec2_txt2_on').show()
              $('.img2_off').hide()
              $('.sec2_box2 > .sec2_btn').css({'background-color':'#ef4b49','color':'#fff'})
            });

            $('.sec2_box2').mouseleave(function(){
              $('.sec2_txt2_on').hide()
              $('.img2_off').show()
              $('.sec2_box2 > .sec2_btn').css({'background-color':'white','color':'#333'})
            });

            $('.sec2_box3').mouseover(function(){
              $('.sec2_txt3_on').show()
              $('.img3_off').hide()
              $('.sec2_box3 > .sec2_btn').css({'background-color':'#ef4b49','color':'#fff'})
            });

            $('.sec2_box3').mouseleave(function(){
              $('.sec2_txt3_on').hide()
              $('.img3_off').show()
              $('.sec2_box3 > .sec2_btn').css({'background-color':'white','color':'#333'})
            });




})