import {useState} from 'react'
function Form() {
//Generating a random id 
const RandomId = Math.floor(Math.random() * (100 - 15) + 15);


const [formData,setFormData]=useState({
    id:RandomId,
    date:'',
    description:'',
    category:'',
    amount:'',
  
  
})


//console.log(formData)

function handleSubmit(e){
e.preventDefault()
console.log(formData)

setFormData({
    id:RandomId,
    date:'',
    description:'',
    category:'',
    amount:'',
  
  
})
}
    
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="input date" 
      value={formData.date} 
      onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>

      <input type="text" placeholder="input description" 
      value={formData.description} 
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}/>
      
      <input type="text" placeholder="input category" 
      value={formData.category} 
      onChange={(e) => setFormData({ ...formData, category: e.target.value })}/>
      
      <input type="text" placeholder="input amount"
      value={formData.amount} 
      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}/>

    <input type="submit" value="Add Transaction" />
    </form>
  )
}
export default Form