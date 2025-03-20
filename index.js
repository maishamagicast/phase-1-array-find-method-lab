// code your solution here

const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // Add more records as needed
];

function superbowlWin(record) {
    const winningRecord = record.find(recordItem => recordItem.result === 'W'); // Find the first record with result 'W'
    return winningRecord ? winningRecord.year : undefined; // Return the year if found, otherwise undefined
}

// Test the function
console.log(superbowlWin(record)); // Should log the year of the first win or undefined