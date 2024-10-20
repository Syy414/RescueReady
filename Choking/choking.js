function toggleDetails(detailId) {
    const details = document.getElementById(detailId);
    details.classList.toggle('hidden');
}

function handleYes() {
    document.getElementById('resultText').textContent = "Perform the Heimlich maneuver immediately.";
    document.getElementById('flowchartResult').classList.remove('hidden');
    document.getElementById('startNode').style.display = 'none';
}

function handleNo() {
    document.getElementById('resultText').textContent = "Fortunately, the person is not choking.";
    document.getElementById('flowchartResult').classList.remove('hidden');
    document.getElementById('startNode').style.display = 'none';
}

function resetFlowchart() {
    document.getElementById('resultText').textContent = "";
    document.getElementById('flowchartResult').classList.add('hidden');
    document.getElementById('startNode').style.display = 'block';
}