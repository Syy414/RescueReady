// Display the leaderboard from localStorage
function displayLeaderboard() {
    // Fetch leaderboard data from localStorage
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardList = document.getElementById("leaderboard-list");

    // Check if the leaderboard exceeds 100 entries
    if (leaderboard.length > 100) {
        localStorage.removeItem('leaderboard'); // Clear leaderboard from localStorage
        leaderboardList.innerHTML = ''; // Clear displayed leaderboard
        const messageRow = document.createElement('tr');
        messageRow.innerHTML = `<td colspan="3">Leaderboard has been cleared due to exceeding 100 entries.</td>`;
        leaderboardList.appendChild(messageRow);
        return;
    }

    // Clear previous entries
    leaderboardList.innerHTML = '';

    // If leaderboard is empty, display a message
    if (leaderboard.length === 0) {
        const emptyMessage = document.createElement('tr');
        emptyMessage.innerHTML = `<td colspan="3">No entries yet.</td>`;
        leaderboardList.appendChild(emptyMessage);
        return;
    }

    // Populate leaderboard with entries
    leaderboard.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.username}</td>
            <td>${entry.score}</td>
        `;
        leaderboardList.appendChild(row);
    });
}

// Initialize the leaderboard
displayLeaderboard();
