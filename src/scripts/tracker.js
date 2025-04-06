/** @format */

// Load tracker data from localStorage
function loadTrackerData() {
  const savedData = localStorage.getItem("trackerData");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    return parsedData;
  }
  return { MODs: [], fillers: [] };
}

// Save tracker data to localStorage
function saveTrackerData(data) {
  localStorage.setItem("trackerData", JSON.stringify(data));
}

// Update the tracker display
function updateTrackerDisplay() {
  const trackerOutput = document.getElementById("tracker-output");
  const trackerData = loadTrackerData();

  trackerOutput.innerHTML = `
        <h3>MODs</h3>
        <ul>
            ${trackerData.MODs.map(
              (member) => `<li>${member.name}: ${member.count} shifts</li>`
            ).join("")}
        </ul>
        <h3>Fillers</h3>
        <ul>
            ${trackerData.fillers
              .map(
                (member) => `<li>${member.name}: ${member.count} shifts</li>`
              )
              .join("")}
        </ul>
    `;
}

// Reset the tracker data
function resetTracker() {
  const trackerData = {
    MODs: [
      { name: "Amy", count: 0 },
      { name: "Mitch", count: 0 },
      { name: "Margret", count: 0 },
      { name: "Shawn", count: 0 },
      { name: "Nick", count: 0 },
    ],
    fillers: [
      { name: "Cody", count: 0 },
      { name: "Veronica", count: 0 },
      { name: "Vicky", count: 0 },
      { name: "Karen", count: 0 },
      { name: "Rita", count: 0 },
      { name: "Melli", count: 0 },
    ],
  };
  saveTrackerData(trackerData);
  updateTrackerDisplay();
}

// Initialize the tracker page
document
  .getElementById("reset-tracker")
  .addEventListener("click", resetTracker);
updateTrackerDisplay();

// Load tracker data from localStorage
function loadTrackerData() {
  const savedData = localStorage.getItem("trackerData");
  if (savedData) {
    return JSON.parse(savedData);
  }
  return {
    MODs: [
      { name: "Amy", count: 0 },
      { name: "Mitch", count: 0 },
      { name: "Margret", count: 0 },
      { name: "Shawn", count: 0 },
      { name: "Nick", count: 0 },
    ],
    fillers: [
      { name: "Cody", count: 0 },
      { name: "Veronica", count: 0 },
      { name: "Vicky", count: 0 },
      { name: "Karen", count: 0 },
      { name: "Rita", count: 0 },
      { name: "Melli", count: 0 },
    ],
  };
}

// Save tracker data to localStorage
function saveTrackerData(data) {
  localStorage.setItem("trackerData", JSON.stringify(data));
}

// Update the tracker display
function updateTrackerDisplay() {
  const trackerOutput = document.getElementById("tracker-output");
  const trackerData = loadTrackerData();

  trackerOutput.innerHTML = `
        <h3>MODs</h3>
        <ul>
            ${trackerData.MODs.map((member) => `<li>${member.name}: ${member.count} shifts</li>`).join("")}
        </ul>
        <h3>Fillers</h3>
        <ul>
            ${trackerData.fillers.map((member) => `<li>${member.name}: ${member.count} shifts</li>`).join("")}
        </ul>
    `;
}

// Reset the tracker data
function resetTracker() {
  const trackerData = {
    MODs: [
      { name: "Amy", count: 0 },
      { name: "Mitch", count: 0 },
      { name: "Margret", count: 0 },
      { name: "Shawn", count: 0 },
      { name: "Nick", count: 0 },
    ],
    fillers: [
      { name: "Cody", count: 0 },
      { name: "Veronica", count: 0 },
      { name: "Vicky", count: 0 },
      { name: "Karen", count: 0 },
      { name: "Rita", count: 0 },
      { name: "Melli", count: 0 },
    ],
  };
  saveTrackerData(trackerData);
  updateTrackerDisplay();
}

// Initialize the tracker page
document.getElementById("reset-tracker").addEventListener("click", resetTracker);
updateTrackerDisplay();