const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = 
    '<img src = "https://scontent.fpew4-1.fna.fbcdn.net/v/t39.30808-6/679957682_122178167156839734_2706235131326766981_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3N2DHYXlgk4Q7kNvwE1tgnx&_nc_oc=AdqbhTgTItRZSWtpLBkS4Bda5pKKE-tg0oieCisrJEEHftm4AEWXT4v2xWD9KYpwTQM&_nc_zt=23&_nc_ht=scontent.fpew4-1.fna&_nc_gid=NClopANvycPBuGeyzCzt7w&_nc_ss=7b289&oh=00_AQErfIKz3rBk1jJV4iS9UzTsR4DchMq15M_0ymCRWIT7Gw&oe=6A7B8675" alt = "" />'
    title.innerHTML = 'Lorem ipsom dollar sit amet'
    excerpt.innerHTML = 
    'Full Stack Web Development Intern at HindukushSoft Technologies'
    profile_img.innerHTML = 
    '<img src = "https://scontent.fpew4-1.fna.fbcdn.net/v/t39.30808-6/678241841_122177935046839734_205262067314836126_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DkUrveUCO6wQ7kNvwGGpAcx&_nc_oc=Adqj5D66f5j1JQrg0-NZy_YRLDYEHo2yCWvLgcqWmoGlYcHQqCta2fZevS9pKdxDbIY&_nc_zt=23&_nc_ht=scontent.fpew4-1.fna&_nc_gid=ByrNMA2q-5lHJfFCTqVEDg&_nc_ss=7b289&oh=00_AQFpZsQHlIlUKOoVJawyGzrG5b5uL6F92zpgVzp5CHyoUw&oe=6A7BAF58" alt = "" />'
    name.innerHTML = 'Abdur Rahman'
    date.innerHTML = 'July 25, 2003'
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}