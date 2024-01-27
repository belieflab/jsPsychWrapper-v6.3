let timeline = [];

let instructions0 = {
    type: "html-keyboard-response",
    stimulus:
        `
    <p>Hello!</p>
    <p>Please edit exp/conf.php to configure the experiment.</p>
    <p>You may set the experiment name: ` +
        experimentName +
        `</p>
    <p>Experiment alias: ` +
        experimentAlias +
        `</p>
    <p>And the language: ` +
        language +
        `</p>
    <p>You may also set other variables as you choose.</p>
    <p>Press Space to continue.</p>
`,
    choices: [32],
    on_finish: function (data) {
        data.index = "lol";
    },
};

let dataSave = {
    type: "html-keyboard-response",
    stimulus: dataSaveAnimation,
    choices: jsPsych.NO_KEYS,
    trial_duration: 5000,
    on_finish: () => {
        saveData(experimentAlias + "_" + subjectId, jsPsych.data.get().csv()); //function with file name and which type of file as the 2 arguments
        document.getElementById("unload").onbeforeunload = ""; //removes popup (are you sure you want to exit) since data is saved now
        // returns cursor functionality
        $(document).ready(function () {
            $("body").addClass("showCursor"); // returns cursor functionality
            closeFullscreen(); // kill fullscreen
        });
    },
};

let end = {
    type: "html-keyboard-response",
    stimulus:
        "<p style='color:white;'>Thank you!</p>" +
        "<p style='color:white;'>You have successfully completed the experiment and your data has been saved.</p>" +
        // "<p style='color:white;'>To leave feedback on this task, please click the following link:</p>"+
        // "<p style='color:white;'><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
        // "<p style='color:white;'>Please wait for the experimenter to continue.</p>"+
        "<p style='color:white;'><i>You may now close the expriment window at anytime.</i></p>",
    choices: jsPsych.NO_KEYS,
    // on_load: function() {
    //   alert(reward);
    // }
};

$.getScript("exp/main.js");
