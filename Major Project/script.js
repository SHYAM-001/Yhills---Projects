// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

// Add event listeners to navigation links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const sectionId = this.getAttribute('href'); // Get the target section id
        scrollToSection(sectionId); // Scroll to the target section
    });
});


const modal = () => {
    var modal = document.createElement('div');
    modal.style.width = 'auto';
    modal.style.height = '50px';
    modal.style.borderRadius='10px';
    modal.style.position = 'fixed';
    modal.style.color='white';
    modal.style.backgroundColor='green';
    modal.style.top = '85%'; // Change this to '0' to position the modal at the top
    modal.style.left = '50%';
    modal.style.zIndex=10;
    modal.style.transform = 'translateX(-50%)'; // Change this to only translate in the X direction
    modal.style.padding = '5px';
    modal.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
    modal.style.textAlign = 'center';

    // Add text to the modal
    var text = document.createElement('p');
    text.textContent = 'Message Has Been Sent Successfully';
    modal.appendChild(text);

    // Add the modal to the body
    document.body.appendChild(modal);

    // Remove the modal after 3 seconds
    setTimeout(function() {
        modal.remove();
    }, 3000);
}

function sendContactDetails(){
    event.preventDefault();
                (function(){
                    emailjs.init("8tRlDR9PUSV3NXH8C");
                })();
            
                let subject = document.getElementById("subject").value;
                const to_name = "SHYAM K S";
                let from_name = document.getElementById("name").value;
                let sender_email = document.getElementById("email_to").value ;
                let phone_no = document.getElementById("phone").value;
                let message= document.getElementById("message").value ;
                console.log("message recieved");

                var params = {
                    subject : subject,
                    to_name : to_name,
                    from_name : from_name,
                    sender_email : sender_email ,
                    phone_no : phone_no,
                    message : message,
                };

                var serviceID = "service_2igh02o";
                var templateID = "template_1krrdkk";

                emailjs.send(serviceID,templateID,params)
                .then( res => {
                    modal();
                    document.getElementById("subject").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("email_to").value = "";
                    document.getElementById("phone").value = "";
                    document.getElementById("message").value = "";

                })
                .catch();
}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);

