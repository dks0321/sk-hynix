
//circle badge
$('.circle').each(function(i,el){
    gsap.to(el,{
        scrollTrigger:{
            trigger:el,
            start:"0 99%",
            end:"100% 0%",
            scrub:0,
            // markers:true,
        },
        rotation:360
    })
})

//badge swiper
swiperOn =gsap.timeline({
    scrollTrigger:{
        trigger:".sc-intro",
        start:"0% 10%",
        end:"100% 9%",
        scrub:0,
        //markers:true,
    },
})
swiperOn.to('.content',{xPercent: -100,})

//banner swiper
const bannerSlide = new Swiper('.sc-intro .banner-area', {
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
})

//challenges swiper
const challengeSlide = new Swiper('.group-con01',{
    slidesPerView:3.3,
    spaceBetween:10,
    navigation:{
        prevEl:'.prev',
        nextEl:'.next'
    },
    loop: true,
})

//Future proof
    gsap.from('.sc-result .con-list > *',{
        scrollTrigger:{
            trigger:".sc-result .con-list",
            start:"0 90%",
            end:"100% 0%",
            // markers:true,
        },
        opacity:0,
        stagger:0.1,
    })


//Websites that inspire
    gsap.to('.sc-inspire .bg',{
        scrollTrigger:{
            trigger:".sc-inspire",
            start:"0 100%",
            end:"100% 0%",
            // markers:true,
            scrub:1,
        },
        yPercent:-20,
        ease:'none'
    })

    gsap.to('.sc-inspire .group-con02',{
        scrollTrigger:{
            trigger:".sc-inspire",
            start:"0 0%",
            end:"100% 0%",
            // markers:true,
            scrub:1,
        },
        yPercent:-100
    })

    $('[data-scroll]').each(function(i,el){
        yVal=$(this).data('scroll');

        gsap.to(el,{
            scrollTrigger:{
                trigger:el,
                start:"0 100%",
                end:"100% 0%",
                // markers:true,
                scrub:1,
            },
            yPercent:yVal
        })    

    })


    //project flow
    // line-fix
    ScrollTrigger.create({
        trigger:".sc-project .group-step2 .ico-area",
        start:"0 50%",
        end:"100% 0%",
        // markers:true,
        toggleClass:{targets:".line-fix",className:"on"}
    })
    $('.sc-project .step-area').each(function(i,el){
        ScrollTrigger.create({
            trigger:el,
            start:"0 50%",
            end:"100% 0%",
            // markers:true,
            onEnter:function(){
                $('.sc-project .ico-check').eq(i).addClass('on')
            },
            onLeaveBack:function(){
                $('.sc-project .ico-check').eq(i).removeClass('on')
            }
            // toggleClass:{targets:".line-fix",className:"on"}
        })
    })
    gsap.to('.sc-project .group-step2 .emoji',{
        scrollTrigger:{
            trigger:'.sc-project .group-step2 .emoji',
            start:"0 50%",
            end:"100% 50%",
            // markers:true,
            scrub:1,
        },
        opacity:1
    })


//faq
$('.sc-faq .tit').click(function(e){
    e.preventDefault();
    $(this).siblings('.answer').stop().slideToggle()
    $(this).find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up')
})

//top btn
$('.btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})

