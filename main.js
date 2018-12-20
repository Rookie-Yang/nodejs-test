


 button.addEventListener('click',function(e){

  $.ajax({
    url: "http://jack.com:8002/pay",
    dataType: "jsonp",
    success: function( response ) {
      if(response === 'success'){
        amount.innerText = amount.innerText - 1
      }
    }
  })
 })




// let script = document.createElement('script')
// let functionName = 'rookieYang'+ parseInt(Math.random()*100000,10)
// window[functionName] = function(result){
//   if(result === 'success'){
//     amount.innerText = amount.innerText - 1
//   }else{

//   }
// }
// script.src = 'http://jack.com:8002/pay?callback=' + functionName
// document.body.appendChild(script)
// script.onload = function(e){
//   e.currentTarget.remove()
//   delete window[functionName]
// }
// script.onerror = function(e){
//   e.currentTarget.remove()
//   delete window[functionName]
//   alert('fail')
// }











  
//  let image = document.createElement('img')
//  image.src = '/pay'
//  image.onload = function(){
//    alert('打钱成功')
//    amount.innerText = amount.innerText - 1
//  }
//  image.onerror = function(){
//    alert('打钱失败')
//  }
// })