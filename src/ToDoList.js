import React, { useState } from 'react'

function ToDoList() {
    const[ activity,setActivity]=useState("");
    const[listData,setlistData]=useState([]);
    function AddActivity(){
        // setlistData([...listData,activity])
        // console.log(listData)
        setlistData((listData)=>{
            const updatedList=[...listData,activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        }
    
    )

    }
function removeAction(i){
const updatedListData=listData.filter((elem,id)=>{

    return i!=id
})
setlistData(updatedListData);
}
function removeAll(){
setlistData([]);


}








  return (
 
    <div className='container'>
        <div className='header'>TO DO LIST </div>
       <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)      }       />
    <button onClick={AddActivity}>Add </button>
    <p className='para'>This is you List :{")"}</p>

    {listData!=[] && listData.map((data,i)=>{
        return(
            <p key={i}>
                <div className='list-data'>{data}</div>
                <div className='btn-pos'>
                <button onClick={()=>removeAction(i)}> Delete</button>
                </div>
            </p>
        )
    })}
    
    {listData.length>=1 &&<button onClick={removeAll}> Remove All</button> }

    
    
    </div>
  
  )
}

export default ToDoList