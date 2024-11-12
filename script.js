     // Page Navigation
     function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    // Form Submission
    function submitForm(event) {
        event.preventDefault();
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
        responseMessage.style.color = 'green';
        event.target.reset();
    }

// Form submission handler
// function submitForm(event) {
//     event.preventDefault();
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = ;
    
//     // Clear the form fields
//     document.getElementById('contactForm').reset();
// }

// Set default page to 'Home'
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

      // Testimonials Data
      const testimonials = [
        {
            name: "Kristoffer Mellstrom",
            data: "56 reviews·36 photos",
            image: "./Assets/kristof.png",
            date: "2 months ago",
            text: "Chang provided great service and helped me with my s80 Volvo. Repair was done fast and very reasonable priced. I would highly recommend Car Connex.",
            stars: 5
        },
        {
            name: "Dia Gault",
            data: "Local Guide·14 reviews·5 photos",
            image: "./Assets/Dia.png",
            date: "2 months ago",
            text: "I'm very impressed with the efficiency & thoroughness of this shop! I had a coolant leak in my 2012 Mercedes-Benz C250, so I called to see if they had anything available that day, and they said that I could come in right away. I told them my issue (my coolant kept running low, after filling like 3 separate times), filled out a form, and they said they'd run some tests and that they'd likely have it fixed by lunch time the next day.",
            stars: 5
        },
        {
            name: "Mary MacGregor",
            data: "Local Guide·6 reviews",
            image: "./Assets/mary.png",
            date: "2 months ago",
            text: "Chang is a reliable and professional mechanic. He never price gouges and is very clear about what needs to be done. We trust Chang with all our cars!",
            stars: 5
        },
        {
            name: "Shannon Spencer",
            data: "10 Reviews",
            image: "./Assets/unnamed.png",
            date: "2 months ago",
            text: "Wonderful service! A few months ago, I stopped by to have my brakes checked. The mechanic was straight forward with the quote and asked that I set up an appointment whenever I was ready. I called them last week and made an appointment for Friday. They were genuine, punctual, and the repairs cost a bit less than the quote. I’m not car savvy when it comes to car repair costs so in addition to asking for recommendations, I rely on my instincts when choosing mechanics and it didn’t fail me this time. If you are in need of car repairs, I’d highly recommend calling Car Connex!",
            stars: 5
        },
        {
            name: "Janet Rau",
            data: "Local Guide·74 reviews·70 photos",
            image: "./Assets/janet.png",
            date: "2 months ago",
            text: "Chang has taken care of our family's cars for the last 17 years. He is the most trustworthy mechanic ever.",
            stars: 5
        },
        {
            name: "Daryl Harvey",
            data: "3 Reviews",
            image: "./Assets/unnamed(1).png",
            date: "2 months ago",
            text: "Each and every time that I take my vehicle to Car Connex they are very thorough with any repairs that I need A description of what was wrong and how it was corrected is another great thing Car Connex does. They are the best !!!!",
            stars: 5
        },
        {
            name: "Krystal Lane",
            data: "2 Reviws",
            image: "./Assets/unnamed(2).png",
            date: "2 months ago",
            text: "Chang and his team could not be kinder and more transparent. As a woman and mother, more often than not it is hard to trust mechanics and car service teams without feeling taken advantage of. I brought my car in around 9:45am due to my starter dying. Chang instantly diagnosed the problem and got me pricing (pricing that didn’t scare me on how we could afford to fix the car). His team also found I needed an oil change and I added it without a doubt. The car was ready for pickup before 2pm, which is unheard of. I was ready to be without a car for one to three days. When I picked up the advised me on some maintenance moving forward but nothing was pushy or aggressive but like a friend letting you know. Overall amazing experience, and when I need more work done we’ll be back.",
            stars: 5
        },
        {
            name: "Henry Mattson",
            data: "Local Guide·21 reviews",
            image: "./Assets/henry.png",
            text: "You can trust this place. I had a good idea what was wrong with my car. I took it here, and the owner inspected and quoted just that. It was a part where I would not have been surprised if other (not 100% required) repairs were recommended to be added on. They didn't try to pitch unnecessary extras or use scare tactics. Great owner, good communication, fair price, quick work, and just a pleasant experience overall.",
            stars: 5
        },
        {
            name: "Cameron Bard",
            data: "13 reviews·2 photos",
            image: "./Assets/cam.png",
            date: "2 months ago",
            text: "I called and scheduled an appointment for a week later. That day I dropped my car off, and Young and Chang took care of my issue within a few hours and for a very reasonable price. They also were honest about the other wear items on my car and didn't try to upsell me. Outstanding service; highly recommended.",
            stars: 5
        },
        {
            name: "Adrienne D",
            data: "9 Reviews",
            image: "./Assets/adri.png",
            date: "2 months ago",
            text: "Great auto service. Chang changed my brake pads without all unnecessary add on.  I trust  Car Connex with my car.. Highly recommend .",
            stars: 5
        },
    ];

     // Generate Testimonials
     function generateTestimonials() {
        const testimonialContainer = document.querySelector('.testimonials');
        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.className = 'testimonial';
            testimonialElement.innerHTML = `
                <div class="testimonial-header">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                    <h3>${testimonial.name}</h3>
                </div>
                <p>${testimonial.data}</p><br>
                <p>${testimonial.date}</p>
                <p>${testimonial.text}</p><br>
                <div class="stars">
                    ${'★'.repeat(testimonial.stars)}
                </div>
            `;
            testimonialContainer.appendChild(testimonialElement);
        });
    }

    // Initialize testimonials when the page loads
    document.addEventListener('DOMContentLoaded', generateTestimonials);