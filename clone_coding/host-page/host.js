

const video = document.querySelector('.first-video');
const video2 = document.querySelector('.second-video');
const playBtn = document.querySelector('.play-btn');
const playBtn2 = document.querySelector('.play-btn-2');
const videoSectionImg = document.querySelector('.video1-section-image');
const videoSectionH = document.querySelector('.video1-section-h3');
const navSection = document.querySelector('.nav-section');
const navSection2 = document.querySelector('.nav-section2');
const icon = document.querySelector('.icon-wrap');
const scrollDown = document.querySelector('.move-down-btn');

scrollDown.addEventListener('click', () => {
    window.scrollTo({top:840, behavior:'smooth'});
})

let playStatus = false; // True는 재생이 종료된 상태 또는 일시정지 상태
let playStatus2 = false
navSection.classList.add('nope');
navSection2.classList.add('nope');
window.addEventListener('scroll', () => {
    
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    console.log(scrollTop);
    if(scrollTop > 700 && scrollTop < 4468){
        navSection2.classList.remove('seen')
        navSection2.classList.add('nope');
        navSection.classList.remove('nope')
        navSection.classList.add('seen')
        navSection.style.position = 'fixed'
        
    }else if(scrollTop > 4468){
        navSection2.classList.remove('nope')
        navSection2.classList.add('seen')
        navSection.classList.remove('seen')
        navSection.classList.add('nope')
        console.log('hello');
    }else{
        navSection2.classList.remove('seen')
        navSection2.classList.add('nope');
        navSection.classList.remove('seen')
        navSection.classList.add('nope')
    }
})

// 비디오 상태에 따른 플레이 아이콘 변화
const videoStatus = () => {
    if(playStatus == true){
        video.play()
        playStatus = false
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
        
    }else{
        video.pause()
        playStatus = true
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i> `
    }
}

const videoStatus2 = () => {
    if(playStatus2 == true){
        video2.play()
        playStatus2 = false
        playBtn2.innerHTML = `<i class="fa-solid fa-pause"></i>`
        
    }else{
        video2.pause()
        playStatus2 = true
        playBtn2.innerHTML = `<i class="fa-solid fa-play"></i> `
    }
}

// 0.5초 주기로 비디오가 끝났는지 확인하는 함수
setInterval(() => {
    currentTime = video.currentTime;
    if(currentTime < 2.3){
        videoSectionImg.style.backgroundImage = "url('https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_w=480')";
        videoSectionH.innerText = "필라델피아의 호스트";
    }else if(currentTime < 5){
        videoSectionImg.style.backgroundImage = "url('https://a0.muscache.com/im/pictures/9849ff03-6166-41c5-bbf7-80c908b4820c.jpg?im_w=480')"
        videoSectionH.innerText = "뭄바이의 호스트";
    }else if(currentTime < 7.7){
        videoSectionImg.style.backgroundImage = "url('https://a0.muscache.com/im/pictures/adf2bfef-5ddc-41d6-86b5-a49d274f4f54.jpg?im_w=480')"
        videoSectionH.innerText = "요하네스버그의 호스트";
    }else{
        videoSectionImg.style.backgroundImage = "url('https://a0.muscache.com/im/pictures/b78b2eb7-2d63-4c8d-9246-6b08c457c9cc.jpg?im_w=480')"
        videoSectionH.innerText = "멕시코시티의 호스트";
    }
    if(video.ended){
        playStatus = true
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
    }
}, 500)


setInterval(() => {
    currentTime = video2.currentTime;
    if(video2.ended){
        playStatus2 = true
        playBtn2.innerHTML = `<i class="fa-solid fa-play"></i>`
    }
})
// 플레이 버튼 클릭시 videoStatus 함수 실행
playBtn.addEventListener('click', () => {    
    videoStatus()
})
playBtn2.addEventListener('click', () => {    
    videoStatus2()
})

// -------------------------------------

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const carousel = document.querySelectorAll('.carousel');
const infoSection = document.querySelectorAll('.info-wrap');
const carouselWrap = document.querySelector('.carousel-wrap');
let carouselCount = carousel.length;
let currentCarousel = 1;
let currentLeft = -350;

for(i=0; i<infoSection.length; i++){
    infoSection[i].style.opacity = '0';
}
infoSection[currentCarousel].style.opacity = '1';

const moveCarousel = (currentIdx, direction) => {
    infoSection[currentCarousel].style.opacity = '0';
    infoSection[currentIdx].style.opacity = '1';
    currentCarousel = currentIdx;
    if(direction == true){
        carouselWrap.style.left = (currentLeft -450)+'px';
        currentLeft -= 450;
        
    }else{
        carouselWrap.style.left = (currentLeft +450)+'px';
        currentLeft += 450;
    }
    
}

rightBtn.addEventListener('click', () => {
    if(currentCarousel < carousel.length-3){
        moveCarousel(currentCarousel+1, true)
    }
})

leftBtn.addEventListener('click', () => {
    if(currentCarousel > 0){
        moveCarousel(currentCarousel-1, false)
    }
})

