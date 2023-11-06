const observer = document.querySelector('.hidden')

const Myobserver = new IntersectionObserver((e) =>{
e.map((entries)=>{

    if(entries.isIntersecting === true){
        entries.target.classList.add('show')
    }else{
        entries.target.classList.remove('show')
    }

})


})

const element = Myobserver.observe(observer)
