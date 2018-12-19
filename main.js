

button.addEventListener('click',function(e){
 let image = document.createElement('img')
 image.src = '/pay'
 image.onload = function(){
   alert('打钱成功')
   amount.innerText = amount.innerText - 1
 }
 image.onerror = function(){
   alert('打钱失败')
 }
})