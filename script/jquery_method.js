// $('.show').click(function(){
//     $('.container div').show()
// })

// $('.show').click(function(){
//     $('.container div').slideDown()
// })

$('.show').click(function(){
    $('.container div').fadeIn('fast')
})

// $('.hide').click(function(){
//     $('.container div').hide()
// })

// $('.hide').click(function(){
//     $('.container div').slideUp()
// })

$('.hide').click(function(){
    $('.container div').fadeOut('slow')
})

// $('.toggle').click(function(){
//     $('.container div').toggle()
// })

// $('.toggle').click(function(){
//     $('.container div').slideToggle()
// })

$('.toggle').click(function(){
    $('.container div').fadeToggle(1000)
})

//숫자는 ms