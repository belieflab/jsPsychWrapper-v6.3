<!DOCTYPE html>
<html>

<head>
  <title>Experiment Title</title>
  <script>
    //onbeforeunload in body
    function areYouSure() {
      return "Write something clever here...";
    }
    areYouSure();
  </script>

</head>

<body id='unload' onbeforeunload="return areYouSure()">


  <script>
    function getParamFromURL(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regexS = "[\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(window.location.href);
      if (results == null)
        return "";
      else
        return results[1];
    }
    // Take the user to a random URL, selected from the pool below 
    var links = [];
    const workerIdFromParamString = getParamFromURL('workerId');
    const prolificPidFromParamString = getParamFromURL('PROLIFIC_PID');

    if (workerIdFromParamString) {
      links[0] = "index.php" + "?workerId=" + workerIdFromParamString; // Expt 1: Paranoia Reversals 11-30-2017
    }
    if (prolificPidFromParamString) {
      links[0] = "index.php" + "?PROLIFIC_PID=" + prolificPidFromParamString; // Expt 1: Paranoia Reversals 11-30-2017
    }


    function randomizeURL(linkArray) {
      window.location = linkArray[Math.floor(Math.random() * linkArray.length)];
    }

    randomizeURL(links);
  </script>

</body>

</html>
