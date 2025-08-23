const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const description = document.getElementById('description').value; // ✅ fixed
    const category = document.getElementById('category').value;      // ✅ fixed
    const amount = parseFloat(document.getElementById('amount').value); // ✅ fixed

    if (description && category && !isNaN(amount)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `                         <!-- ✅ fixed typo -->
            <td>${description}</td>
            <td>${category}</td>
            <td>$${amount.toFixed(2)}</td>`;
        expenseList.appendChild(newRow);
    }

    // Clear fields
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
});
