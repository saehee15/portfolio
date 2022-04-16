$(function(){

    $('.click').click(function (e) { 
        e.preventDefault();
        target = $('.work').offset().top

        gsap.to('body, html',{
            'scrollTop' : target
        })
        
    });

    
    ScrollTrigger.create({
            trigger:".work",
            start:"top 0%",
            markers: true,
            onEnter:function(){
                $('.up_btn').addClass('on');
            },
            onLeaveBack:function(){
                $('.up_btn').removeClass('on')
            }
     })

    $('.up_btn').click(function (e) { 
            e.preventDefault();
            target = $('.about').offset().top
    
            gsap.to('body, html',{
                'scrollTop' : target
            })
            
     });


    //txt
    const prdMotion = gsap.timeline({
        defaults:{
            duration:1,
        }
    })
    const prdTxt = new SplitType('.left .txt_hide h2', { types: 'words, chars', });

    prdMotion.addLabel('m1')
    .fromTo(prdTxt.chars,{opacity:0, yPercent: 1},{opacity:1,yPercent: 0,stagger:0.05},'m1')
    .fromTo('.txt_hide li',{opacity:0},{opacity:1},"m1+=0.5")
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