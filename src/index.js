import { async } from '@firebase/util';
import {
    initializeApp
} from 'firebase/app';
import {
    getFirestore,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    collection
} from 'firebase/firestore';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyA55I8rOHO4k60rBpX7xhLRJtjd7tO-3fU",
    authDomain: "todolist-6a97f.firebaseapp.com",
    projectId: "todolist-6a97f",
    storageBucket: "todolist-6a97f.appspot.com",
    messagingSenderId: "717041955769",
    appId: "1:717041955769:web:a319f0bc164039ccf3bc68"
});
const firestore = getFirestore()
const mm = collection(firestore, 'todo2')

async function addData() {
    var text = document.getElementById('textarea').value.toString();
    var name = document.getElementById('name').value.toString();
    var mail = document.getElementById('secondname').value.toString();
    var secondname = document.getElementById('maill').value.toString();
    const newdocu = await addDoc(mm, {
        Name: name,
        LastName: secondname,
        mail: mail,
        text: text,
    });
}

    async function deleteDocu(id){
    document.getElementById(id).parentElement.remove();
    await deleteDoc(doc(mm, id));
}

    async function updateDocu(id){
        var update=document.getElementById('update-input').value.toString()
        var newdocument=doc(mm,id)
    await updateDoc(newdocument, {
            text: update,
          });
          getAll();
    }
async function getAll() { 
    document.getElementById('todos').innerHTML='';
    const querySnapshot = await getDocs(mm);
    querySnapshot.forEach((doc) => {
        var chiild= document.createElement('li')
        chiild.setAttribute('class',"list")
        chiild.innerText=doc.data().Name+ ' : '+doc.data().text;
        var buttons=document.createElement('button')
        var mmm=1;
        var newid=doc.id+mmm.toString()
        var buttonsup=document.createElement('button')
        buttons.setAttribute("class","btn btn-danger")
        buttons.innerText='Delete'
        buttonsup.setAttribute("class","btn btn-success")
        buttonsup.innerText='Update'
        buttonsup.setAttribute("id",newid)
        chiild.appendChild(buttonsup)
        buttons.setAttribute("id",doc.id)
        chiild.appendChild(buttons)
        document.getElementById('todos').appendChild(chiild);
    });
    var btns = document.getElementsByClassName("btn btn-danger")
    Array.from(btns).forEach((btn)=>{btn.addEventListener('click' ,()=>{deleteDocu(btn.id)})})
    var btnsup = document.getElementsByClassName("btn btn-success")
    Array.from(btnsup).forEach((btnup)=>{btnup.addEventListener('click',()=>{
        const str=btnup.id.substring(0,btnup.id.length-1)
        updateDocu(str);
    })})
}   

document.getElementById('add-btn').addEventListener('click', function () {
    addData();   
    getAll() 
})

