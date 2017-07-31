const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text){
    const li = document.createElement('li');
    li.textContent = text;

    const label = document.createElement('label');
    label.textContent = 'Confirmed';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    const button = document.createElement('button');
    button.textContent = 'remove';
    li.appendChild(button);

    return li;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';

    const li = createLI(text);

    ul.appendChild(li);
});

//listen for checkbox change
ul.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if(checked){
        listItem.className = 'responded';
    }else{
        listItem.className = '';
    }
});

//listen for remove button to be clicked
ul.addEventListener('click', (e) => {
    //filter out click events that aren't on the btn
    if(e.target.tagName === 'BUTTON'){
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);

    }
});
