/** @format */

// Team members with assignment counts
const team = {
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

// Temporary schedule to hold the generated schedule before confirmation
let tempSchedule = { MODs: [], fillers: [] };

// Load tracker data from localStorage
function loadTrackerData() {
  const savedData = localStorage.getItem("trackerData");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    team.MODs.forEach((member) => {
      const savedMember = parsedData.MODs.find((m) => m.name === member.name);
      if (savedMember) member.count = savedMember.count;
    });
    team.fillers.forEach((member) => {
      const savedMember = parsedData.fillers.find(
        (m) => m.name === member.name
      );
      if (savedMember) member.count = savedMember.count;
    });
  }
}

// Save tracker data to localStorage
function saveTrackerData() {
  const trackerData = {
    MODs: team.MODs,
    fillers: team.fillers,
  };
  localStorage.setItem("trackerData", JSON.stringify(trackerData));
}

// Update the tracker display and save data
function updateTracker() {
  const trackerOutput = document.getElementById("tracker-output");
  trackerOutput.innerHTML = `
        <h3>Workload Tracker</h3>
        <p><strong>MODs:</strong></p>
        <ul>
            ${team.MODs.map(
              (member) => `<li>${member.name}: ${member.count} shifts</li>`
            ).join("")}
        </ul>
        <p><strong>Fillers:</strong></p>
        <ul>
            ${team.fillers
              .map(
                (member) => `<li>${member.name}: ${member.count} shifts</li>`
              )
              .join("")}
        </ul>
    `;
  saveTrackerData(); // Save data whenever the tracker is updated
}

// Function to generate a schedule
function generateSchedule() {
  const dateInput = document.getElementById("date").value;
  const scheduleOutput = document.getElementById("schedule-output");

  if (!dateInput) {
    scheduleOutput.innerHTML = "<p>Please select a date.</p>";
    return;
  }

  const selectedDate = new Date(dateInput);
  const dayOfMonth = selectedDate.getDate();

  // Determine the number of people needed
  const isBusySaturday = dayOfMonth >= 1 && dayOfMonth <= 3;
  const numFillers = isBusySaturday ? 4 : 3;
  const numMODs = 1;

  // Select MODs and fillers with the least assignments
  tempSchedule.MODs = team.MODs.sort((a, b) => a.count - b.count)
    .slice(0, numMODs)
    .map((member) => member.name);
  tempSchedule.fillers = team.fillers
    .sort((a, b) => a.count - b.count)
    .slice(0, numFillers)
    .map((member) => member.name);

  // Display the schedule
  scheduleOutput.innerHTML = `
        <p><strong>Date:</strong> ${selectedDate.toDateString()}</p>
        <p><strong>MOD:</strong> ${tempSchedule.MODs.join(", ")}</p>
        <p><strong>Fillers:</strong> ${tempSchedule.fillers.join(", ")}</p>
        <p><em>Click "Submit Schedule" to confirm this schedule.</em></p>
    `;
}

// Function to confirm the schedule and update counts
function confirmSchedule() {
  if (!tempSchedule.MODs.length || !tempSchedule.fillers.length) {
    alert("No schedule to confirm. Please generate a schedule first.");
    return;
  }

  // Update the counts for the selected MODs and fillers
  team.MODs.forEach((member) => {
    if (tempSchedule.MODs.includes(member.name)) {
      member.count++;
    }
  });

  team.fillers.forEach((member) => {
    if (tempSchedule.fillers.includes(member.name)) {
      member.count++;
    }
  });

  // Clear the temporary schedule
  tempSchedule = { MODs: [], fillers: [] };

  // Display confirmation message
  document.getElementById("schedule-output").innerHTML = `
        <p>Schedule confirmed and counts updated!</p>
    `;

  // Update the tracker display
  updateTracker();
}

// Initialize the app
function initializeApp() {
  loadTrackerData(); // Load tracker data on app start
  updateTracker(); // Update the tracker display
}

// Attach event listeners to the buttons
document
  .getElementById("generate-schedule")
  .addEventListener("click", generateSchedule);
document
  .getElementById("submit-schedule")
  .addEventListener("click", confirmSchedule);

// Initialize the app
initializeApp();
 function confirmSchedule() {
   if (!tempSchedule.MODs.length || !tempSchedule.fillers.length) {
     alert("No schedule to confirm. Please generate a schedule first.");
     return;
   }

   // Update the counts for the selected MODs and fillers
   team.MODs.forEach((member) => {
     if (tempSchedule.MODs.includes(member.name)) {
       member.count++;
     }
   });

   team.fillers.forEach((member) => {
     if (tempSchedule.fillers.includes(member.name)) {
       member.count++;
     }
   });

   // Save updated tracker data to localStorage
   saveTrackerData();

   // Clear the temporary schedule
   tempSchedule = { MODs: [], fillers: [] };

   // Display confirmation message
   document.getElementById("schedule-output").innerHTML = `
        <p>Schedule confirmed and counts updated!</p>
    `;

   // Update the tracker display
   updateTracker();
 }

 // Save tracker data to localStorage
 function saveTrackerData() {
   const trackerData = {
     MODs: team.MODs,
     fillers: team.fillers,
   };
   localStorage.setItem("trackerData", JSON.stringify(trackerData));
 }
 function confirmSchedule() {
   if (!tempSchedule.MODs.length || !tempSchedule.fillers.length) {
     alert("No schedule to confirm. Please generate a schedule first.");
     return;
   }

   // Update the counts for the selected MODs and fillers
   team.MODs.forEach((member) => {
     if (tempSchedule.MODs.includes(member.name)) {
       member.count++;
     }
   });

   team.fillers.forEach((member) => {
     if (tempSchedule.fillers.includes(member.name)) {
       member.count++;
     }
   });

   // Save updated tracker data to localStorage
   saveTrackerData();

   // Save the schedule to history
   const scheduleHistory =
     JSON.parse(localStorage.getItem("scheduleHistory")) || [];
   scheduleHistory.push({
     date: new Date().toLocaleDateString(),
     MODs: tempSchedule.MODs,
     fillers: tempSchedule.fillers,
   });
   localStorage.setItem("scheduleHistory", JSON.stringify(scheduleHistory));

   // Clear the temporary schedule
   tempSchedule = { MODs: [], fillers: [] };

   // Display confirmation message
   document.getElementById("schedule-output").innerHTML = `
        <p>Schedule confirmed and counts updated!</p>
    `;

   // Update the tracker display
   updateTracker();
 }