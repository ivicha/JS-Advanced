function attachEvents() {
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');
    let phonebook = document.getElementById('phonebook'); 

    loadBtn.addEventListener('click', () => {
        phonebook.textContent = '';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                Object.keys(data).forEach((person) => {
                    let li = document.createElement('li');
                    li.textContent = `${data[person].person}: ${data[person].phone}`;
                    let delBtn = document.createElement('button');
                    delBtn.textContent = 'Delete';
                    delBtn.addEventListener('click', () => {del(person)});
                    li.appendChild(delBtn);
                    phonebook.appendChild(li);
                });
            })
    })
        
    createBtn.addEventListener('click', () => {
        let personField = document.getElementById('person');
        let phoneField = document.getElementById('phone');
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ person: personField.value, phone: phoneField.value }),
        });
            
        personField.value = '';
        phoneField.value = '';
    })
        
    function del(key){
        let delUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
        fetch(delUrl, { method: "DELETE" });
    }
}

attachEvents();