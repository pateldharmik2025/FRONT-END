{/* <div class="slide">
    <img src="" alt="">
</div> */}
var imageArray = ['./assets/image/img1.jpeg','./assets/image/img2.jpg','./assets/image/img3.jpeg','./assets/image/img4.jpg','./assets/image/img5.jpg','./assets/image/img2.jpg','./assets/image/img6.jpg',]
var translate_value = -200 * ((imageArray.length * 2) -2);
var flag = 0;
var slide_bottom = document.getElementById('slider-bottom');


window.addEventListener('load',()=>{
    debugger
    for (let i = 0; i < imageArray.length; i++) {   
        let div = document.createElement('div');
        div.setAttribute('class','slide_large');
        let image = document.createElement('img');
        image.setAttribute('src',imageArray[i]);
        div.appendChild(image);
        document.getElementById('slider-top').append(div);
    }
});


window.addEventListener('load',()=>{
    for(let l = 1; l <= 4; l++){
        small_slide_pos();
    }
});
function small_slide_pos(){
    for (let i = 0; i < imageArray.length; i++) {   
        // console.log(i)
        let div = document.createElement('div');
        div.setAttribute('class','slide_small slide' + i);
        div.setAttribute('onclick','image_func('+ i +')');
        
        let image = document.createElement('img');
        image.setAttribute('src',imageArray[i]);
        
        div.appendChild(image);
        slide_bottom.append(div);
    }
};

window.addEventListener('load',()=>{
    slide_large_func()
    activebottom();
});
function leftright(i){
    flag += i;
    slide_large_func();
    console.log(flag)
    activebottom(flag);
    debugger
    if(flag == imageArray.length - 1 && i == 1){
        slide_bottom.classList.remove('slow');
        slide_bottom.classList.add('fast');
        translate_value = -200 * ((imageArray.length * 2) - 3);
        document.getElementById('slider-bottom').style.transform = `translateX(${translate_value}px)`;
    }
    else if(i == 1){
        slide_bottom.classList.remove('fast');
        slide_bottom.classList.add('slow');
        translate_value += (-200);
        document.getElementById('slider-bottom').style.transform = `translateX(${translate_value}px)`;
    }


    if(flag == 0 && i == -1){
        slide_bottom.classList.remove('slow');
        slide_bottom.classList.add('fast');
        translate_value = -200 * ((imageArray.length * 2) - 2);
        document.getElementById('slider-bottom').style.transform = `translateX(${translate_value}px)`;
    }else if(i == -1){
        slide_bottom.classList.remove('fast');
        slide_bottom.classList.add('slow');
        translate_value += 200;
        document.getElementById('slider-bottom').style.transform = `translateX(${translate_value}px)`;
    }

}
function slide_large_func(){
    document.getElementById('slider-bottom').style.transform = `translateX(${translate_value}px)`
    var slides_large =  document.querySelectorAll('.slide_large'); 
    removeClasses();

    if(flag == slides_large.length ){
        flag = 0;
    }

    if(flag < 0){
        flag = slides_large.length - 1;
    }
    slides_large[flag].classList.add('slide_show');  
    
}

function activebottom(){
    // debugger
    let slide_small = document.querySelectorAll('.slide_small');
    for (const slide of slide_small) {
        slide.classList.remove('active');
        if(slide.classList.contains('slide'+flag) == true){
            slide.classList.add('active');
        }
    }
}
function removeClasses(){
    var slides_large =  document.querySelectorAll('.slide_large');   

    for(let s = 0; s < slides_large.length; s++){        
        if(slides_large[s].classList.contains('slide_show') == true){            
            slides_large[s].classList.remove('slide_show');
        }
    }
}