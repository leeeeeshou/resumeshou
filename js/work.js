

const area = document.querySelector(".area");
const boxpic = document.querySelector(".box");

(function() {
  
  const BASE_URL = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-227D1311-2FA7-4B1F-B634-F646491CED64&format=JSON&locationName=%E8%87%BA%E5%8C%97%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82&elementName=";
  axios.get(BASE_URL)
  
  .then(response=> {

 const citynorth = response.data.records.location[0].locationName;  
const citysouth = response.data.records.location[1].locationName;  
const northweather = response.data.records.location[0].weatherElement[0].time[0].parameter.parameterValue;       
const southweather =response.data.records.location[1].weatherElement[0].time[0].parameter.parameterValue;

    $('.area').hover(function(){
      northweatherpic(northweather,area,'areachang')},
    function(){
        southweatherpic(southweather,area,'areachang')
      })
    $('.card').hover(function(){
      northweatherpic(northweather,boxpic,'box');
      $('.boxtitle').text('Graduate');
      $('.content ul').html(' <li>台北市</li><li>東吳大學</li><li>哲學系</li>')
    
    },
    function(){
        southweatherpic(southweather,boxpic,'box');
        $('.boxtitle').text('From')
        $('.content ul').html(' <li>台南市</li><li>南區</li><li>南部人</li>')
      })
    
  /*boxpic.addEventListener('mouseover', () => northweatherpic(northweather,boxpic));
 boxpic.addEventListener('mouseout', () => southweatherpic(southweather,boxpic));  */
    
console.log();
    
 
  })
  


})();

function southweatherpic(x,y,z){
     y.classList.remove(z)
  void y.offsetWidth;
  y.classList.add(z)
   /*雨天*/
  if(x>=8 && 14>=x){
y.style.backgroundImage="url(https://imgcdn.cna.com.tw/www/WebPhotos/800/20220802/1152x768_20220802000021.jpg)";
  }
  /*陰天*/
  else if(x>=4 && 7>=x){ y.style.backgroundImage="url(https://img.ltn.com.tw/Upload/news/600/2021/04/29/3515427_4_1.jpg)"}
  /*晴天*/
else if(x>=3){ y.style.backgroundImage="url(https://memory.culture.tw/ArchivesUpload/material_img/20210527203102858004/1094@%E5%AE%89%E5%B9%B3.jpg)"}
  /*打雷*/
  else if(x>=15 && 18>=x){ y.style.backgroundImage="url(https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2016/04/11/20160411-114832_U5217_M145802_46bc.jpg?itok=P6yKPy8x)"}
  /*陰天*/
  else if(x>=19 && 23>=x){ y.style.backgroundImage="url(https://live.staticflickr.com/5259/5506454260_3857a57867_b.jpg)"}
  else if(x>=24 && 41>=x){ y.style.backgroundImage="url(https://images.radio-canada.ca/q_auto,w_635/v1/ici-info/16x9/brouillard-arbres-generique.JPG)"};

}


function northweatherpic(x,y,z){
   y.classList.remove(z)
  void y.offsetWidth;
  y.classList.add(z)
  /*雨天*/
  if(x>=8 && 14>=x){
y.style.backgroundImage="url(https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-cloudy-cloud-shape-rainy-background-dark-clouds-cover-the-ferocity-before-image_1009050.jpg)";
  }
  /*陰天*/
  else if(x>=4 && 7>=x){ y.style.backgroundImage="url(https://live.staticflickr.com/5259/5506454260_3857a57867_b.jpg)"}
  /*晴天*/
else if(x>=3){ y.style.backgroundImage="url(https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-a-sunny-day-in-chengdu-image_1007598.jpg)"}
  else if(x>=15 && 18>=x){ y.style.backgroundImage="url(https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2016/04/11/20160411-114832_U5217_M145802_46bc.jpg?itok=P6yKPy8x)"}
  else if(x>=19 && 23>=x){ y.style.backgroundImage="url(https://live.staticflickr.com/5259/5506454260_3857a57867_b.jpg)"}
  else if(x>=24 && 41>=x){ y.style.backgroundImage="url(https://images.radio-canada.ca/q_auto,w_635/v1/ici-info/16x9/brouillard-arbres-generique.JPG)"};
  
  
                  
}

