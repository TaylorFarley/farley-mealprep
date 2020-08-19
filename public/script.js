swap = ()=>{

    //monday
     document.querySelector("#swap-monday").style.display="inline-block"
     document.querySelector("#swap-monday").addEventListener('click', () => {
         fetch('/getNewRecipe', {
             method: 'put',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
               dow: 'Monday',
             
             })
           })     
         .then((response) => response.json())
         .then((data) => {
             console.log(data)
             document.querySelector(`#name-0`).innerHTML = data.title
             }
        )
     })
     //tuesday
     document.querySelector("#swap-tuesday").style.display="inline-block"
     document.querySelector("#swap-tuesday").addEventListener('click', () => {
         fetch('/getNewRecipe', {
             method: 'put',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
               dow: 'Tuesday',
             
             })
           })     
         .then((response) => response.json())
         .then((data) => {
             console.log(data)
             document.querySelector(`#name-1`).innerHTML = data.title
             }
        )
     })
 
     //wednesday
     document.querySelector("#swap-wednesday").style.display="inline-block"
     document.querySelector("#swap-wednesday").addEventListener('click', () => {
         fetch('/getNewRecipe', {
             method: 'put',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
               dow: 'Wednesday',
             
             })
           })     
         .then((response) => response.json())
         .then((data) => {
             console.log(data)
             document.querySelector(`#name-2`).innerHTML = data.title
             }
        )
     })
     //thursday
     document.querySelector("#swap-thursday").style.display="inline-block"
     document.querySelector("#swap-thursday").addEventListener('click', () => {
         fetch('/getNewRecipe', {
             method: 'put',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
               dow: 'Thursday',
             
             })
           })     
         .then((response) => response.json())
         .then((data) => {
             console.log(data)
             document.querySelector(`#name-3`).innerHTML = data.title
             }
        )
     })
     //friday
     document.querySelector("#swap-friday").style.display="inline-block"
     document.querySelector("#swap-friday").addEventListener('click', () => {
         fetch('/getNewRecipe', {
             method: 'put',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
               dow: 'Friday',
             
             })
           })     
         .then((response) => response.json())
         .then((data) => {
             console.log(data)
             document.querySelector(`#name-4`).innerHTML = data.title
             }
        )
     })
     //saturday
     document.querySelector("#swap-saturday").style.display="inline-block"
     document.querySelector("#swap-saturday").addEventListener('click', () => {
         fetch('/getNewRecipe', {
             method: 'put',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
               dow: 'Saturday',
             
             })
           })     
         .then((response) => response.json())
         .then((data) => {
             console.log(data)
             document.querySelector(`#name-5`).innerHTML = data.title
             }
        )
     })
     //sunday
     document.querySelector("#swap-sunday").style.display="inline-block"
     document.querySelector("#swap-sunday").addEventListener('click', () => {
         fetch('/getNewRecipe', {
             method: 'put',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
               dow: 'Sunday',
             
             })
           })     
         .then((response) => response.json())
         .then((data) => {
             console.log(data)
             document.querySelector(`#name-6`).innerHTML = data.title
             }
        )
     })
     //
    }

document.querySelector('#showfood').addEventListener('click', () => {
   
    swap()
  
    

    for (a = 0; a <= 6; a++) {
        document.querySelector(`#name-${a}`).innerHTML = "loading.."
    }

    for (b = 0; b <= 6; b++) {
        document.querySelector(`#ingredients-${b}`).innerHTML = ""
    }




    fetch(`/getNewFood`)
        .then((response) => response.json())
        .then((data) => {
           
            for (c = 0; c <= 6; c++) {
                document.querySelector(`#name-${c}`).innerHTML = ""
                document.querySelector(`#ingredients-${c}`).innerHTML = ""
            }

            for (i = 0; i <= 6; i++) {

                document.querySelector(`#name-${i}`).innerHTML +=  data[i].title
                document.querySelector(`#ingredients-${i}`).innerHTML += 'Source: ' + data[i].sourceUrl + ' '
                document.querySelector(`#link-${i}`).href =data[i].sourceUrl
               
            }
         

        })
})





document.querySelector('#showfoodagain').addEventListener('click', () => {
    swap()

    for (a = 0; a <= 6; a++) {
        document.querySelector(`#name-${a}`).innerHTML = "loading.."
    }

    for (b = 0; b <= 6; b++) {
        document.querySelector(`#ingredients-${b}`).innerHTML = ""
    }





    fetch(`/getNewFood`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            for (c = 0; c <= 6; c++) {
                document.querySelector(`#name-${c}`).innerHTML = ""
                document.querySelector(`#ingredients-${c}`).innerHTML = ""
            }


            for (i = 0; i <= data.length; i++) {

                document.querySelector(`#name-${i}`).innerHTML += data[i].title + ' '
                document.querySelector(`#ingredients-${i}`).innerHTML += 'Source: ' + data[i].sourceUrl + ' '
                document.querySelector(`#link-${i}`).href =data[i].sourceUrl
            }
        })
})



//modal

   
    
    
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
       
        fetch(`/getfood`)
        .then((response) => response.json())
        .then((data) => {
            
            if(!data || data=='' || data=='undefined')
            {
                document.querySelector('#modaltext').innerHTML="Please Generate Meal Prep" 
            }
            else{
                document.querySelector('#modaltext').innerHTML=""
         
            for(i=0;i<data.length;i++){

            document.querySelector('#modaltext').innerHTML+="<br />"+data[i].dow  + ' - ' + data[i].title
        }}
           
        })
         
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


