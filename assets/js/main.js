// Slider
$(document).ready(function () {
    $('.slider-inf').slick({
        arrows: false,
        dots: true,
        asNavFor: '.slider-img',
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.slider-img').slick({
        arrows: false,
        asNavFor: '.slider-inf',
    });
    $('.team-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
    });
});
// MODAL
$('#modal-btn').on('click', function (){
    $('#modal-wrapper').fadeIn();
}) 
$('#overlay').on('click', function (){
    $('#modal-wrapper').fadeOut();
}) 
$('#overlay-m').on('click', function (){
    $('#message-wrapper').fadeOut();
}) 
$('#close-message').on('click', function (){
    $('#message-wrapper').fadeOut();
})  
$('#back').on('click', function (){
    $('#modal-wrapper').fadeOut();
})
// MAP
$(window).on('scroll', function () {
    var headerHeight = $(".header").height();
    var Height = $("#sait-title").height();
    var scroll = $(window).scrollTop();
    if (scroll < headerHeight + Height ) {
        $(".head").removeClass("head-sticky");
    } else {
        $(".head").addClass("head-sticky");
    }
});
// BURGER
$(".menu-burger").on('click', function () {
    $(".menu-burger").toggleClass("menu-burger_active");
    $(".navigation_header").toggle();
});
$(".navigation__item_shop").on('click', function () {
    $(".shop-nav").toggle();
});
// Validation + Form
$(document).ready(function () {
    $('#sand').on('click', function (e) {
        e.preventDefault();
        $(this).parent('#modalForm').submit();
    })
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
    );
    var modalForm = $('#modalForm');
    modalForm.validate({
          rules: {
            name: {
              required: true,
              regex: "[A-Za-z]{1,32}"
            },
            email: {
              required: true,
              email: true
            },
            tel: {
              required: true,
              digits: true,
              minlength: 10,
              maxlength: 11,
              regex: "[0-9]+"
            }
          },
          messages: {
            name: 'Введите ваше имя',
            email: 'Введите действительный адрес электронной почты',
            tel: 'Введите действующий номер телефона',
          },
    
          submitHandler: function (form) {
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    case 'modalForm':
                      $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                              console.log('Always');
                              setTimeout(function() {
                                $('#message-wrapper').fadeIn();
                                  $('#modal-wrapper').fadeOut();
                                $form.trigger('reset');
                            }, 1100);
                            $('#close-message').on('click', function(e) {
                                $('#message-wrapper').fadeOut();
                            });
                            });
                        break;
            }
            return false;
            }
        })
});


$(document).ready(function () {
    $('.contacts-form__btn').on('click', function (e) {
        e.preventDefault();
        $(this).parent('.contacts-form').submit();
    })
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
    );
    var mail = $('#contactsForm');
    
    mail.validate({
        rules: {
            name: {
                required: true,
                regex: "[A-Za-z]{1,32}"
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 11,
                regex: "[0-9]+"
            }
        },
        messages: {
            name: 'Введите ваше имя',
            email: 'Введите действительный адрес электронной почты',
            tel: 'Введите действующий номер телефона',
        },
        submitHandler: function (form) {
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
                case 'contactsForm':
                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize()
                    })
                        .done(function () {
                            console.log('Success');
                        })
                        .fail(function () {
                            console.log('Fail');
                        })
                        .always(function () {
                            console.log('Always');
                            setTimeout(function () {
                                $('#contactsSuccess').fadeIn();
                                $form.trigger('reset');
                            }, 1100);
                        });
                    break;
            }
            return false;
        }
    })
});
  
$(document).ready(function () {
    $('.contacts-form__btn').on('click', function (e) {
        e.preventDefault();
        $(this).parent('.contacts-form').submit();
    })
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
    );
    var mail = $('#contactsForm');
    
    mail.validate({
        rules: {
            name: {
                required: true,
                regex: "[A-Za-z]{1,32}"
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 11,
                regex: "[0-9]+"
            }
        },
        messages: {
            name: 'Введите ваше имя',
            email: 'Введите действительный адрес электронной почты',
            tel: 'Введите действующий номер телефона',
        },
        submitHandler: function (form) {
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
                case 'contactsForm':
                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize()
                    })
                        .done(function () {
                            console.log('Success');
                        })
                        .fail(function () {
                            console.log('Fail');
                        })
                        .always(function () {
                            console.log('Always');
                            setTimeout(function () {
                                $('#contactsSuccess').fadeIn();
                                $form.trigger('reset');
                            }, 1100);
                        });
                    break;
            }
            return false;
        }
    })
});
// MAP 
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [56.31, 44.01],
            zoom: 10,
            controls: ['zoomControl','geolocationControl']
        });

        var myPlacemark = new ymaps.Placemark([56.31,44.01],{} , {
            iconImageSize : [32, 40]
        })

        myMap.balloon.open([51,85, 38,37], 'Содержание балуна', {
            closeButton: false
        })

        myMap.geoObjects.add(myPlacemark);
    }