function renderNavbarAvatar(data) {
 
function renderProfile(city,time,cloud) {
 
  
}

}


/*$('.product').click(function(){
    $('.product').css('width',"5%").css('borderRadius','85px')
    $(this).css('width',"40%").css('borderRadius','5px')
})*/




function changbg(bg){
  $('.productarea').css('backgroundImage','url('+ bg +')')
}

$('#img1').click(function(){
  changbg('css/Beauty001.png')
})
$('#img2').click(function(){
  changbg('css/Beauty002.png')
})
$('#img3').click(function(){
  changbg('css/Beauty003.png')
})
$('#img4').click(function(){
  changbg('css/Beauty004.png')
})

/*主頁文字*/
const box = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const title = document.querySelector('.number')
const titleText = document.querySelector('.number').innerText
let numstring = title.textContent;
let splitnumber = numstring.split('')



const randomText = (amount) => {
  var a = "";
  for (var i = 0; i < amount; i++)
    a += box[Math.floor(Math.random() * box.length)];
  return a;
};

  
  for (let j = 0; j <= titleText.length; j++) {
    window.setTimeout(function () {
      var current = j;
      for (let k = 0; k <= 5; k++) {
        window.setTimeout(function () {
          var correct = titleText.slice(0, current);
          correct += randomText(titleText.length - current);
          title.innerText = correct;
        }, 1 * k);
      }
    }, 3 * j);
  }

window.setTimeout(function(){
  title.textContent='';
  for(let i =0;i<splitnumber.length;i++){
  title.innerHTML+="<span>" + splitnumber[i] + "</span>"
}
},1600)




/*exp*/
$('.next').click(function(){
  $('hr').css('width','0px');
  $('.rightcover').css('top','-100%'); 
  $('.leftcover').css('top','-100%');
$('.detailtext').text(' ');
$('.expdetial').css('width','0').css('heigth','60%');
$('.rwdexpdetial').css('left','5%').css('bottom','5%').css('width','90%');

  
  
 
setTimeout(function(){$('.rightsitecontent').html('<div class="secondexpyear">Front desk & executive level</div><div class="exppic" id="imgtop"></div><div class="exppic" id="imgdown"></div>');
 $('.expyear').css('bottom','90%').text('2020-2022 & 2023-2024').css('border','none').css('width','100%').css('left','0').css('justifyContent','start');
  $('.explt').text('Hotel deleau').css('fontSize','3rem').css('color','#735E59');
 $('.leftsitecontent').html("");
 $('.expplace').css('backgroundColor','#ECEADA')
$('.expbody').css('backgroundColor','#ECEADA');
 $('.rightcover').css('backgroundColor','#ECEADA'); 
$('.leftcover').css('backgroundColor','#ECEADA');               
$('.expdetial').css('width','35%').css('height','60%').css('left','15%').css('bottom','10%');
$('.expdetial .detailtext').text('I worked as a front desk receptionist at the Anping Hotel de leau   in Tainan.The job responsibilities were similar to those as landis Resort , but at the Hotel de leau, there was a greater emphasis on individual problem-solving abilities.During my tenure at the Hotel de leau, I developed strong independent working skills and successfully completed various projects assigned in the workplace.').css('fontSize','1.2rem').css('lineHeight','1.2');
$('.rwdexpdetial .detailtext').text('I worked as a front desk receptionist at the Anping Hotel de leau   in Tainan.The job responsibilities were similar to those as landis Resort , but at the Hotel de leau, there was a greater emphasis on individual problem-solving abilities.During my tenure at the Hotel de leau, I developed strong independent working skills and successfully completed various projects assigned in the workplace.');

                     },600)
  

})


