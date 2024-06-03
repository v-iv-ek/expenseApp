
const reqURL="http://localhost:4000/expense";
async function handleSubmit(event){
    event.preventDefault()
     try{
        const addData={
             amount:event.target.amount.value,
             desc:event.target.desc.value,
             category:event.target.category.value,
        }       
        const dataExpense=await axios.post(`${reqURL}`,addData);
        displayExpenseDetails(dataExpense.data.data);
         document.getElementById("amount").value="";
         document.getElementById("desc").value="";
         document.getElementById("category").value="";
     }
     catch(err){
      console.log(err)
     }  
}   
//when ever page refresh/reload whatever data in database    it will display in browser
window.addEventListener("DOMContentLoaded", async function () {
   try {
       let getData = await axios.get(`${reqURL}`)       
       getData.data.forEach(user =>{
         displayExpenseDetails(user);  
      })
       // displayUserOnScreen(JSON.stringify(getData.data));
   } catch (error) {
       console.log('Error fetching users:', error);
   }
});




function displayExpenseDetails(user) {
   console.log(user.Amount)
   const ulist = document.querySelector("ol");
   const userItem = document.createElement("li");
   const child = `${user.Amount}-${user.Description}-${user.Category} <button id="delete">Delete</button> <button id="edit">Edit</button>`;
   userItem.innerHTML = child;
   ulist.appendChild(userItem);

   const deleteBtn = userItem.querySelector("#delete");
   deleteBtn.addEventListener("click", async function () {      
       try {
           deleteBtn.parentElement.remove();            
           await axios.delete(`${reqURL}/${user.id}`);
           
       } catch (error) {
           console.log('Error deleting user:', error);
       }
   });

   const editBtn = userItem.querySelector("#edit");
   editBtn.addEventListener("click", async function () {
       document.getElementById("amount").value = user.Amount;
       document.getElementById("desc").value = user.Description;
       document.getElementById("category").value = user.Category;
       editBtn.parentElement.remove();
       try {
           editBtn.parentElement.remove(); 
           await axios.delete(`${reqURL}/${user.id}`);
           
       } catch (error) {
           console.log('Error deleting user:', error);
       }

   });
}
