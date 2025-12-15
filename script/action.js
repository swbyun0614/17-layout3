let number = 0

$('.btn_next').click(function(){
    number = number + 1
    $('.hero ul').css({
        marginLeft:-number*100+'%'
    })
    console.log(number)
})
/* .btn_next를 클릭했을 때 0이었던 변수 'number'가 1씩 더해지고, .hero 안의 ul의 marginLeft가 -(number)*100%만큼 생김 (%라는 단위는 문자이기 때문에 ''로 표시하고 숫자와 문자를 +로 이어줘야 함) */

$('.btn_prev').click(function(){
    number = number - 1
    $('.hero ul').css({
        marginLeft:-number*100+'%'
    })
    console.log(number)
})