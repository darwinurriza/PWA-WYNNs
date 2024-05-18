$(document).ready(function(){
    // Fetch data from JSON file and render hobbies and languages
    $.getJSON("data.json", function(data) {
        // Render hobbies
        data.hobbies.forEach(function(hobby) {
            $(".hobbies .serv-content").append(`
                <div class="card">
                    <div class="box">
                        <img src="${hobby.image}" alt="${hobby.name}">
                        <div class="text">${hobby.name}</div>
                    </div>
                </div>
            `);
        });

        // Render languages
        data.languages.forEach(function(language) {
            $(".languages .languages-content").append(`
                <div class="card">
                    <div class="box">
                        <img src="${language.image}" alt="${language.name}">
                        <div class="text">${language.name}</div>
                    </div>
                </div>
            `);
        });
    });

    // Function for sticky navbar on scroll and scroll-up button show/hide
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Function to scroll to top when scroll-up button is clicked
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // Function to apply smooth scroll on menu items click
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Function to toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Owl Carousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Your additional JavaScript code goes here
    // For example:
    // $('.your-element').yourFunction();
});
