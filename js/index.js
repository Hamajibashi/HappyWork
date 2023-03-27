AOS.init();

$(function () {
    $('.faqs-header').click(function () {
        $(this).next('.faqs-content').slideToggle();
        $(this).toggleClass('active');
    });
});

const link = document.querySelectorAll('a')
link.forEach(item=>{
    item.addEventListener('click',e=>{
        e.preventDefault()
    })
})

const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  })

const btn = document.querySelectorAll('button')
btn.forEach(item=>{
    item.addEventListener('click',()=>{
        myModal.show();
    })
})