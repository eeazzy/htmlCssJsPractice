$('.accordion .content').eq(0).show() // 미리 하나 열어놓기

$('.accordion .title').click(function(){
    $(this).siblings('.accordion .content').slideUp() // 선택한애 주변의 콘텐츠 다 접고
    $(this).next().stop().slideToggle('fast') // 내 밑에 있는 콘텐츠 열기 (순서 중요)
    $(this).siblings('.accordion .title').removeClass('active')
    $(this).toggleClass('active')
})