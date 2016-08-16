$('document').ready(function () {
    $('#nav-menu__btn').on('click', function () {
        console.log('open');
        $('#nav-menu').toggleClass('is-open');
        $('#nav-menu__btn').toggleClass('is-open');
    });

    $(window).scroll(function () {
        var offSet = window.pageYOffset;
        if (offSet > 300) {
            $('.btn-book').addClass('small');
        }
        if (offSet < 300) {
            $('.btn-book').removeClass('small');
        }
    });

    var imgSrc = ['./img/carousel/Slice1.png', './img/carousel/Slice2.png', './img/carousel/Slice3.png', './img/carousel/Slice4.png', './img/carousel/Slice5.png', './img/carousel/Slice6.png', './img/carousel/Slice7.png'];

    var carouselClasses = ['carousel__prev', 'carousel__active', 'carousel__next', 'carousel__hidden'];

    var carouselNodes = imgSrc.map(function (el, i) {

        var index = i < carouselClasses.length ? i : 3;
        var url = 'url(' + el + ')';

        return $('<div></div>').appendTo($('#carousel .carousel__list')).addClass('carousel__item').addClass(carouselClasses[index]).css('background-image', url);
    });

    var pos = 0;

    $('.carousel__prev').on('click', function () {

        $(carouselNodes).each(function (i) {

            var index = i - pos > -1 ? i - pos : i - pos + imgSrc.length;
            var newClass = index - 1 > -1 ? index - 1 : index - 1 + carouselClasses.length;

            if (index > -1 && index < carouselClasses.length) {
                $(this).removeClass(carouselClasses[index]);
                $(this).addClass(carouselClasses[newClass]);
            }
        });

        pos++;
        if (pos === imgSrc.length) {
            pos = 0;
        }
    });

    $('.carousel__next').on('click', function () {

        console.log('shit');
        $(carouselNodes).each(function (i) {

            var index = i - pos;

            if (index < -1) {
                index += imgSrc.length;
            }

            if (index > carouselClasses.length) {
                index -= imgSrc.length;
            }

            var newClass = index + 1 > -1 ? index + 1 : index + 1 + carouselClasses.length;

            if (index > -2 && index < 3) {
                $(this).removeClass(carouselClasses[index < 0 ? index + carouselClasses.length : index]);
                $(this).addClass(carouselClasses[newClass]);
            }
        });

        pos--;
        if (pos < 0) {
            pos = imgSrc.length - 1;
        }
    });
});

$(window).load(function () {

    $('.carousel__item').draggable({ revert: true,
        drag: function () {
            console.log('drag');
        }

    });

    var svgDoc = document.getElementById('house-map__container').contentDocument;

    var targets = svgDoc.getElementsByClassName('click-target');

    targets.map = Array.prototype.map;

    targets.map(function (el) {

        el.addEventListener('click', function () {
            var rect = Snap(this);
            rect.attr({
                fill: '#E5F07C',
                fillOpacity: .5
            });
        });
    });
});