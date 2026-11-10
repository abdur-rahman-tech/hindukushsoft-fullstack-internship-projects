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
    '<img src = "https://scontent.fisb9-1.fna.fbcdn.net/v/t39.30808-6/678241841_122177935046839734_205262067314836126_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEQtaqTkpCM3yAZBFQyHzM7tOwqUkZNbT207CpSRk1tPbxcU4C4dN9Ij_sB341_5__8oyHDYuPidnntNBTcpP_Y&_nc_ohc=LkHejAnkT64Q7kNvwFJ9GlU&_nc_oc=AdqmeCFYDfjw9UbONMHXiTT6fE_up4jIfnNReOzD7za-9dJ1jGfYSZojRxQ6n-BnpXg&_nc_zt=23&_nc_ht=scontent.fisb9-1.fna&_nc_gid=khDrj_0olo_rI6S7J-C23g&_nc_ss=7b2a8&oh=00_AQTWCDSCWREUkN3tphqk7GzhDzaYMLbMsl1mt52tJurNfw&oe=6AF92618" alt = "" />'
    title.innerHTML = 'HindukushSoft Technologies'
    excerpt.innerHTML = 
    'Full Stack Web Development Intern at HindukushSoft Technologies'
    profile_img.innerHTML = 
    '<img src = "https://randomuser.me/api/portraits/men/45.jpg" alt = "" />'
    name.innerHTML = 'Abdur Rahman'
    date.innerHTML = 'July 25, 2003'
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}