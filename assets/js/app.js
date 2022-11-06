$(function (){
  // $(window).on('scroll',function(){

  //   var scrollPositon = $(window).scrollTop()
  //   console.log(scrollPosition)

  //   if (scrollPositon > 70) {
  //     $('#Menubar').addClass('active')
  //   }
  //   else {
  //     $('#Menubar').removeClass('active')
  //   }

  // })

  $(window).on('scroll', function () {

    var scrollPosition = $(window).scrollTop()

    console.log(scrollPosition)


    if (scrollPosition > 70) {
       $('#Menubar').addClass('active')
    } else {
       $('#Menubar').removeClass('active')
    }
 })

})