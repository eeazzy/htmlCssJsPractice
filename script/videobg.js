$('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.modal-gnb').fadeToggle()
})

//오디오 컨트롤
var bgm = document.getElementById('myAudio')
bgm.volume = 0.2 