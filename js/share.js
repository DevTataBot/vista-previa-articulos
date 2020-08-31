const share = document.querySelector('.share');
const social = document.querySelector('.social');
function compartir(){
    share.addEventListener('click', function(){

        if(window.innerWidth<=800 && window.innerWidth>0){
            social.classList.toggle('social-resp');
        }else{
             social.classList.toggle('social-active');
        }

    });
}
compartir();