const imagesHouse = {
        bed1: ['./img/house/Slice1.png'],
        bed2: ['./img/house/Slice7.png'],
        bed3: ['./img/house/Slice6.png'],
        living: ['./img/house/Slice5.png'],
        bath: ['./img/house/Slice4.png'],
        frontTerr: ['./img/house/Slice3.png'],
        backTerr: ['./img/house/Slice2.png']
    };


const imagesArea = {
        komotini: ['./img/area/Komotini.jpg'],
        rhodopen: ['./img/area/Rodopen.jpg'],
        birds: ['./img/area/Birds.jpg'],
        nature: ['./img/area/Nature.jpg'],
        beaches: ['./img/area/Beaches.jpg'],
        samothraki: ['./img/area/Samothraki.jpg'],
}







const descrArea = {
        komotini: {
            title: 'Komotini',
            description: "'Pabst messenger bag tumeric iceland bushwick cray. Venmo squid keffiyeh 3 wolf moon, franzen post-ironic farm-to-table pabst you probably haven't heard of them yr tumblr occupy. Heirloom succulents umami single-origin coffee, aesthetic before they sold out distillery shoreditch. Twee farm-to-table keytar, poutine austin man bun synth mumblecore disrupt +1 vegan tousled. Church-key keffiyeh distillery literally, roof party occupy food truck. Retro forage crucifix photo booth. Gochujang tofu authentic, sriracha unicorn williamsburg offal thundercats craft beer 8-bit everyday carry succulents snackwave.'"
            },
        rhodopen: {
            title: 'Rhodopen',
            description: "'Quinoa try-hard celiac, raclette 3 wolf moon put a bird on it keffiyeh tote bag salvia plaid banjo. Drinking vinegar swag activated charcoal flannel, viral listicle marfa. Actually keffiyeh swag, four dollar toast freegan heirloom meh irony williamsburg sartorial. Tote bag butcher meh, brunch authentic art party small batch gochujang. Brunch chia meditation, austin photo booth paleo celiac meggings kale chips letterpress. Meggings fap try-hard, single-origin coffee church-key waistcoat pabst. Post-ironic VHS pinterest freegan.'"
        },
        birds: {
            title: 'Birds',
            description: 'Vape disrupt typewriter, everyday carry jianbing master cleanse cardigan neutra. Hammock mustache four dollar toast crucifix. Typewriter trust fund single-origin coffee, schlitz biodiesel scenester 8-bit craft beer intelligentsia live-edge banh mi mumblecore messenger bag semiotics aesthetic. Meggings wolf cliche iPhone cred, shabby chic kogi vape air plant typewriter fap. Enamel pin la croix woke asymmetrical, PBR&B semiotics mumblecore meggings organic twee. Chambray kitsch meditation 3 wolf moon affogato, banjo neutra 8-bit. Normcore irony mixtape, live-edge cray tofu tacos hella you probably haven\'t heard of them butcher trust fund meditation hashtag succulents kogi.'
        },
        nature: {
            title: 'Nature',
            description: "Vape disrupt typewriter, everyday carry jianbing master cleanse cardigan neutra. Hammock mustache four dollar toast crucifix. Typewriter trust fund single-origin coffee, schlitz biodiesel scenester 8-bit craft beer intelligentsia live-edge banh mi mumblecore messenger bag semiotics aesthetic. Meggings wolf cliche iPhone cred, shabby chic kogi vape air plant typewriter fap. Enamel pin la croix woke asymmetrical, PBR&B semiotics mumblecore meggings organic twee. Chambray kitsch meditation 3 wolf moon affogato, banjo neutra 8-bit. Normcore irony mixtape, live-edge cray tofu tacos hella you probably haven\'t heard of them butcher trust fund meditation hashtag succulents kogi."
        },
        beaches: {
            title: 'Beaches',
            description: "Vape disrupt typewriter, everyday carry jianbing master cleanse cardigan neutra. Hammock mustache four dollar toast crucifix. Typewriter trust fund single-origin coffee, schlitz biodiesel scenester 8-bit craft beer intelligentsia live-edge banh mi mumblecore messenger bag semiotics aesthetic. Meggings wolf cliche iPhone cred, shabby chic kogi vape air plant typewriter fap. Enamel pin la croix woke asymmetrical, PBR&B semiotics mumblecore meggings organic twee. Chambray kitsch meditation 3 wolf moon affogato, banjo neutra 8-bit. Normcore irony mixtape, live-edge cray tofu tacos hella you probably haven\'t heard of them butcher trust fund meditation hashtag succulents kogi."
        },
        samothraki: {
            title: 'Samothraki',
            description: "Vape disrupt typewriter, everyday carry jianbing master cleanse cardigan neutra. Hammock mustache four dollar toast crucifix. Typewriter trust fund single-origin coffee, schlitz biodiesel scenester 8-bit craft beer intelligentsia live-edge banh mi mumblecore messenger bag semiotics aesthetic. Meggings wolf cliche iPhone cred, shabby chic kogi vape air plant typewriter fap. Enamel pin la croix woke asymmetrical, PBR&B semiotics mumblecore meggings organic twee. Chambray kitsch meditation 3 wolf moon affogato, banjo neutra 8-bit. Normcore irony mixtape, live-edge cray tofu tacos hella you probably haven\'t heard of them butcher trust fund meditation hashtag succulents kogi."
        }
}


