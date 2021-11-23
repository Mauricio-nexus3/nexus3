// script Start page

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show')
    } else {
      $('.scroll-up-btn').removeClass('show')
    }
  })

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 })
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto')
  })

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth')
  })

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
  })

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: [
      'de modo Profissional e Responsivo',
      'nos formatos HTML ou WordPress',
      ', sua Loja virtual',
      'ou Blog',
      'Mobile',
      'ou Desktop',
      'Com analise e desenhado UI/UX Designer',
      'com a cara do seu negócio',
      'e apenas seu',
      'Seja bem ao novo',
      'Seja Bem vindos a Nexus 3'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed = new Typed('.typing-2', {
    strings: [
      'Full-Stack, software development',
      'Mobile App',
      'UI/UX Designer'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  })
})

const hamburger_menu = document.querySelector('.hamburger-menu')
const container = document.querySelector('.container')

hamburger_menu.addEventListener('click', () => 
{
  container.classList.toggle('activegetStart')
});
