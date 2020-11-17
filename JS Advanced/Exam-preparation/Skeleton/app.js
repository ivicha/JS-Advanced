function solve() {
    let taskName = document.getElementById('task');
    let taskDescription = document.getElementById('description');
    let taskDate = document.getElementById('date');
    let addButton = document.getElementById('add');

    let openSection = document.getElementsByTagName('section')[1];
    let progressSection = document.getElementsByTagName('section')[2];
    let completeSection = document.getElementsByTagName('section')[3];

    addButton.addEventListener('click', (event) => {
        event.preventDefault();

        if(taskName.value == '' || taskDescription.value == '' || taskDate == ''){
            return;
        }

        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerText = taskName.value;
        let descP = document.createElement('p');
        descP.innerText = `Description: ${taskDescription.value}`;
        let dateP = document.createElement('p');
        dateP.innerText = `Due Date: ${taskDate.value}`;
        let divButtons = document.createElement('div');
        divButtons.className = 'flex';

        let startButton = document.createElement('button');
        startButton.className = 'green';
        startButton.textContent = 'Start';
        let deleteButton = document.createElement('button');
        deleteButton.className = 'red';
        deleteButton.textContent = 'Delete';

        startButton.addEventListener('click', (event) => {
            let parentArticle = startButton.parentElement.parentElement;
            startButton.remove();
            progressSection.lastElementChild.appendChild(parentArticle);
            let finishButton = document.createElement('button');
            finishButton.className = 'orange';
            finishButton.textContent = 'Finish';
            parentArticle.lastElementChild.appendChild(finishButton);

            finishButton.addEventListener('click', (event) => {
                let lastParentElement = finishButton.parentElement.parentElement;
                finishButton.parentElement.remove();
                completeSection.lastElementChild.appendChild(lastParentElement);
            })

        })

        deleteButton.addEventListener('click', deleteArticle);

        divButtons.appendChild(startButton);
        divButtons.appendChild(deleteButton);

        article.appendChild(h3);
        article.appendChild(descP);
        article.appendChild(dateP);
        article.appendChild(divButtons);
        openSection.lastElementChild.appendChild(article);

        taskName.value = '';
        taskDescription.value = '';
        taskDate.value = '';
    })

    function deleteArticle(event){
        event.target.parentElement.parentElement.remove();
    }
}