document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transactionForm');
    const transactionTable = document.getElementById('transactionTable');
  
    // Function to add a transaction to the table
    const addTransaction = (type, description, amount) => {
      const row = document.createElement('tr');
      const dateCell = document.createElement('td');
      const typeCell = document.createElement('td');
      const descriptionCell = document.createElement('td');
      const amountCell = document.createElement('td');
  
      // Fill cells with transaction data
      const today = new Date().toLocaleDateString();
      dateCell.textContent = today;
      typeCell.textContent = type.charAt(0).toUpperCase() + type.slice(1); // Capitalize type
      descriptionCell.textContent = description;
      amountCell.textContent = `₹${parseFloat(amount).toFixed(2)}`;
  
      // Append cells to the row
      row.appendChild(dateCell);
      row.appendChild(typeCell);
      row.appendChild(descriptionCell);
      row.appendChild(amountCell);
  
      // Append row to the table body
      transactionTable.appendChild(row);
    };
  
    // Event listener for the form
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get form values
      const type = document.getElementById('type').value;
      const description = document.getElementById('description').value;
      const amount = document.getElementById('amount').value;
  
      // Add transaction to the table
      addTransaction(type, description, amount);
  
      // Clear the form
      form.reset();
    });
  });
  