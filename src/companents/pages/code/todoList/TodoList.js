import React,{  useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {FaPen ,FaSave ,FaTrashAlt}from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'
import styles from "../../../util/style"

function TodoList() {
  const[todolist,setTodolist]=useState([])
  const [todo,setTodo]=useState('')
  const [newTodo,setNewTodo]=useState('')

  const [error,setError]=useState(false)
// useEffect(()=>{
//   let d=localStorage.getItem('data')
//   if (d) {
//     setTodolist(JSON.parse(d))
    
//   }
// },[])
//   useEffect(()=>{
//     localStorage.setItem('data',todolist)
//   })

  const clickHandle=()=>{

if (newTodo.trim()&& newTodo ) {
  setTodolist(preveState=>[...preveState,{id:uuidv4(),todo:newTodo,delete:false,checkbox:false,update:false}])
  setNewTodo('')
  
}else{
  setError(true)

}
    
  

  }
if (error) {
  setTimeout(()=>{
    setError(false)

  },[3000])
  
}
  const checkbox=(id)=>{
    setTodolist(preveState=>preveState.map(todoItem=>todoItem.id===id?{...todoItem,checkbox:!todoItem.checkbox}:todoItem))

  }
  const deleteClick =(id)=>{
    setTodolist(preveState=>preveState.filter(item=>item.id!==id))

  }
  const update=(id ,oldTodo)=>{
    // console.log(id);
    setTodolist(preveState=>preveState.map(item=>item.id===id?{...item,update:!item.update}:item))
    setTodo(oldTodo)
  }
const saveClick=(id)=>{
 if (todo) { setTodolist(preveState=>preveState.map(item=>item.id===id?{...item,update:!item.update,todo:todo}:item))
  
 }


}

// useEffect(()=>{console.log(todolist);},[todolist])
  return (
    <div className=" pb-3">
      <div className=" text-center m-6 text-[32px] capitalize font-bold  ">todo list</div>
      <div className=" m-auto max-w-[350px] sm:w-[500px] bg-white pt-4 pb-2 rounded-[20px] ">
     <div className="flex justify-around  flex-wrap">
     <input type="text " value={newTodo} className=" border xl:w-[100px] sm:pl-2  mr-2 rounded outline text-black " onChange={(e)=>setNewTodo(e.target.value)} 
        placeholder="write todo "/>

        {/* <button className=" w-[80px]  bg-blue-500 rounded p-2 text-white capitalize" onClick={clickHandle}>add</button> */}
        <div className="max-w-[120px] border p-2 rounded group bg-blue-700">
              <button
          className={`flex justify-between ${styles.flexBetween} `} onClick={clickHandle}

              >
                my works <FaLongArrowAltRight className="group-hover:rotate-90 duration-500 " />
              </button></div>
  

            
     </div>
{
  error?     <div className=" text-red-900">
wrong something
 </div>:''
}
      <div className="m-4 ">
        {
        todolist.map((item)=>
          <div className=" bg-blue-400 border mt-1 p-4 rounded-[8px]  gap-2 flex justify-between" key={item.id}>
     <div className= "flex gap-6 justify-center ">    
        <input type="checkbox"  className="w-5 h-5 text-black" value={item.checkbox} 
     onChange={()=>checkbox(item.id)} />
   {
     !item.update?    

         <h2 className={`capitalize ${item.checkbox ?'line-through':''} capitalize  text-[16px] bo`}>{item.todo}</h2>:
   <input type="text " value={todo} className="pl-2 mr-8 rounded text-black"
    onChange={(e)=>setTodo( e.target.value)}/>
   }
          
          </div>
          <div className="flex gap-4">
{
  !item.update?
  <FaPen onClick={()=>update(item.id ,item.todo )} />:
  <FaSave  onClick={()=>saveClick(item.id)}/>
}
  <FaTrashAlt  onClick={()=>deleteClick(item.id)}/>
   </div>
          </div>
        )}
      </div>
      </div>
   
      
    </div>
  );
}

export default TodoList
