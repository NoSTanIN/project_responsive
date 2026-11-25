var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  
  spaceBetween: 30,
  
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var gdata = [
  {'title':'Gran Turismo 7'},
  {'title':'Ghost of Tsushima'},
  {'title':'Marvel&apos;s Wolverine'},
  {'title':'Marvel&apos;s Spider&ndash;Man2'},
  {'title':'MLB THE SHOW 26'},
  {'title':'THE Last OF US Part1'},
  {'title':'Ace Combat 8'},
  {'title':'Grand Theft AUTO VI'},
  {'title':'Modern Warfare 4'},
  {'title':'Until Down'}
];

var text = document.getElementById('text');

function updateText(index) {
    var output = '<dl>';
    output += '<dt>' + gdata[index].title + '</dt>';
    output += '</dl>';  // 닫는 태그 오타 수정
    text.innerHTML = output;

    $('.game-info-item').removeClass('active');
    $('.game-info-item:eq('+ index +')').addClass('active');


}

// 초기 실행 시 첫 번째 타이틀 표시
updateText(swiper.realIndex);

// 슬라이드 전환 끝났을 때
swiper.on('transitionEnd', function() {
    updateText(swiper.realIndex);
});