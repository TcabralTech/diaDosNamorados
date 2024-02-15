$(function(){
  var indiceAtual = 0;
  var indiceMaximo = $('.banner .fundo').length;
  var delay = 3000;

  initSlider()
  cliqueSlider()


  function initSlider(){
    for(var i = 0; i < indiceMaximo; i++){
      if(i == 0){
        $('.bullets').append('<span style="background:black;"></span>');
      }else{
        $('.bullets').append('<span></span>');
      }
    }
    $('.banner .fundo').eq(0).fadeIn();
    setInterval(function(){
      alternarSlider();
    },delay);
  }

  function cliqueSlider(){
    $('.bullets span').click(function(){
      $('.banner .fundo').eq(indiceAtual).stop().fadeOut(2000);
      indiceAtual = $(this).index();
      $('.banner .fundo').eq(indiceAtual).stop().fadeIn(2000);
      $('.bullets span').css('background-color','#ccc');
      $(this).css('background-color','black');
    });
  }

  function alternarSlider(){
    $('.banner .fundo').eq(indiceAtual).stop().fadeOut(2000);
    indiceAtual+=1
    if (indiceAtual == indiceMaximo)
      indiceAtual = 0;
    $('.bullets span').css('background-color','#ccc');
    $('.bullets span').eq(indiceAtual).css('background-color','black');
    $('.banner .fundo').eq(indiceAtual).stop().fadeIn(2000);
  }
});


var btn = document.querySelector(".no");
var position = 0;
var isAnimating = false;

btn.addEventListener("click", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

btn.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

const sim = document.getElementById('yes');

sim.addEventListener("click", () => {

let timerInterval
Swal.fire({
  title: 'Obrigado 😍',
  html: 'Prometo lhe fazer feliz. 💘',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
});
