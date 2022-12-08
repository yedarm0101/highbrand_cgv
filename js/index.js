/* --------- common function --------- */
let linkprevent = document.querySelectorAll(".link");
for(a of linkprevent){
    a.addEventListener("click", e => e.preventDefault());
}


let titleP = document.querySelectorAll('.cultureplex .title p');
let titleH2 = document.querySelector('.cultureplex .title h2');
 
window.addEventListener('scroll',()=>{
    for(p of titleP){
        if(window.pageYOffset > 0){
            p.classList.add('active');
            titleH2.classList.add('active');
        } else{
            titleH2.classList.remove('active');
            p.classList.remove('active');
    }
}
})
//컬쳐플렉스 title 나타나는 코드
 
let description = document.querySelectorAll('.cp_description');
 
for(i of description){
  i.querySelectorAll('li').forEach((item,idx)=>{
    item.style.left = idx+'00%';
  })
}
 
let cpWrapper = document.querySelector('.cp_wrapper');
let cpContainer = document.querySelector('.cp_container');
let cpSlide = document.querySelectorAll('.cp_container > li');
let prevBtn = document.querySelector('.btn_prev');
let nextBtn = document.querySelector('.btn_next');
let currentIdx = 0;
 
/*슬라이드 가로배치*/
cpSlide.forEach((item,idx)=>{
  item.style.left = `${idx*100}%`;
})
 
/*배경이미지 설정 */
let prevImg = document.querySelectorAll('.cp_detail .preview_img img');
for(i of prevImg){
  i.addEventListener('click',(e)=>{
    let src = e.target.getAttribute('src');
    cpContainer.style.backgroud = `url(${src})`;
  })
}
 
/*버튼누르면 이동*/
function moveSlide(idx){
  cpContainer.style.left = `${idx*-100}%`;
  currentIdx = idx;
  activeButton();
}
nextBtn.addEventListener('click',()=>{
  moveSlide(currentIdx+1);
})
prevBtn.addEventListener('click',()=>{
  moveSlide(currentIdx-1);
})
/*첫번째,마지막에서 버튼 사라지기 */
activeButton();
function activeButton(){
  if(currentIdx == (cpSlide.length - 1)){
    nextBtn.classList.add('disabled');
  } else{
    nextBtn.classList.remove('disabled');
  }
  if(currentIdx == 0){
    prevBtn.classList.add('disabled');
  } else{
    prevBtn.classList.remove('disabled');
  }
}
/* 페이저 누르면 해당 슬라이드로 가기*/
 
let pagerBtn = document.querySelectorAll('.cultureplex .pager a');
pagerBtn.forEach((item,idx)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    moveSlide(idx);
    for(pb of pagerBtn){
      pb.classList.remove('active');
    }
    pagerBtn[currentIdx].classList.add('active');
  })
})
 
/*
let previewImg = document.querySelectorAll('a .preview_img');
 
 previewImg.forEach((item,idx)=>{
  item.addEventListener('click',(e)=>{
    let targetIdx = e.target.getAttribute('src')
    let contents = document.querySelectorAll('.cultureplex .contents');
    contents.forEach((item,idx)=>{
      item[idx].style.background-image = ;
    });
  });
 })
 */
 



 /* --------- section.event slide --------- */

let slidewrap = document.querySelector(".event .slide"),
    slide = [...slidewrap.querySelectorAll("li")],
    slidelength = slide.length,
    slidecount = 0,
    eventindex = 1,
    eventindex_new = 1;

slidewrap.style.width = (slidelength-1) * (422+27) + 422 + "px";
if(slidelength < 3){
    document.querySelector(".event .pager").classList.add("hidden")
};

function moveslide(){
    slidewrap.style.marginLeft = slidecount*-449 + "px";
};
function pagecal(){
    eventindex < eventindex_new ?
        slidecount += slide.slice(eventindex*3, eventindex_new*3).length:
        slidecount -= slide.slice(eventindex_new*3, eventindex*3).length;
    eventindex = eventindex_new;
};

document.querySelector(".event .btn_next").addEventListener("click", (e)=>{
    e.preventDefault();
    ++eventindex_new;
    pagecal();
    moveslide();
});

document.querySelector(".event .btn_prev").addEventListener("click", (e)=>{
    e.preventDefault();
    --eventindex_new;
    pagecal();
    moveslide();
});

/* --------- section.noitce --------- */

let noticeul = document.querySelector(".notice ul"),
    noticeli = noticeul.querySelectorAll("li"),
    noticeindex = 0;


noticeli_clone = noticeli[0].cloneNode(true);
noticeul.appendChild(noticeli_clone);

function noticeslide (){
    noticeul.style.marginTop = -54 * ++noticeindex + "px";
    if(noticeindex >= noticeli.length){
        noticeindex = 0;
        setTimeout(()=>{noticeul.style.transition = "none";}, 1100);
        setTimeout(()=>{noticeul.style.marginTop = "0px";}, 1100);
        setTimeout(()=>{noticeul.style.transition = "margin-top 1s";}, 1200);
    }
}

let noticetimer = setInterval(noticeslide, 2000);
noticeul.addEventListener("mouseenter", ()=> clearInterval(noticetimer));
noticeul.addEventListener("mouseleave", ()=> noticetimer = setInterval(noticeslide, 3000));