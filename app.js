const nameInput = document.getElementById('nameInput');
const checkButton = document.getElementById('checkButton');
const errorMessage = document.getElementById('errorMessage');
const validMessage = document.getElementById('validMessage');
const cuoi = document.getElementById('cuoi');
const hint = document.getElementById('hint');
checkButton.addEventListener('click', function() {
      const nameValue = nameInput.value.trim();
      if(checkButton.textContent==="Gợi ý"){
          cuoi.style.display= 'none';
          hint.style.display='block';
          errorMessage.style.display = 'none';
          validMessage.style.display = 'none';
          checkButton.textContent="Kiểm tra"; 
      }
      else{
        if (nameValue === '') {
          errorMessage.textContent = 'Đừng để trống!';
          errorMessage.style.display = 'block';
          validMessage.style.display = 'none';
          cuoi.style.display= 'none';
          hint.style.display='none';
        } else if (nameValue === "Huyền" || nameValue === "huyền"){
          errorMessage.textContent = 'Viết đủ họ tên de!';
          errorMessage.style.display = 'block';
          validMessage.style.display = 'none';
          cuoi.style.display= 'none';
          hint.style.display='none';
        }
        else if (nameValue === "Vì Thu Huyền" || nameValue === "vì thu huyền" || (nameValue != "pucca" && nameValue != "Pucca")){
          errorMessage.textContent = 'Sai rồi kakakakka';
          errorMessage.style.display = 'block';
          cuoi.style.display='block';
          hint.style.display='none';
          validMessage.style.display = 'none';
          checkButton.textContent = "Gợi ý";
        } 
        else {
          validMessage.style.display = 'block';
          errorMessage.style.display = 'none';
          cuoi.style.display= 'none';
          hint.style.display='none';
          validMessage.textContent = 'Dê';
          setTimeout(function(){
            validMessage.textContent='Dê 🐐';
          },1000);
          setTimeout(function(){
            validMessage.textContent='Dê 🐐🐐';
          },2000);
          setTimeout(function(){
            validMessage.textContent='Dê 🐐🐐🐐'
          },3000);
          setTimeout(function(){
              window.location.href =  "flower.html"; 
        }, 3700);
        }
      }          
});
  