import React, {useRef} from "react";
interface TaskformProp{
    onAddItem: (name:string)=>void
}

function TaskForm({onAddItem}:TaskformProp):JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
    function saveData(e:React.FormEvent) {
        e.preventDefault();
        const name = inputRef.current!.value
        onAddItem(name)
        inputRef.current!.value=""
    }
    return(
        <form onSubmit={saveData}>
            <input type="text" placeholder="Input your task" ref={inputRef}/>
            <button type="submit">Save</button>
        </form>
    )    
}
export default TaskForm