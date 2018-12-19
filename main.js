

button.addEventListener('click',function(e){
let script = document.createElement('script')
script.src = '/pay'
document.body.appendChild(script)
script.onload = function(e){
  e.currentTarget.remove()
}
script.onerror = function(e){
  e.currentTarget.remove()
  alert('fail')
}











  
//  let image = document.createElement('img')
//  image.src = '/pay'
//  image.onload = function(){
//    alert('打钱成功')
//    amount.innerText = amount.innerText - 1
//  }
//  image.onerror = function(){
//    alert('打钱失败')
//  }
})