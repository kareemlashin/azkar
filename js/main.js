$(document).ready(function () {
     let countAll=$(".count-num").attr("count-num");
     $("#open-side").click(function(){
          $(".side-nav").animate({left:"0px"},1000)
     })
     $("#close-side").click(function(){
          $(".side-nav").animate({left:"-100%"},1000)
     })
     let btn_plus=$(".plus");
     let count_num=$(".count-num");
     let refresh=$(".refresh");
     for(let x =0;x<btn_plus.length;x++)
     {
          btn_plus[x].addEventListener("click",function(){
               count_num[x].innerHTML=++countAll;
          })
          refresh[x].addEventListener("click",function(){
               count_num[x].innerHTML=0;
               countAll=0;
          })
     }
});

