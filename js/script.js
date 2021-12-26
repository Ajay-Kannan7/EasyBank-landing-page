/*Icon change on click event*/
var clicked=document.querySelector('nav .close');
clicked.addEventListener('click',()=>{
    if(clicked.getAttribute('class')=='close fa fa-navicon'){
        clicked.setAttribute('class','close fa fa-close');
    }
    else{
        clicked.setAttribute('class','close fa fa-navicon');
    }
});
/*Icon change on click event*/
/*Animation for navigation dropdown*/
var open=false;
$(function(){
    $('.close').on({
        click:function(){
            if(!open){
                $('.elements').slideDown(350);
                open=true;
            }else{
                $('.elements').slideUp(350);
                open=false;
            }
        }
    });
}
);
/*Animation for navigation dropdown*/