$('.previse').click(function(){
  $('hr').css('width','100%');
  $('.rightcover').css('top','100%'); $('.leftcover').css('top','100%');
$('.detailtext').text(' ');
$('.expdetial').css('width','0').css('heigth','60%');
$('.rwdexpdetial').css('left','10%').css('bottom','10%').css('width','80%');


setTimeout(function(){$('.rightsitecontent').html('<h2>LANDIS<br>&nbsp  &nbsp RESORT</h2></div></div>');
 $('.expyear').css('bottom','0%').text('2019-2020').css('border','2px solid #735E59').css('width','20%').css('justifyContent','center').css('left','60%').css('fontSize','1.5rem');
  $('.explt').text('FRONT DESK').css('color','#735E59');
 $('.leftsitecontent').html('<img src="https://leeshou.my.canva.site/images/3470714eb7515b9813b8012490cef478.jpg" alt="">');
$('.expbody').css('backgroundColor','gainsboro');
 $('.rightcover').css('backgroundColor','gainsboro'); 
 $('.expplace').css('backgroundColor','gainsboro')
$('.leftcover').css('backgroundColor','gainsboro');  
$('.expdetial').css('width','80%').css('height','20%').css('left','').css('bottom','-15px');
$('.detailtext').text('I have worked as a front desk receptionist at the landis Resort Hotel on Yangmingshan.My responsibilities included handling check-in and check-out procedures, managing account entries, reconciliation, and settlements using the Jin Xu system.Additionally, I welcomed guests, assisted with inquiries, provided customer support, and resolved issues.I also performed room service, operated the telephone switchboard, directed calls, introduced hotel facilities, and carried out other tasks assigned by my supervisors.').css('fontSize','1rem').css('lineHeight','1');
                     },600)
  

})
/*exp */ 

/*rwd*/

let i = 0;
$('.ham').click(function(){
if(i%2==0){
    $('.rwdbanner').css('display','block')
    i=i+1
  }
else{
  $('.rwdbanner').css('display','none')
  i=i+1
}})
$('.rwdlink').click(function(){
  $('.rwdbanner').css('display','none');
  i=i+1;
})

$(document).ready(function() {

  const $target = $('.splinearea')[0];


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('The div is in the viewport!');
        $('.spline').css('display','block')
      } else {
        console.log('The div is out of the viewport!');
        $('.spline').css('display','none')
      }
    });
  });
  
   observer.observe($target);
  });
  


  /*footer */
  if($(window).width()>992){
  $('.phone').hover(function(){
    $('.phone').css('width','30%');
    $('.phone .footeritem').css('marginLeft','10%').css('opacity',1)
    $('.footer .canvas').css('width','60%').css('height','10vh')
  },
  function(){
    $('.phone').css('width','8%');
    $('.phone .footeritem').css('marginLeft','60%').css('opacity',0)
    $('.footer .canvas').css('width','100%').css('height','100vh')
  }
)

$('.mail').hover(function(){
  $('.mail').css('width','30%');
  $(' .mail .footeritem').css('marginLeft','10%').css('opacity',1);
  $('.footer .canvas').css('width','60%').css('height','10vh')
},
function(){
  $('.mail').css('width','8%');
  $('.footeritem').css('marginLeft','60%').css('opacity',0)
  $('.footer .canvas').css('width','100%').css('height','100vh')
}
)
}else{
  $('.phone').hover(function(){
    $('.phone').css('width','90%');
    $('.phone .footeritem').css('marginLeft','10%').css('opacity',1).css('fontSize','2rem')
  },
  function(){
    $('.phone').css('width','80%');
    $('.phone .footeritem').css('marginLeft','60%').css('opacity',0).css('fontSize','1rem')
  }
)

$('.mail').hover(function(){
  $('.mail').css('width','90%');
  $('.mail .footeritem').css('marginLeft','10%').css('opacity',1).css('fontSize','2rem')
},
function(){
  $('.mail').css('width','80%');
  $('.mail .footeritem').css('marginLeft','60%').css('opacity',0).css('fontSize','1rem')
}
)
}