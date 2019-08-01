
// Smooth Scrolling
//==========================================
$(function() {
  $('a.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top -50}, 1000);
        return false;
      }
    }
  });
});

// force show placeholder
$(function(){
	$('input, textarea').placeholder();
});

//my functions
var header = document.getElementById('header_banner'),
resultText = document.getElementById('result_cell'),
rtN_S = resultText.value.split(' '),
rtN = rtN_S[0],
rtS = rtN_S[1],
spliter = ' ';

function banner(){
  setInterval(function(){
    //header.innerHTML += randomicnamessliding;
  }, 1000);
}
banner();
function copiarNick(){
  resultText.select();
  document.execCommand('copy');
  alert('Copiado para área de tranferencia:\n' + resultText.value);
}

function mudarSexF(){
  rtN = 'feminino';
  resultText.value = rtN + spliter + rtS;
}

function mudarSexM(){
  rtN = 'masculino';
  resultText.value = rtN + spliter + rtS;
}

function mudarSexU(){
  rtN = 'unissex';
  resultText.value = rtN + spliter + rtS;
}

function mudarSobN(){
  rtS = 'sobrenome';
  resultText.value = rtN + spliter + rtS;
}

function mudarSobAm(){
  rtS = 'adjAmigável';
  resultText.value = rtN + spliter + rtS;
}

function mudarSobAg(){
  rtS = 'adjAgressivo';
  resultText.value = rtN + spliter + rtS;
}

function mudarSepE(){
  spliter = ' ';
  resultText.value = rtN + spliter + rtS;
}

function mudarSepS(){
  spliter = '_';
  resultText.value = rtN + spliter + rtS;
}

function mudarSepT(){
  spliter = '-';
  resultText.value = rtN + spliter + rtS;
}
