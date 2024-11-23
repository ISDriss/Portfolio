/**
 * Load a CSV file and render it into an HTML table.
 * @param {string} csvUrl - The URL of the CSV file.
 * @param {string} tableId - The ID of the target HTML table.
 */
function loadCsvToTable(csvUrl, tableId) {
    fetch(csvUrl)
        .then(response => response.text())
        .then(csv => {
            const rows = csv.trim().split('\n'); // Split CSV into rows
            const table = document.getElementById(tableId);

            if (!table) {
                console.error(`Table with ID "${tableId}" not found.`);
                return;
            }

            rows.forEach((row, index) => {
                const tr = document.createElement('tr');
                const cells = row.split(';'); // Split each row into cells
                cells.forEach(cell => {
                    const td = document.createElement(index === 0 ? 'th' : 'td');
                    td.textContent = cell.trim();
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
        })
        .catch(error => console.error(`Error loading CSV from ${csvUrl}:`, error));
}

// Example Usage
// loadCsvToTable(
//     'https://yourusername.github.io/repository-name/data/filename.csv',
//     'dataTable'
// );
