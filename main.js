var typed = new Typed('#element', {
    strings: ['I am front-End Developer', 'I am a full time Developer.'],
    smartBackspace: true, // Default value
    loop: true,
    typeSpeed: 30,
    backSpeed: 20,

  });
  let shareBtn=document.querySelector('.shareBtn');
  shareBtn.addEventListener('click',function(e){
    e.preventDefault();
    let parent1=e.currentTarget.parentElement;
    let copyText=parent1.childNodes[1];
    const range = document.createRange();
      range.selectNode(copyText);
         window.getSelection().removeAllRanges();
         window.getSelection().addRange(range);
         document.execCommand("copy");
         window.getSelection().removeAllRanges();
       Swal.fire("link copied");

     

  })
