// ping.js

function Pinger_ping(ip, callback) {
    if (!this.inUse) {
      this.inUse = true;
      this.callback = callback;
      this.ip = ip;
  
      var _that = this;
  
      this.img = new Image();
      this.img.onload = function() { _that.good(); };
      this.img.onerror = function() { _that.good(); };
  
      this.start = new Date().getTime();
      this.img.src = "http://" + ip + "/?cachebreaker=" + new Date().getTime(); // Cache breaker to avoid caching issues
      this.timer = setTimeout(function() { _that.bad(); }, 1500);
    }
  }
  
  Pinger_ping.prototype.good = function() {
    clearTimeout(this.timer);
    this.inUse = false;
    if (this.callback) this.callback(true);
  };
  
  Pinger_ping.prototype.bad = function() {
    this.inUse = false;
    if (this.callback) this.callback(false);
  };
  
  function pingURL(url, callback) {
    var pinger = new Pinger_ping(url, callback);
  }
  