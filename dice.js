const num=document.querySelectorAll(".num");
console.log(num);

const arr=[
    'dicePhotos/dice_1.png',
    'dicePhotos/dice_1.png',
    'dicePhotos/dice_1.png',
    'dicePhotos/dice_1.png',
    'dicePhotos/dice_1.png',
    'dicePhotos/dice_1.png'
]

num.addEventListener("click" , (e)=>{
    function randomize(arr){
        const output=[]
        for(let i=0;i<arr.length;i++){
            const randomImage= arr[Math.floor(Math.random()*arr.length)].img;  
        
        }
    }
})
