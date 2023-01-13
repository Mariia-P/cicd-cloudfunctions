exports.helloWorld = (req, res) => {
    const message="<font color='blue'>Hello СloudFunction from MAIN branch!!!</font><br><b>App Version 1.5</b>";
    res.status(200).send(message);
  };