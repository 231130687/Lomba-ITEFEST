function calculateTotal() {
    const sisaMakanan = parseFloat(document.getElementById('sisaMakanan').value) || 0;
    const dedaunan = parseFloat(document.getElementById('dedaunan').value) || 0;
    const rotan = parseFloat(document.getElementById('rotan').value) || 0;
    const rantingPohon = parseFloat(document.getElementById('rantingPohon').value) || 0;
    const kayu = parseFloat(document.getElementById('kayu').value) || 0;
    const bambu = parseFloat(document.getElementById('bambu').value) || 0;

    const total = sisaMakanan + dedaunan + rotan + rantingPohon + kayu + bambu;
    document.getElementById('total').textContent = total;
}

function lanjut() {
    alert("Lanjut button clicked!");
}
