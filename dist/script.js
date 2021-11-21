function check(m){
    const re=/^[a-zA-Z]{2,8}[a-zA-Z]$/
    if (re.test(m.value.toString())){
        m.classList.remove('is-invalid')
        m.classList.add('is-valid')   
    }
    else{
        m.classList.remove('is-valid')
        m.classList.add('is-invalid')   
    }
}    
let m1=document.getElementById('name')
let m2=document.getElementById('secondname')
document.getElementById('name-area').addEventListener("mouseleave", function () {check(m1)});
document.getElementById('secondname-area').addEventListener("mouseleave", function () {check(m2)});
function check1(n){
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(n.value.toString())){
        n.classList.remove('is-invalid')
        n.classList.add('is-valid')   
    }
    else{
        n.classList.remove('is-valid')
        n.classList.add('is-invalid')   
    }    
} 
let m3=document.getElementById('maill')
document.getElementById('mail-area').addEventListener("mouseleave", function () {check1(m3)})
