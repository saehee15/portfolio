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

    }, 5000);

    
    $(function() {
        var num = 1989;
        var arr = ['Was born', 'Graduated high school','Graduated university', 'Entered distribution company','Went to Japan to study','Reentered distribution company','Entered it company','Welcome'];
        var index = 0;
        counterNum();
  
        function counterNum() {

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
        markers: true,
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


    //txt
    const prdMotion = gsap.timeline({
        defaults: {
            duration: 1,
        }
    })
    const prdTxt = new SplitType('.left .txt_hide h2', {
        types: 'words, chars',
    });

    prdMotion.addLabel('m1')
        .fromTo(prdTxt.chars, {
            opacity: 0,
            yPercent: 1
        }, {
            opacity: 1,
            yPercent: 0,
            stagger: 0.05
        }, 'm1')
        .fromTo('.txt_hide li', {
            opacity: 0
        }, {
            opacity: 1
        }, "m1+=0.5")
    // .fromTo('.prd_item .img_container',{opacity:0,rotation:3},{opacity:1, rotation:0},"m1+=1")


    // const introTxt = new SplitType('.left .txt_hide', { types: 'words, chars', });

    // gsap.fromTo(introTxt.chars,1,{
    //     opacity: 0,
    //     yPercent: 100
    // },{
    //     opacity: 1,
    //     yPercent: 0,
    //     stagger:0.05
    // })


})