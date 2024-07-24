document.addEventListener("DOMContentLoaded", function() {
   function changbg(img){
    $('.product').css('backgroundImage','url('+ img+')')
   }
$('#img1').click(function(){
    changbg('https://firebasestorage.googleapis.com/v0/b/projectshop-6d293.appspot.com/o/re%2FBeauty001.png?alt=media&token=aa8d920b-5ff3-4075-8937-75697bffe7ac')
});
$('#img2').click(function(){
    changbg('https://firebasestorage.googleapis.com/v0/b/projectshop-6d293.appspot.com/o/re%2FBeauty002.png?alt=media&token=b05f6c01-981f-4087-acbe-c1e317d7f1ea')
});
$('#img3').click(function(){
    changbg('https://firebasestorage.googleapis.com/v0/b/projectshop-6d293.appspot.com/o/re%2FBeauty003.png?alt=media&token=5f33e075-ac87-47e1-8f60-5146a9969818')
});
$('#img4').click(function(){
    changbg('https://firebasestorage.googleapis.com/v0/b/projectshop-6d293.appspot.com/o/re%2FBeauty004.png?alt=media&token=57900d8c-7075-4e01-b054-c6f4b9778cec')
});

$('.expnext').click(function(){
   $('.jobphoto1').css('backgroundImage','none')
   $('.companyname').css('opacity','1')
   $('.jobtitle').css('heigh','500px').css('border','none').css('height','500px')
   $('.jobcontent').css('left','30%').css('top','20%').css('width','25%')
    $('.jobtitle h2').css('display','none')
    $('.jabyear').css('display','none')
    $('.job-pic-scence2-top').css('display','block')
    $('.job-pic-scence2-bottom').css('display','block')
    $('.expline').css('marginTop','30px')
    $('.position').css('display','none')
    $('.experiencearea').css('backgroundColor','rgba(225,215,202,0.1)')
    if(window.innerWidth<992){
        $('.companyname-rwd').css('opacity','1')
    }
})

$('.exppre').click(function(){
    $('.jobphoto1').css('backgroundImage','url(https://leeshou.my.canva.site/images/3470714eb7515b9813b8012490cef478.jpg)')
    $('.companyname').css('opacity','0')
    $('.jobtitle').css('display','flex').css('border','2px solid #735E59').css('height','')
    $('.jobcontent').css('left','50%').css('bottom','15px').css('width','80%').css('top','')
    $('.jobtitle h2').css('display','block')
    $('.jabyear').css('display','flex')
    $('.job-pic-scence2-top').css('display','none')
    $('.job-pic-scence2-bottom').css('display','none')
    $('.position').css('display','block')
    $('.experiencearea').css('backgroundColor','rgba(255,255,255,1)')

    if(window.innerWidth<992){
        $('.companyname-rwd').css('opacity','0')
    }
 })
 $('.icon').on('mouseenter mouseleave', function(event){
    let color=$(this).css('--clr');
    let inputvalue=$(this).find('input').val()
      if(event.type === 'mouseenter') {
          $('.contactcube').css('backgroundColor', color);
          $('.contactdetail').text('My Info: '+inputvalue)
        $('.wave').css("backgroundColor",'white')
        } else if(event.type === 'mouseleave') {
          $('.contactcube').css('backgroundColor', 'white');
          $('.contactdetail').text('My Info:')
          $('.wave').css("backgroundColor",'#ff191b')
      }
  });
  
  VanillaTilt.init(document.querySelectorAll(".icon label"), {
          max: 25,
          speed: 400,
      glare:true,
      scale: 1.25
      });

/*main*/
$(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    var mainhrdistanceToTop = $('.mainhr').offset().top;
    var maincontentdistanceToTop = $('.maincontent').offset().top;
    var maintitledistanceToTop = $('.maintitle').offset().top;

    
    $('.canvasmount').css('transform', 'translateY(' + scrollPosition * 0.6 + 'px)');
if(scrollPosition < 5){
    $('.mainpeople').css('left','50%').css('bottom','-25%')
    $('.canvas1').css('transform','translateX(0)')
    $('.canvas2').css('transform','translateX(0)')
}
  
  if(scrollPosition > 1200){
    $('.canvas2').css('transform', 'translateX(' + (scrollPosition-1200) * 0.3 + 'px)');
$('.canvas1').css('transform', 'translateX(' + (scrollPosition-1200) * -0.3 + 'px)');
$('.mainpeople').css('left',50+(scrollPosition-1200)*0.125+'%').css('bottom',-25+(scrollPosition-1200)*0.1+'%');   
$('.mainhr').css('animation','lineshow 1s forwards');
$('.titlecnava').css('animation', 'titleshow 1s forwards');
  }
  else{
    $('.mainhr').css('animation','')
    $('.titlecnava').css('animation', '');
  }
  
  if(scrollPosition >= 1400){
    $('.mainpeople').css('left','75%').css('bottom','-5%')
  }
  if(scrollPosition >= 3700){
$('.mainpeople').css('position','absolute').css('bottom','-2%')
$('.mainhr').css('position','absolute').css('top',mainhrdistanceToTop+'px')
$('.maincontent').css('position','absolute').css('top',maincontentdistanceToTop+'px').css('transform','translatey(0%)')
$('.maintitle').css('position','absolute').css('top',maintitledistanceToTop+'px')
$('.detailcontent').css('position','absolute').css('bottom','-31%')
}
  else{
    $('.mainpeople').css('position','fixed')
    $('.mainhr').css('position','fixed').css('top','10%')
    $('.maincontent').css('position','fixed').css('top','30%').css('transform','translatey(-50%)')
    $('.maintitle').css('position','fixed').css('top','5%')
    $('.detailcontent').css('position','fixed').css('bottom','10%')
}
  
}); 

$('.dbimg').mouseenter(function(){
   $('.rowdb').css('height','0')
   $('.dbimg').css('height','270px')
})
$('.dbimg').mouseleave(function(){
    $('.rowdb').css('height','120px')
    $('.dbimg').css('height','150px')
 })

 $('.dppic1').mouseenter(function(){
    $('.dppic1').css('height','270px').css('width','100%')
    $('.dbimg').css('height','0px')
    $('.dppic2').css('width','0%')
 })
 $('.dppic1').mouseleave(function(){
    $('.dppic1').css('height','120px').css('width','49%')
    $('.dbimg').css('height','150px')
    $('.dppic2').css('width','49%')
 })

 $('.dppic2').mouseenter(function(){
    $('.dppic2').css('height','270px').css('width','100%')
    $('.dbimg').css('height','0px')
    $('.dppic1').css('width','0%')
 })
 $('.dppic2').mouseleave(function(){
    $('.dppic2').css('height','120px').css('width','49%')
    $('.dbimg').css('height','150px')
    $('.dppic1').css('width','49%')
 })



/*skill*/ 
function skillshow(tab){
    $('.skillcontent').text(tab)
}
$('.htmlpic').mouseenter(function(){
    skillshow('I am proficient in using HTML, CSS, and JavaScript to create websites, including layout design and dynamic effects. Although I lack experience in working on large-scale projects, I am eager to gain such experience in the future and further develop my skills.')
})

$('.officepic').mouseenter(function(){
    skillshow('I am highly skilled in using office software systems, such as creating reports with Word, designing spreadsheets with Excel, and preparing presentation slides with PowerPoint. These skills enable me to handle various documentation and presentation tasks efficiently.')
})
$('.toeicpic').mouseenter(function(){
    skillshow('I scored 820 on the TOEIC exam, demonstrating a solid proficiency in English. This score reflects my ability to engage in basic conversations with foreigners and comprehend written and spoken English effectively.')
    $('.toeicpic').css('backgroundImage','url("https://firebasestorage.googleapis.com/v0/b/projectshop-6d293.appspot.com/o/re%2Fbox2.jpg?alt=media&token=7da3f93b-911f-4293-8227-59b1617955d0")')
})
$('.toeicpic').mouseleave(function(){
    $('.toeicpic').css('backgroundImage','url("https://firebasestorage.googleapis.com/v0/b/projectshop-6d293.appspot.com/o/re%2Fbox1.jpg?alt=media&token=7d454d94-06d3-43e9-b36f-c9887ec04a15")')
})
$('.htmlpic').mouseenter(function(){
    $('.htmlpic').css('backgroundImage','url(https://firebasestorage.googleapis.com/v0/b/projectshop-6d293.appspot.com/o/re%2Fcode2.jpg?alt=media&token=d5389d6c-5975-448b-9d96-b5fe20bace73)')
})
$('.htmlpic').mouseleave(function(){
    $('.htmlpic').css('backgroundImage','url(https://firebasestorage.googleapis.com/v0/b/projectshop-6d293.appspot.com/o/re%2Fcode1.jpg?alt=media&token=f3bbdbe2-69dd-4a66-b405-30f473e37428)')
})




});



