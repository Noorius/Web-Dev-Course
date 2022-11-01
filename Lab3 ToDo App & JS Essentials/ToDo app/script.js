/*document.addEventListener('keydown',(e)=>{
    if(e.key=="Enter"){
        addTask();
    }
});*/


let createNewTaskElement=function(taskString){
    let new_task = document.createElement("li");
    new_task.className = "task";

    let outer_label = document.createElement("label");
    outer_label.className = "task-new";

    let inner_span = document.createElement("span");
    /*inner_span.addEventListener("dblclick",function () {
        this.contentEditable = "true";
    })*/

    let check_boxes = document.createElement("input");
    check_boxes.className = "checkboxes";
    check_boxes.type = "checkbox";
    /*check_boxes.onclick = function () {
        setTimeout(()=>console.log(""),10000);
        this.parentNode.parentNode.remove();
    }*/


    let del_img = document.createElement("img");
    del_img.src = "https://img.icons8.com/plasticine/100/000000/filled-trash.png";
    del_img.className = "delete_img";
    del_img.onclick = deleteTask;


    //inner_span.innerText = taskString;
    inner_span.innerHTML = taskString;

    outer_label.appendChild(check_boxes);
    outer_label.appendChild(inner_span);
    new_task.appendChild(outer_label);
    new_task.appendChild(del_img);

    return new_task;
}


let addTask = function (){
    let incomplete_items = document.getElementById("myUL");

    let task_name = document.getElementById("input_form");

    if(task_name.value === ''){
        alert("Нечего добавить!")
    }else{
        let listitem = createNewTaskElement(task_name.value);

        incomplete_items.appendChild(listitem);
    }

    task_name.value = "";

}

let deleteTask=function(){
    let listItem=this.parentNode;
    listItem.remove();
}

let delete_multiple = function () {
    let l_checked = document.querySelectorAll("input:checked");
    for(let i = 0; i<l_checked.length; i++){
        l_checked[i].parentNode.parentNode.remove();
    }
}





