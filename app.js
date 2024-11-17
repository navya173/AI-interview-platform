document.getElementById('checkCameraBtn').addEventListener('click', () => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
        const camera = devices.find(device => device.kind === 'videoinput');
        const cameraStatusMessage = document.getElementById('cameraStatusMessage');
        if (camera) {
            cameraStatusMessage.textContent = 'Camera is working!';
            cameraStatusMessage.style.color = 'green';
        } else {
            cameraStatusMessage.textContent = 'Camera not found!';
            cameraStatusMessage.style.color = 'red';
        }
    });
});

document.getElementById('checkMicBtn').addEventListener('click', () => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
        const microphone = devices.find(device => device.kind === 'audioinput');
        const micStatusMessage = document.getElementById('micStatusMessage');
        if (microphone) {
            micStatusMessage.textContent = 'Microphone is working!';
            micStatusMessage.style.color = 'green';
        } else {
            micStatusMessage.textContent = 'Microphone not found!';
            micStatusMessage.style.color = 'red';
        }
    });
});

function checkSetupCompletion() {
    const cameraStatus = document.getElementById('cameraStatusMessage').textContent;
    const micStatus = document.getElementById('micStatusMessage').textContent;
    const proceedBtn = document.getElementById('proceedBtn');
    
    if (cameraStatus.includes('working') && micStatus.includes('working')) {
        proceedBtn.disabled = false;
    } else {
        proceedBtn.disabled = true;
    }
}

document.getElementById('checkCameraBtn').addEventListener('click', checkSetupCompletion);
document.getElementById('checkMicBtn').addEventListener('click', checkSetupCompletion);
// Timer for question response
let timeRemaining = 120; // 2 minutes

function updateTimer() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeRemaining--;
    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
    }
}

const timerInterval = setInterval(updateTimer, 1000);