const imagesCon = [
        './img/connection/gr-map.jpg'
]


$('document').ready(function() {


    // open/close mobile navigation
    $('#nav-menu__btn').on('click', function() {
        $('#nav-menu').toggleClass('is-open')
        $('#nav-menu__btn').toggleClass('is-open')
    });


    // close mobile nav when link is clicked + set active class
    $('.nav-menu__item').on('click', function() {

        $('.nav-menu__item').removeClass('active')
        $(this).addClass('active')
        setPointer()
        setTimeout(function() {
            $('#nav-menu').removeClass('is-open')
            $('#nav-menu__btn').removeClass('is-open')
        }, 400)
    })


    //position pointer on navigation
    function setPointer() {
        let ul = $('.nav-menu__list').position()
        let active = $('.active').position()
        let newPos = ul.top + active.top - 4
        $('.nav-menu__pointer').css('top', newPos)
    }


    // APPEARANCE BOOKING BUTTON ON SCROLL
    $(window).scroll(function() {
        let offSet = window.pageYOffset
        let distanceContact = $('.contact').offset()
        let distanceBtn = $('.btn__book').offset()
        let diff = distanceBtn.top - distanceContact.top


        // make small after fold
        if (offSet > 300) {
            $('.btn__book').addClass('small')
        }
        if (offSet < 300) {
            $('.btn__book').removeClass('small')
        }


        //hide when in contact area
        if (diff > 0) {
          $('.btn__book').addClass('fade-out')
        }

        if (diff < 0) {
          $('.btn__book').removeClass('fade-out')
        }

    })



    let posHouse = 0
    let posArea = 0
    let posCon = 0
    let currentRoom = 'living'
    let currentArea = 'rhodopen'



    // fill first carousel
    $('#carousel1 .carousel__main').css('background-image', `url(${imagesHouse[currentRoom][0]})`)


    $('#carousel1 .carousel__btn--prev').click(function(){
        posHouse--
        if(posHouse < 0){
            posHouse = imagesHouse[currentRoom].length - 1
        }
        let url = `url(${imagesHouse[currentRoom][posHouse]})`
        $('#carousel1 .carousel__main').css('background-image', url)
    })

    $('#carousel1 .carousel__btn--next').click(function(){
        posHouse++
        if(posHouse === imagesHouse[currentRoom].length){
            posHouse = 0
        }
        let url = `url(${imagesHouse[currentRoom][posHouse]})`
        $('#carousel1 .carousel__main').css('background-image', url)
    })

    $('.click-target').click(function(){
        let room = this.id
        currentRoom = room
        let target = $('#carousel1 .carousel__main')
        target
            .addClass('newPic-enter')

        setTimeout(function(){
            target
                .css('background-image', `url(${imagesHouse[currentRoom][0]})`)
                .removeClass('newPic-enter')
        }, 200)

    })


    // Area Carousel Logic

    $('#carousel2 .carousel__main').css('background-image', `url(${imagesArea[currentArea][0]})`)


    $('#carousel2 .carousel__btn--prev').click(function(){
        posArea--
        if(posArea < 0){
            posArea = imagesArea[currentArea].length - 1
        }
        let url = `url(${imagesArea[currentArea][posArea]})`
        $('#carousel2 .carousel__main').css('background-image', url)
    })

    $('#carousel2 .carousel__btn--next').click(function(){
        posArea++
        if(posArea === imagesArea[currentArea].length){
            posArea = 0
        }
        let url = `url(${imagesArea[currentArea][posArea]})`
        $('#carousel2 .carousel__main').css('background-image', url)
    })



    // Area Bubbles


    Object.keys(descrArea).forEach( (key, i) => {
        let title = descrArea[key].title
        let url = `url(${imagesArea[key][0]})`
        let newBubble = `
            <div class="bubble" data-key=${key}>
                <div class="bubble__img" style="background-image:${url}">
                </div>
                <div class="bubble__descr">
                    ${title}
                </div>
            </div>`
        $(newBubble).appendTo('#bubble__container')

    })

    $('.bubble').click(function(){
        $('.bubble').removeClass('is-selected')
        $(this).addClass('is-selected')
        let key = $(this).data('key')
        let url = `url(${imagesArea[key][0]})`
        let title = descrArea[key].title
        let descr = descrArea[key].description
        let newDescr = `
                    <h5>${title}</h5>
                    <div class="paragraphen-wrap">
                        <p>${descr}</p>
                    </div>
                `
        $('#carousel2 .carousel__main').css('background-image', url)

        $('.area__description').html(newDescr)
    })



    // Connection Carousel Logic
    $('#carousel3 .carousel__main').css('background-image', `url(${imagesCon[0]})`)


    $('#carousel3 .carousel__btn--prev').click(function(){
        posCon--
        if(posCon < 0){
            posCon = imagesCon[currentArea].length - 1
        }
        let url = `url(${imagesCon[posCon]})`
        $('#carousel3 .carousel__main').css('background-image', url)
    })

    $('#carousel3 .carousel__btn--next').click(function(){
        posCon++
        if(posCon === imagesCon.length){
            posCon = 0
        }
        let url = `url(${imagesCon[posCon]})`
        $('#carousel3 .carousel__main').css('background-image', url)
    })


    setPointer()

})
