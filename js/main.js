

//game
       var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween:5,
            slidesPerView:3.3,
            //loop: true,
            //freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints:{
                769 : {
                   slidesPerView: 4.5
                },
                1025 : {
                   slidesPerView: 5.5
                },
                1281 : {
                   slidesPerView: 6.5
                },
            }
        });

        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween:0,
            //loop:true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {   //페이지 네이션
                el: '.swiper-pagination',
                //dynamicBullets: true,
                clickable: true,
                //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

        $('.gallery-thumbs img').click(function(){
            $('.gallery-thumbs img').removeClass('on');
            $(this).addClass('on');
        });