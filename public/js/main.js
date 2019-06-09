    //-----------
    //---- NAVIGATION

    let icon = document.getElementById('icon'); // OBTENER ICONO MENU
    let nav = document.getElementById('nav'); // OBTENER NAVEGACIÓN

    icon.addEventListener('click', e =>{       
        icon.classList.toggle('iconClick')
        nav.classList.toggle('navTranslate')
    });

    nav.addEventListener('click', e =>{
       if(e.target.classList.contains('item__link')){
            icon.classList.toggle('iconClick')
            nav.classList.toggle('navTranslate')
       }
    });


    
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

    //-----------
    //---- G A L L E R Y

    const masonryLayout = (containerElem, itemsElems, columns) => {

        containerElem.classList.add('masonry-layout')

        let columnsElements = []

        for( let i = 1; i <= columns; i++){
            let column = document.createElement('div')
            column.classList.add('masonry-column', `column-${i}`)
            containerElem.appendChild(column)
            columnsElements.push(column)
        }

        for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++){
            for(let n = 0; n < columns; n++){
                let item = itemsElems[ m * columns + n]
                columnsElements[n].appendChild(item)
                item.classList.add('masonry-item')
            }
        }
    }

    masonryLayout(document.getElementById('gallery'),
        document.querySelectorAll('.gallery__item'), 3)

 

