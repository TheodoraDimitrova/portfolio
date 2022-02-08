//Select DOM Items
    const menuBtn=$('.menu-btn');
    const menu=$('.menu');
    const menuBranding=$('.menu-branding');
    const menuNav=$('.menu-nav');
    const navItem=$('.nav-item')

    let showMenu=false;

    menuBtn.on('click',function(){
        if(!showMenu){
            menuBtn.addClass('close');
            menu.addClass('show');
            menuBranding.addClass('show');
            navItem.addClass('show');
            showMenu=true;

        }else{
            menuBtn.removeClass('close');
            menu.removeClass('show');
            menuBranding.removeClass('show');
            navItem.removeClass('show');
            showMenu=false;
        }
  
    })



