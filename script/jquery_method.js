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


//.클래스이름 하면 안된다 div안에 class="active"를 넣어줌
$('.add').click(function(){
    $('.container div').addClass('active')
})

$('.remove').click(function(){
    $('.container div').removeClass('active')
})

$('.toggle2').click(function(){
    $('.container div').toggleClass('active')
})
