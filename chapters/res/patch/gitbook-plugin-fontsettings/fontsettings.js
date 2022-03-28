

require(["gitbook", "jQuery"], function(gitbook, $) {

  var arr = ["url(https://s2.loli.net/2022/03/28/zhJQxDkXmSIMAHe.jpg)", 
             "url(https://s2.loli.net/2022/03/28/RznmaJC4yMtvG7w.jpg)",
             "url(https://s2.loli.net/2022/03/28/bUaDCHjGAvQZSnw.jpg)",
             "url(https://s2.loli.net/2022/03/28/C9VnfzHy2glMX8t.jpg)",
             "url(https://s2.loli.net/2022/03/28/4x5Lt38euZGNwSn.jpg)",
             "url(https://s2.loli.net/2022/03/28/GJQXeuibIZr3Wg1.jpg)",
             "url(https://s2.loli.net/2022/03/28/Hy8oXlqv7MCWN29.jpg)",
             "url(https://s2.loli.net/2022/03/28/WXw3VDG6eonRMIq.png)",
             "url(https://s2.loli.net/2022/03/28/3tZ6cvsDqgkHyAG.jpg)"];

  function getstyle(sname) {
    for (var i = 0; i < document.styleSheets.length; i++) {
      var rules;
      if (document.styleSheets[i].cssRules) {
        rules = document.styleSheets[i].cssRules;
      } else {
        rules = document.styleSheets[i].rules;
      }
      for (var j = 0; j < rules.length; j++) {
        if (rules[j].selectorText == sname) {
          return rules[j].style;
        }
      }
    }
  }

  function rand_background() {
    var cl = getstyle(".book.color-theme-1");
    cl.background = arr[Math.floor((Math.random() * arr.length))];
  }

  // Init configuration at start
  gitbook.events.bind('start',
  function(e, config) { setInterval(rand_background, 1000 * 60 * 3);
  });
}
);