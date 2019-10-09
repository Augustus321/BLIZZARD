// 公共导航
let state = false;
let esports_state = false;
let act_state = false;

$("#Navbar-games").click(function(){
    state = true;
    esports_state = false;
    act_state = false;
    switchshow();
    esportsshow();
    actshow();
    if(state == false && esports_state == false){
        $(".Navbar-overlay").removeClass("Navshow");
    }
})

$("#Navbar-esports").click(function(){
    esports_state = true;
    state = false;
    act_state = false;
    switchshow();
    esportsshow();
    actshow();
    if(state == false && esports_state == false){
        $(".Navbar-overlay").removeClass("Navshow");
    }
})

$("#Navbar-act").click(function(){
    act_state = true;
    state = false;
    esports_state = false;
    switchshow();
    esportsshow();
    actshow();
})

$(".Navbar-overlay").click(function(){
    state = false;
    esports_state = false;
    act_state = false;
    switchshow();
    esportsshow();
    actshow();
    if(state == false && esports_state == false && act_state == false){
        $(".Navbar-overlay").removeClass("Navshow");
    }
})

function switchshow(){
    if(state == true){
        $(".Navbar-modal").addClass("Navshow");
        $(".Navbar-overlay").addClass("Navshow");
        $(".Navbar-gamePublishers a").css("animation-play-state","running");
        $(".Navbar-modalSection a").css("animation-play-state","running");
        $("#Navbar-games img").addClass("rotate");
        $("#Navbar-games span").addClass("white");
    }
    else if(state == false){
        $(".Navbar-modal").removeClass("Navshow");
        $("#Navbar-games img").removeClass("rotate");
        $("#Navbar-games span").removeClass("white");
    }
}

function esportsshow(){
    if(esports_state == true){
        $(".Navbar-overlay").addClass("Navshow");
        $(".Navbar-dropdown").addClass("Navshow");
        $(".Navbar-modalSection a").css("animation-play-state","running");
        $(".Navbar-esport-wrapper").css("animation-play-state","running");
        $("#Navbar-esports img").addClass("rotate");
        $("#Navbar-esports span").addClass("white");
    }
    else if(esports_state == false){
        $(".Navbar-dropdown").removeClass("Navshow");
        $("#Navbar-esports img").removeClass("rotate");
        $("#Navbar-esports span").removeClass("white");
    }
}




function actshow(){
    if(act_state == true){
        $(".Navbar-account").addClass("Navshow");
        $("#Navbar-act img").addClass("rotate");
        $("#Navbar-act span").addClass("white");
        $(".Navbar-overlay").addClass("Navshow");
    }
    else if(act_state == false){
        $(".Navbar-account").removeClass("Navshow");
        $("#Navbar-act img").removeClass("rotate");
        $("#Navbar-act span").removeClass("white");
    }
}