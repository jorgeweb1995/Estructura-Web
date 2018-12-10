(function(){

    let icon = document.getElementById('icon')

        icon.addEventListener('click', () =>{
            
            icon.classList.toggle('iconClick')

            let nav = document.getElementById('nav')

             nav.classList.toggle('navTranslate')

    })

})()
    
    
    //-----------
    //---- SCROLL

	$('a[href*="#"]')
        .not('[href="#"]')
        .not('[href*="#tabs-"]')
        .not('[href="#0"]')
        .click(function(event) {
        
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
              
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         
                if (target.length) {
       
                    event.preventDefault();
                    $('html, body').animate({
                       
                        scrollTop: target.offset().top - 0
                    }, 500, function() {
              
                        let $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { 
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); 
                            $target.focus(); 
                        }
                    });
                }
            }
        });

 

 

