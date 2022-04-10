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
    

})