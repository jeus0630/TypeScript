const links = document.querySelectorAll('a');

links.forEach(link => {
    if(link instanceof HTMLAnchorElement){
        link.href= 'kakao';
    }
})