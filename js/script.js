// Header infos

let icons = document.querySelectorAll('.top-header__contacts-icon');
let infos = document.querySelectorAll('.contacts-textblock')
icons.forEach(function(item){
   let icon = item;
   icon.addEventListener("click", function(e){
      if(icon.classList.contains('open')){
         icon.classList.remove('open');
         icon.nextElementSibling.classList.remove('open');
      }else{icons.forEach((item)=>{item.classList.remove('open')});
         icon.classList.add('open');
      infos.forEach((item)=>{item.classList.remove('open')});
      icon.nextElementSibling.classList.add('open');}
   })
})

//Burger menu

let body = document.body;
let burger = document.querySelector('.menu-header__burger');
let menu = document.querySelector('.menu-header__list');
burger.addEventListener("click", function(e){
   burger.classList.toggle('open');
   menu.classList.toggle('open');
   body.classList.toggle('lock');
})

//footer menu

let screenWidth = document.documentElement.clientWidth;
let titles = document.querySelectorAll('.footer-column__title');
let sections = [];
for (i=0; i<titles.length; ++i){
   sections[i]=titles[i].nextElementSibling;
}
titles.forEach(function(item){
   let title = item;
   title.addEventListener("click", function(e){
      if(title.classList.contains('open')){
         title.classList.remove('open');
         title.nextElementSibling.classList.remove('open');
      }else{titles.forEach((item)=>{item.classList.remove('open')});
         title.classList.add('open');
      sections.forEach((item)=>{item.classList.remove('open')});
      title.nextElementSibling.classList.add('open');}
})
})

// spoiler

let spoilerNames=document.querySelectorAll('.spoiler-items__title');
let spoilerTexts=document.querySelectorAll('.spoiler-items__text');
for (i=0; i<spoilerNames.length;++i){
   let spoilerName = spoilerNames[i]
   spoilerName.addEventListener('click', function(){
      spoilerNames.forEach((item)=>{item.classList.remove('open')});
      spoilerTexts.forEach((item)=>{item.classList.remove('open')});
      spoilerName.classList.add('open');
      spoilerName.nextElementSibling.classList.add('open');
   })
}