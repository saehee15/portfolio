$(function () {

    // 로딩화면
    const loader = $('.loading');
    const html = $('html');

    html.css({
        'overflow': 'hidden'
    }); //로딩 중 스크롤 방지

    setTimeout(() => {
        loader.fadeOut(300);
        html.css({
            'overflow': 'auto'
        }); //스크롤 방지 해제

    }, 4000);

    
    $(function() {
        var num = 1989;
        var arr = ['Was born', 'Graduated high school','Graduated university', 'Entered distribution company','Went to Japan to study','Reentered distribution company','Entered it company','Welcome'];
        var index = 0;
        loading();
  
        function loading() {

            counter = setInterval(num1,100);
            txt = setInterval(txt1,400);

            function num1() {
            num++;
            if (num > 2022) {
                clearInterval(num);
            } else {
                $(".count").text(num);
            }
            }
            function txt1() {
            $(".txt").text(arr[index++]);
            }
        }
    });


    //about
    $('.link-target').click(function(e){
        e.preventDefault();

        var target= $(this).data('target');
        var targetOffset = $(target).offset().top;

        gsap.to('body, html', {
                    'scrollTop': targetOffset
                })

    })


    $('.click').click(function (e) {
        e.preventDefault();
        target = $('.work').offset().top

        gsap.to('body, html', {
            'scrollTop': target
        })

    });



    ScrollTrigger.create({
        trigger: ".work",
        start: "top 0%",
        onEnter: function () {
            $('.up_btn').addClass('on');
        },
        onLeaveBack: function () {
            $('.up_btn').removeClass('on')
        }
    })

    $('.up_btn').click(function (e) {
        e.preventDefault();
        target = $('.about').offset().top

        gsap.to('body, html', {
            'scrollTop': target
        })

    });

   txtMotion = gsap.timeline({
    scrollTrigger:{
        trigger:".about",
        start: "top top",
        end:"bottom top",
        scrub:1,
        // markers: true,
        pin: true,

    }
    })


    txtMotion.set('.word',{
        yPercent:  300, 
        scale: 2
    })
    .to('.word',{
        yPercent:0,
        opacity: 1,
        scale:1,
        stagger:0.2
    })

    //work
    gsap.set('.work .card',{opacity: 0,filter: 'blur(30px)'})
    gsap.utils.toArray('.work .card').forEach(el => {

        ScrollTrigger.create({
            trigger:el,
            start: "top 80%",
            end: "bottom 30%",
            // markers: true,
            onEnter:()=>{
                gsap.to(el,{opacity:1,filter: 'blur(0px)'})
            },
            onLeave:()=>{
                gsap.to(el,{opacity:0,filter: 'blur(30px)'})
            },
            onEnterBack:()=>{
                gsap.to(el,{opacity:1,filter: 'blur(0px)'})
            },
            onLeaveBack:()=>{
                gsap.to(el,{opacity:0,filter: 'blur(30px)'})
            },

        })
       
    });

    var path = document.querySelector('#line');
    var pathLength = path.getTotalLength();

    gsap.set('#line',{
        strokeDasharray: pathLength + " " + pathLength,
        strokeDashoffset: pathLength,
    })


    gsap.to('#line',5,{
        scrollTrigger:{
            trigger:'.work',
            start:"top 70%",
            end:"bottom bottom",
            scrub:1,
        },
        strokeDasharray: pathLength + pathLength,
        ease:'none',
        strokeDashoffset: pathLength,
    })

})