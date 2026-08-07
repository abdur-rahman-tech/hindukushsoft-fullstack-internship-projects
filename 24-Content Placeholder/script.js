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
    title.innerHTML = 'HindukushSoft Technologies'
    excerpt.innerHTML = 
    'Full Stack Web Development Intern at HindukushSoft Technologies'
    profile_img.innerHTML = 
    '<img src = "https://scontent.fpew3-1.fna.fbcdn.net/v/t39.30808-1/581955891_832297109397129_878496008221517666_n.jpg?stp=dst-jpg_tt6&cstp=mx1798x1816&ctp=p160x160&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHwWeTQMeXBFKNbsnGYjtmYXDNP2QP9_qlcM0_ZA_3-qUV5OLhDB3ipLZp5fAn75hsq05C4Q9la6d2SVr1-W-YD&_nc_ohc=2qZWmQse4UUQ7kNvwHkyBrN&_nc_oc=AdqXIctaeiUuVEtuzHwScJgXJkyxoWad3iyWzZrZK9b5sfTZj2g_lck8X2ylELOhmGM&_nc_zt=24&_nc_ht=scontent.fpew3-1.fna&_nc_gid=srZPXmDw5ZG1ELNduSumFA&_nc_ss=7b2a8&oh=00_AQHiV7TzbeNVT5MtFApV-6weTai3Wn_MKslOdYQctTsM0Q&oe=6A7BB6AB" alt = "" />'
    name.innerHTML = 'Abdur Rahman'
    date.innerHTML = 'July 25, 2003'
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}