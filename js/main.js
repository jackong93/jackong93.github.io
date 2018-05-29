---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.navigation-button').click(function (e) {
    {% for page_type in site.data.page_type %}
      if (!$('.{{ page_type.hash }}').hasClass('hidden')) {
        $('.{{ page_type.hash }}').addClass('hidden')
      }
      $('.' + $(this).attr("id")).removeClass('hidden')
    {% endfor %}

    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated fadeIn')
      var el     = $('.content-wrapper'),  
          newone = el.clone(true);
      el.before(newone);
      el.remove();
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash) {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.' + window.location.hash.replace("#", "")).removeClass('hidden')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .navigation-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
