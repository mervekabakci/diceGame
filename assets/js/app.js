//degişken tanımlamaları
let resultText = document.getElementById("result");

//random zar
let dice = Math.floor(Math.random() * 6) + 1;
//Kullanıcı zar input
let userDice = document.getElementById("userDiceInput");



document.querySelector(".diceButton").addEventListener("click", function(){
  if(userDice.value > 6){
    resultText.innerHTML=`<p>6'dan daha büyük tahmin yapamazsınız</p>`;
  }
  else if(userDice.value < 1){
    resultText.innerHTML=`<p>1'den daha küçük tahmin yapamazsınız</p>`;
  }
  else{
      if(userDice.value === dice){
        resultText.innerHTML=`<p>Tahmin ettiğiniz zar: ${userDice.value}</p>
        <hr>
        <p class="mt-3">Bilgisayarın attığı zar : <span class="fs-3 fw-bold text-danger">${dice}</span></p>
        <hr>
        <div class="fs-4 fw-bold text-success m-4">Tebrikler Sayıyı Tahmin ettiniz</div>
        `;
      }
      else if(userDice.value !== dice){
          resultText.innerHTML=`<p>Tahmin ettiğiniz zar: ${userDice.value}</p>
          <hr>
          <p class="mt-3">Bilgisayarın attığı zar :  <span class="fs-3 fw-bold text-danger">${dice}</span></p>
          <hr>
          <div class="fs-4 fw-bold text-danger mt-4">Hatalı Tahmin. Geçerli zar : ${dice}</div>
          `;
      }
    }
})