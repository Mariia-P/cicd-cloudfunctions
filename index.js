exports.helloWorld = (req, res) => {
    const message="<font color='blue'>Hello СloudFunction from Staging NEW TEXT!</font><br><b>App Version 1.1</b>";
    res.status(200).send(message);
  };