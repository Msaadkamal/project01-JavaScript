const colorIdE=document.querySelector('colorId');
const btn=document.getElementById('btn');
const arr= ["green","blue",'orange',"red","pink",'skyblue','purpil'];
btn.addEventListener('click',()=>{
const randomNum=RandomNumber();
    document.body.style.backgroundColor= arr[randomNum];
    colorIdE.textContent=arr[randomNum]


})
function RandomNumber() {
return Math.floor(Math.random()*arr.length);
    
};
