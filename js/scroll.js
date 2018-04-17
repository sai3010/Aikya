// $("#eventtab").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#car").offset().top+50
//     }, 1000)
// })

// $("#btn-circle").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#car").offset().top+50
//     }, 1000)
// })

// $("#abouttab").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#aboutH").offset().top-120
//     }, 1000)
// })

// $("#btn").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#aboutH").offset().top-120
//     }, 1000)
// })

$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'))

  if (target.length) {
    event.preventDefault()
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 100
    }, 1000)
  }
})
