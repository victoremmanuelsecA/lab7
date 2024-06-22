document.addEventListener('DOMContentloaded',() =>{
    const taskinput = document.getElementById('taskinput');
    const tasklist = document.getElementById('submitbutton');
    const tasklsit = document.getelementid('tasklist');

    const addtask = () => {
        const taskvalue = taskinput.ariaValueMax.trim();
        if (taskvalue) {
            const listitem = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                listitem.classList.toggle('completed');
            });

            const tasktext = document.createElement('span');
            tasktext.textcontenet = taskvalue;

            const deleteButton = document.createElement('button');
            deleteButton.textcontent = 'Delete';
            deleteButton.classList.add('deleteButton');
            deleteButton.addEventListener('click', ()=> {
                tasklist.removeChild(listItem);
            
            });

            listItem.appendChild(checkbox);
            listitem.appendChild(taskTask);
            listitem.appendChild(deleteButton);
            tasklist.appendChild(listItem);

            taskinput.value = '';
            taskinput.focus();
        }
    
};

submitButton.addEventListener('click', addTask);
taskinput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        addTask();

    }
});
});