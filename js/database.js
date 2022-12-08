
/* --------------- 순욱 : .modal_ticketing --------------- */
let info_movielist = [

    {
        id : "m2003_001",
        title : "러브 액츄얼리",
        grade : "15",
        ticketrate: 1887000,
        runningTime : 130,
        imgurl : "img_modalthumb_m2003_001.jpg"
    },

    {
        id : "m2008_001",
        title : "과속스캔들",
        grade : "12",
        ticketrate: 8245523,
        runningTime : 108,
        imgurl : "img_modalthumb_m2014_001.jpg"
    },
    {
        id : "m2008_002",
        title : "아이언맨",
        grade : "12",
        ticketrate: 4300365,
        runningTime : 126,
        imgurl : "img_modalthumb_m2008_002.jpg"
    },
    {
        id : "m2012_001",
        title : "광해",
        grade : "15",
        ticketrate: 12323595,
        runningTime : 131,
        imgurl : "img_modalthumb_m2012_001.jpg"
    },

    {
        id : "m2013_001",
        title : "겨울왕국",
        grade : "all",
        ticketrate: 10303058,
        runningTime : 108,
        imgurl : "img_modalthumb_m2013_001.jpg"
    },


    {
        id : "m2014_001",
        title : "명량",
        grade : "15",
        ticketrate: 17615844,
        runningTime : 128,
        imgurl : "img_modalthumb_m2014_001.jpg"
    },
    {
        id : "m2014_002",
        title : "국제시장",
        grade : "12",
        ticketrate: 14261427,
        runningTime : 126,
        imgurl : "img_modalthumb_m2014_002.jpg"
    },

    {
        id : "m2015_001",
        title : "암살",
        grade : "15",
        ticketrate: 12705783,
        runningTime : 140,
        imgurl : "img_modalthumb_m2015_001.jpg"
    },

    {
        id : "m2017_001",
        title : "택시운전사",
        grade : "15",
        ticketrate: 12186684,
        runningTime : 137,
        imgurl : "img_modalthumb_m2017_001.jpg"
    },

    {
        id : "m2017_002",
        title : "범죄도시",
        grade : "18",
        ticketrate: 6880546,
        runningTime : 121,
        imgurl : "img_modalthumb_m2017_002.jpg"
    },
    {
        id : "m2018_001",
        title : "국가부도의 날",
        grade : "12",
        ticketrate: 3755233,
        runningTime : 114,
        imgurl : "img_modalthumb_m2018_001.jpg"
    },

    {
        id : "m2019_001",
        title : "극한직업",
        grade : "15",
        ticketrate: 16266338,
        runningTime : 111,
        imgurl : "img_modalthumb_m2019_001.jpg"
    },
    {
        id : "m2019_002",
        title : "알라딘",
        grade : "all",
        ticketrate: 12797929,
        runningTime : 128,
        imgurl : "img_modalthumb_m2019_002.jpg"
    },


    {
        id : "m2022_001",
        title : "블랙 팬서: 와칸다 포에버",
        grade : "12",
        ticketrate: 2018531,
        runningTime : 161,
        imgurl : "img_modalthumb_m2022_001.jpg"
    },
    {
        id : "m2022_002",
        title : "올빼미",
        grade : "15",
        ticketrate: 1901227,
        runningTime : 118,
        imgurl : "img_modalthumb_m2022_002.jpg"
    },
    {
        id : "m2022_003",
        title : "압꾸정",
        grade : "12",
        ticketrate: 413334,
        runningTime : 112,
        imgurl : "img_modalthumb_m2022_003.jpg"
    },
];



/* --------------- section_movie --------------- */

let section_movietitle = document.querySelector(".section_movie ul.scrollstyle"),
    section_movie_sortbtn = document.querySelectorAll("input[name='movieTitle_sort']"),
    movietitle_sorted_abc = [...info_movielist].sort((a, b)=>a.title < b.title ? -1 : a.title > b.title ? 1 : 0),
    movietitle_sorted_rate = [...info_movielist].sort((a, b)=>b["ticketrate"] - a["ticketrate"]),
    
    section_movieitem = [];

function autofill_movietitle(list){
    let movietitle_printlist = [];
    for(t of list){
        movietitle_printlist += 
            `<li>
                <input type="radio" name="movieTitle" id="${t.id}">
                <label for="${t.id}" class="grade_${t.grade}" data-src=${t.imgurl}>${t.title}</label>
            </li>`;
    };
    section_movietitle.innerHTML = movietitle_printlist;
    section_movieitem = section_movietitle.querySelectorAll("li label");

    for(i of section_movieitem){
        i.addEventListener("click", (e)=>{
            let imgsrc = "img/" + e.target.getAttribute("data-src");
            section_ticketinfoimg.setAttribute("src", imgsrc);
            section_ticketinfotitle.innerText = e.target.innerText;
        });
    };
};

autofill_movietitle(movietitle_sorted_rate);

for(i of section_movie_sortbtn){
    i.addEventListener("click", (e)=>{
        e.currentTarget.getAttribute("id") == "movietitle_sorted_rate" ?
        autofill_movietitle(movietitle_sorted_rate):
        autofill_movietitle(movietitle_sorted_abc);
        console.log(section_movieitem);
    });
};
