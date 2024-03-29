let winW = $(window).width()
$(window).resize(function () {
  winW = $(window).width()
})


$('.gnb').mouseenter(function () {
  if (winW >= 1025) {
    $('.nav_box').stop().fadeIn(200)
  }
})
$('.gnb').mouseleave(function () {
  if (winW >= 1025) {
    $('.nav_box').stop().fadeOut(200)
  }
})
$('.nav_box').mouseenter(function () {
  if (winW >= 1025) {
    $('.nav_box').stop().fadeIn(200)
  }
})
$('.nav_box').mouseleave(function () {
  if (winW >= 1025) {
    $('.nav_box').stop().fadeOut(200)
  }
});


$("header .menu_box .menu > li > a").click(function () {
  $(".submenu").slideUp(); /* 누르는것만 펼쳐짐  */
  $(this).parent().find(".submenu").stop().slideToggle(); //모바일에서 메뉴 누르면 서브메뉴나옴/누르는것 마다 다펼쳐짐
  
  return false
});

$(".hambuger").click(function () {
  $('.hambuger').toggleClass('on');
  $(".nav_box").fadeToggle(200);
});

// 수동으로 슬라이드 바 움직이기//
/* $(".main_position_bar a").eq(0).click(function () {
    $('html').animate({scrollTop:0})
});

$(".main_position_bar a").eq(1).click(function () {
    $('html').animate({scrollTop:1000})
});

$(".main_position_bar a").eq(2).click(function () {
    $('html').animate({scrollTop:1800})
});

$(".main_position_bar a").eq(3).click(function () {
    $('html').animate({scrollTop:2800})
}); */
// 슬라이드 2수동

/* let sec2Top = $('#slide_box').offset().top;
let sec2Top = $('#section1').offset().top;
let sec2Top = $('#section2').offset().top;
let sec2Top = $('#section3').offset().top;


$(".main_position_bar a").eq(0).click(function () {
    let sec2Top = $('#slide_box').offset().top;
    $('html').animate({scrollTop:slideTop})
});

$(".main_position_bar a").eq(1).click(function () {
    $('html').animate({scrollTop:sec1Top})
});
$(".main_position_bar a").eq(2).click(function () {
    $('html').animate({scrollTop:sec2Top})
});
$(".main_position_bar a").eq(3).click(function () {
    $('html').animate({scrollTop:sec3Top})
}); */

// 슬라이드 자동

$(".main_position_bar a").click(function () {
  /* let posi2Top = $(this).index();

    let secTop=$('#section_box > section').eq(poseTop).offse().top
    $('html').animate({scrollTop:secTop}) */

  let ssoyung = $(this).attr("href");

  let sso = $(ssoyung).offset().top;
  $("html").animate({ scrollTop: sso });
  return false;
});

// 메인변수
let slideTop, sec1Top, sec2Top, sec3Top

//서브변수
let tabTop, textLeft

//메인페이지 판단코드
if ($('#section_box').length > 0) {
  slideTop = $('#slide_box').offset().top;  //0
  sec1Top = $('#section1').offset().top;   //919
  sec2Top = $('#section2').offset().top;   //1768.34375
  sec3Top = $('#section3').offset().top;   //2769.34375
} 

if($('.tabmenu').length > 0){
  tabTop = $('.tabmenu').offset().top;
}

if($('.year_box').length > 0){
  yearBoxTop = $('.year_box').offset().top;
}

$(window).scroll(function () {
  let scrT = $(window).scrollTop(); //window 한화면
  let winH = $(window).height();
  let docH = $(document).height(); //document화면전체
  let barH = $(".main_position_bar").height();

  let dap = (scrT / (docH - winH)) * 100;

  $(".main_position_bar span").css({ height: dap + "%" });

  // 스크롤 가로형

  $(".garobar span").css({ width: dap + "%" });




  if (scrT >= slideTop - 200) {
    $(".main_position_bar a").eq(0).addClass("active").siblings().removeClass();
  }

  if (scrT >= sec1Top - 200) {
    $(".main_position_bar a").eq(1).addClass("active").siblings().removeClass();
  }
  if (scrT >= sec2Top - 200) {
    $(".main_position_bar a").eq(2).addClass("active").siblings().removeClass();
    $("#section2 img.color").fadeIn(500);
  } else {
    $("#section2 img.color").fadeOut(500);
  }
  if (scrT >= sec3Top - 200) {
    $(".main_position_bar a").eq(3).addClass("active").siblings().removeClass();
  }



  if (scrT >= winH / 2) {
    $(".go_top").css({ opacity: 1, visibility: "visible" });
  } else {
    $(".go_top").css({ opacity: 0, visibility: "hidden" });
  }

  $('.st0').css({ strokeDashoffset: 450 - scrT })


  /* let lastTextTop = $('.history .year_box :last-child ul:last-child li.text').outerHeight(true)
  textLeft = $('.history .text').offset().left;
  if (scrT >= tabTop) {
    $('.history .now').css({ top: scrT - yearBoxTop + 74 })

    if (scrT >= docH - winH - 2) {
      $('.history .now').css({ top: 'auto', bottom: 0 + lastTextTop - 10 })
    }
  } else {
    $('.history .now').css({ top: '', bottom: 'auto' })
  } */

});



$(".go_top").click(function () {
  $("html").animate({ scrollTop: 0 });
});

// 반원

let total = 210

$('.real_circle').each(function () {
  let circleValue = $(this).attr('data-circleValue');
  let value = (circleValue / 100) * total;
  $(this).find('.st3').css({ strokeDashoffset: total - value })
  $(this).siblings('.circleNumber').text(circleValue + '%')
})






$('.tabmenu li').click(function () {
  $(this).addClass('active').siblings().removeClass()
  let dataTap = $(this).attr('data-tab');
  $('.year_box .all').hide()
  $('.year_box .' + dataTap).show()

  return false
})
