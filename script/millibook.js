// $('.accordion .item .content').eq(0).show()

$('.accordion .item .title').click(function(){
    $(this).next().stop().slideToggle('fast')
    $(this).toggleClass('active')
})
$('.accordion .item .content').click(function(){
    $(this).stop().slideUp('fast')
})