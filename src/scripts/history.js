/** @format */

// Load schedule history from localStorage
function loadScheduleHistory() {
  const savedHistory = localStorage.getItem("scheduleHistory");
  if (savedHistory) {
    return JSON.parse(savedHistory);
  }
  return []; // Return an empty array if no history exists
}

// Update the history display
function updateHistoryDisplay() {
  const historyOutput = document.getElementById("history-output");
  const scheduleHistory = loadScheduleHistory();

  if (scheduleHistory.length === 0) {
    historyOutput.innerHTML = "<p>No schedule history available.</p>";
    return;
  }

  historyOutput.innerHTML = scheduleHistory
    .map(
      (entry, index) => `
            <div>
                <h3>Schedule #${index + 1} - ${entry.date}</h3>
                <p><strong>MOD:</strong> ${entry.MODs.join(", ")}</p>
                <p><strong>Fillers:</strong> ${entry.fillers.join(", ")}</p>
                <hr>
            </div>
        `
    )
    .join("");
}

// Initialize the history page
updateHistoryDisplay();
// Load schedule history from localStorage
function loadScheduleHistory() {
    const savedHistory = localStorage.getItem("scheduleHistory");
    if (savedHistory) {
        return JSON.parse(savedHistory);
    }
    return []; // Return an empty array if no history exists
}

// Update the history display
function updateHistoryDisplay() {
    const historyOutput = document.getElementById("history-output");
    const scheduleHistory = loadScheduleHistory();

    if (scheduleHistory.length === 0) {
        historyOutput.innerHTML = "<p>No schedule history available.</p>";
        return;
    }

    historyOutput.innerHTML = scheduleHistory
        .map(
            (entry, index) => `
            <div>
                <h3>Schedule #${index + 1} - ${entry.date}</h3>
                <p><strong>MOD:</strong> ${entry.MODs.join(", ")}</p>
                <p><strong>Fillers:</strong> ${entry.fillers.join(", ")}</p>
                <hr>
            </div>
        `
        )
        .join("");
}

// Clear the schedule history
function clearHistory() {
    localStorage.removeItem("scheduleHistory");
    alert("Schedule history has been cleared.");
    updateHistoryDisplay(); // Refresh the display after clearing
}

// Initialize the history page
document.getElementById("clear-history").addEventListener("click", clearHistory);
updateHistoryDisplay();