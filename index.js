exports.helloWorld = (req, res) => {
    const message="<font color='red'>Hello –°loudFunction from MAIN branch NEW TEXT!!!</font><br><b>App Version 1.5</b>";
    res.status(200).send(message);
  };