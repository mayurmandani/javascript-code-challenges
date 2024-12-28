const data = [
    { name: 'Event 1', date: '2024-12-01' },
    { name: 'Event 2', date: '2024-11-25' },
    { name: 'Event 3', date: '2024-12-10' }
  ];

function changeDateFormat(json, dateKey, newFormat = 'MM/DD/YYYY') {
    json.forEach(item => {
            const date = new Date(item[dateKey]);
            item[dateKey] = formateDate(date, newFormat);
    });
    return json;
}


// Helper function formate date
function formateDate(date, format) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    if(format === 'MM/DD/YYYY') {
        return date.toLocaleDateString('en-US', options); // Format : MM/DD/YYYY
    } else if (format === 'DD/MM/YYYY') {
        return date.toLocaleDateString('en-GB', options); // Format : DD/MM/YYYY
    } else {
        return date.toISOString().split('T')[0]; // Default : YYYY-MM-DD
    }
}

function compareDates(json, dateKey) {
    json.sort((a, b) => {
        const dateA = new Date(a[dateKey]);
        const dateB = new Date(b[dateKey]);
        if(dateA < dateB) return -1;
        if(dateA > dateB) return 1;
        return 0;
    });
    return json;
}

const formattedData = changeDateFormat(data, 'date', 'MM/DD/YYYY');
console.log('Formatted Data:', formattedData);

// Compare the dates and sort
const sortedData = compareDates(formattedData, 'date');
console.log('Sorted Data:', sortedData);