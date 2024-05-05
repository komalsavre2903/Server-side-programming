function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    console.log(hours + ':' + minutes + ':' + seconds);
  }
  
  setInterval(displayTime, 1000);
  