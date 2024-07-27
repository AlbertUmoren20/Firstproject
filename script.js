$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")
        }
    })

})

// typing animation crit 
var yped = new typed(".typing", {
    strings: ["Freelancer","Blogger","Youtuber","Twin"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});