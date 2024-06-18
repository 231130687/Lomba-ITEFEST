document.getElementById('sampah-upload').addEventListener('change', function() {
    const files = this.files;
    const previewContainer = document.getElementById('image-preview');
    previewContainer.innerHTML = '';

    if (files.length > 3) {
        alert('Maksimal upload 3 foto sampah!');
        this.value = ''; // Reset input
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            previewContainer.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
});
