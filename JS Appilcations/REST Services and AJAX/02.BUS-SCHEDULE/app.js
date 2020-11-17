function solve() {
    let stopId = 'depot';
    const info = document.getElementById('info');
    const baseUrl = 'https://judgetests.firebaseio.com/schedule/';

    function changeBtn(){
        const departBtn = document.getElementById('depart');
        const arriveBtn = document.getElementById('arrive');
        if(departBtn.disabled) {
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        }else{
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
    }

    function depart() {
        const url = `${baseUrl}${stopId}.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                info.textContent = `Next stop ${data.name}`;
            });
            
            changeBtn()
        }
        
        function arrive() {
            const url = `${baseUrl}${stopId}.json`;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                info.textContent = `Arriving at ${data.name}`;
                stopId = data.next;
            });

        changeBtn()
    }

    return {
        depart,
        arrive
    };
}

let result = solve();