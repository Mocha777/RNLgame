
    var character = document.getElementById("character");
    var counter = 0;
    var block = document.getElementById("block");
    function jump()
    {
        if(character.classList !="animate")/*命中檢測 是否在彼此之上*/
        {
            character.classList.add("animate");
        }
        setTimeout(function () /*一旦完成通化的運行便刪除這個類，以達到重複跳 */
        {
            character.classList.remove("animate"); 
        },500);/*500ms刪除動畫 */
    }
   
    

    document.addEventListener('keypress',()=>{
        jump();
    })
 
    var checkDead = setInterval(function(){
        var characterTop = /*轉換成整數parseint  */
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));/*得到角色位置，以至於去訂位角色 */
        var blockLeft = 
        parseInt(window.getComputedStyle(block).getPropertyValue("Left"));
    
        if(blockLeft<60 && blockLeft>-60 && characterTop>=230){
            block.style.animation = "none";
            alert("Game Over. 分數: "+Math.floor(counter/100));
            
            block.style.animation = "block 1s infinite linear";/* reset*/
            counter=0;
        }else{
            counter++;
            if(counter/100>10)
            {
                block.style.animation = "block 0.8s infinite linear";
            }
            if(counter/100>20)
            {
                block.style.animation = "block 0.7s infinite linear";
            }
            if(counter/100>30)
            {
                block.style.animation = "block 0.6s infinite linear";
            }
            
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);/*一秒加一分 */
        }
    
        /*是否碰到*/
        /*if(blockLeft<20 && blockLeft>0 && characterTop>130)
        {
            block.style.animation = "none";
            block.style.display = "none";
            alert("你輸了，若要再玩一遍，請重新載入畫面")
        }*/
    
    
    },10)

   


