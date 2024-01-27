/* start the experiment */
function startExperiment() {
    openFullscreen();
    jsPsych.init({
        timeline: timeline,
        show_progress_bar: true,
        preload_video: [],
        preload_audio: [],
        preload_images: [],
    });
}

/* write to data/.csv */
function saveData(name, data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "index.php"); // 'index.php' contains the php script described above
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
        JSON.stringify({
            filename: name,
            filedata: data,
        })
    );
}

//onbeforeunload in body
function areYouSure() {
    return "Write something clever here...";
}
areYouSure();

// Checks if string is empty, null, or undefined
function isEmpty(str) {
    return !str || !str.length;
}

// BELOW COURTESY OF GARY LUPYAN -- COPIED FROM
//  http://sapir.psych.wisc.edu/wiki/index.php/MTurk
function getParamFromURL(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return "";
    else return results[1];
}

// Fisher-Yates (or Knuth) shuffle algorithm
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index lower than the current index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
