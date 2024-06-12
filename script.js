const myTimeout = setTimeout(loading, 4000);
    function loading(){
        document.getElementById("demo").style.display = "none";
    }

let active = false;

function openNav(){
    document.getElementById("sideNav").src = active?
    'menu.png' : 'close.png';
    document.getElementById("mySidenav").style.width = active?
    "0%": "60%";
    document.getElementById("main").style.marginLeft = active?
    " 0em"  :  " 1.5em" ;
    document.body.style.backgroundColor = active?
   "white" :"rgba(1,1,1,0.1)";
    active = !active;
}
onscroll = () => {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("main").style.marginLeft ="0em";
    document.body.style.backgroundColor = "white";
    document.getElementById("sideNav").src='menu.png';

}
let openRead = false;

function readMore(){
    document.getElementById("dots").style.display = readMore?
    "none" : "block";
    document.getElementById("more").style.display = readMore?
    "block" : "none";
    readMore = !readMore;
}

let Openread = false;

function ReadMore(){
    document.getElementById("Dots").style.display = Openread?
    "block" : "none";
    document.getElementById("ShowMore").style.display = Openread?
    "none" : "block";
    Openread = !Openread;
}

