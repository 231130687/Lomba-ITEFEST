// history.js
document.addEventListener('DOMContentLoaded', function() {
    const historyList = document.getElementById('historyList');
    const noDataMessage = document.getElementById('noDataMessage');

    loadHistory();

    function loadHistory() {
        let history = JSON.parse(localStorage.getItem('formDataHistory')) || [];
        if (history.length === 0) {
            noDataMessage.style.display = 'block';
        } else {
            noDataMessage.style.display = 'none';
            history.forEach(item => addToHistoryList(item));
        }
    }

    function addToHistoryList(data) {
        const li = document.createElement('li');

        const textNode = document.createElement('p');
        textNode.textContent = data.text;

        const detailsNode = document.createElement('p');
        detailsNode.textContent = data.details;

        const imageNode = document.createElement('img');
        imageNode.src = data.image;
        imageNode.style.maxWidth = '200px'; // Set a max width for images

        li.appendChild(textNode);
        li.appendChild(detailsNode);
        li.appendChild(imageNode);
        historyList.appendChild(li);
    }
});
