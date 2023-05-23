let listbox = document.getElementById("listbox");
let task  = document.getElementById("task");
let table = document.getElementById('table');

task.addEventListener('keydown',(e)=>{
    if(e.key=='Enter')
    {
        if(task.value!="")
        {
            addToList();
            task.value='';
        }
        else{
            alert("Enter Your Task!");
        }
    }
});


function addToList()
{
    let newDiv = document.createElement("div");
    let spantask = document.createElement("span");
    spantask.innerHTML = task.value;
    spantask.style.fontSize="26px";
    spantask.style.fontWeight="bold";
    spantask.setAttribute('class','text-success')

    spantask.style.margin = "6px";

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.style.margin = "5px";
    checkbox.setAttribute('title','Check to complete');
    checkbox.addEventListener("click",(e)=>{
        if(checkbox.checked==true)
    {
        spantask.style.textDecoration = "line-through";
        spantask.style.textDecorationColor ="white";

    }
    else
    {
        spantask.style.textDecoration ='none';
    }
});
    
    
    let cancel = document.createElement('input');
    cancel.setAttribute("type","button");
    cancel.setAttribute('value',"Delete");

    cancel.setAttribute('title','Delete');
    cancel.setAttribute('class','btn btn-outline-danger');
    cancel.addEventListener('click',()=>{
        spantask.remove();
        checkbox.remove();
        cancel.remove();
        
    });

    
    
    let tr = document.createElement('tr');
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td');

    td1.appendChild(spantask);
    td2.appendChild(checkbox);
    td3.appendChild(cancel);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);

    // listbox.appendChild(newDiv);


function save()
{
    var new_data = document.getElementById("task").value;

    if(localStorage.getItem('data')==null)
    {
        localStorage.setItem('data','[]');
    }
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    localStorage.setItem('data',JSON.stringify(old_data));
}

task.addEventListener("Enter",save());






}