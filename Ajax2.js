
function traerdatos(){
   const xhttp = new XMLHttpRequest();

   xhttp.open('GET','tabla.json',true);

   xhttp.send();

   xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){

         let datos = JSON.parse(this.responseText);

         let res = document.querySelector('#res');
         res.innerHTML = '';
         
         for (let item of datos){
            res.innerHTML += `
             <tr>
             <td>${item.Lunes}</td>
             <td>${item.Martes}</td>
             <td>${item.Miercoles}</td>
             <td>${item.Jueves}</td>
             <td>${item.Viernes}</td>
             </tr>
            `

         
         }

      }
   }
}