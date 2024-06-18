// Sample order data
const orders = [
    {
        id: 1,
        date: '14 Mei 2023',
        order_code: 'B213/VW7B',
        non_organic: 1,
        organic: 2,
        status: 'Menunggu'
    }
];

function loadOrders() {
    const orderTable = document.getElementById('orderTable');
    orderTable.innerHTML = '';
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.date}</td>
            <td>${order.order_code}</td>
            <td class="order-item">
                <img src="https://via.placeholder.com/40" alt="Anorganik">
                <span>Sampah Anorganik ${order.non_organic} keranjang</span>
            </td>
            <td class="order-item">
                <img src="https://via.placeholder.com/40" alt="Organik">
                <span>Sampah Organik ${order.organic} keranjang</span>
            </td>
            <td id="status-${order.id}">${order.status}</td>
            <td><button class="order-status-button" onclick="updateStatus(${order.id}, 'Diangkut')">Update Status</button></td>
        `;
        orderTable.appendChild(row);
    });
}

function updateStatus(orderId, status) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        document.getElementById('status-' + orderId).innerText = status;
    }
}

// Load orders when the page loads
window.onload = loadOrders;
