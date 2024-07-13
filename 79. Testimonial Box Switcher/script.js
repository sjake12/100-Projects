const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-avatar");
const username = document.querySelector(".username");
const twitterHandle = document.querySelector(".twitter-handle");

const testimonials = [
  {
    name: "Ben Furfie",
    position: "@frontendben",
    photo:
      "https://pbs.twimg.com/profile_images/1196645005378478080/79mVokZP_400x400.jpg",
    text: "I've been writing CSS for over 20 years, and up until 2017, the way Iwrote it changed frequently. It's not a coincidence Tailwind wasreleased the same year. It might look wrong, but spend time with it andyou'll realise semantic CSS was a 20 year mistake.",
  },
  {
    name: "Guillermo Rauch",
    position: "@rauchg",
    photo:
      "https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg",
    text: "If I had to recommend a way of getting into programming today, it would be HTML + CSS with tailwindcss",
  },
  {
    name: "Debbie O'Brien",
    position: "@debs_obrien",
    photo:
      "https://pbs.twimg.com/profile_images/1537114604278530048/FMrBa87o_400x400.jpg",
    text: "Thanks Steve will give it a read. Although I am a mega tailwindcssfan. Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try",
  },
  {
    name: "Didier Catz",
    position: "@didiercatz",
    photo:
      "https://pbs.twimg.com/profile_images/1757238871065059328/WHduXgEC_400x400.jpg",
    text: "Tailwind makes writing code feel like I'm using a design tool.",
  },
  {
    name: "Sarah Dayan",
    position: "@frontstuff_io",
    photo:
      "https://pbs.twimg.com/profile_images/1639023694298206209/hN-73cWF_400x400.jpg",
    text: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling.",
  },
  {
    name: "Marcel Pociot",
    position: "@marcelpociot",
    photo:
      "https://pbs.twimg.com/profile_images/1572564016916008961/n7drNq_E_400x400.jpg",
    text: "Tailwind made me enjoy frontend development again and gave me the confidence that I can realize any design - no matter how complex it may be.",
  },
];

let counter = 1;

function showNextTestimonial() {
  const { name, position, photo, text } = testimonials[counter];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  twitterHandle.innerHTML = position;

  counter++;

  if (counter > testimonials.length - 1) {
    counter = 0;
  }
}

setInterval(showNextTestimonial, 10000);
