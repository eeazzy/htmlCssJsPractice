// 단순 fadein/fadeout
// $('.modal-notice').click(function(){
//     $('.modal').fadeIn()
// })
// $('.btn-close').click(function(){
//     $('.modal').fadeOut()
// })

$('.modal-notice').click(function(){
    $('.modal').addClass('active')
})
$('.btn-close').click(function(){
    $('.modal').removeClass('active')
})