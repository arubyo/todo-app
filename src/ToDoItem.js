import React from 'react';
 
const ToDoItem = ({todoitem}) => {
   return (
       <div>
           {todoitem.task}
       </div>
   );
};
 
export default ToDoItem;