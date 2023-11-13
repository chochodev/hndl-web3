window.onload = function () {
    var e = document.createElement("div"),
      n = document.createElement("div"),
      t = document.createElement("div"),
      o = document.createElement("img"),
      i = document.createElement("iframe"),
      d = "oort-bot-button",
      r = "oort-bot-icon-box",
      s = "https://console.oortech.com";
  
    n.id = d;
    e.id = "oort-bot-window";
    t.id = r;
    o.id = "oort-bot-logo";
  
    n.style =
      "position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    border-radius: 25px;\n    background-color: #012d71;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;\n    cursor: pointer;\n    z-index: 999999998;\n    transition: all 0.2s ease-in-out 0s;\n    left: unset;\n    transform: scale(1);";
    t.style =
      "display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    z-index: 999999999;\n    border-radius: 50%;\n    overflow: hidden;\n    ";
  
    i.setAttribute("src", s + "/agent/" + window.__OORT__CONFIG__.agentId + "/" + window.__OORT__CONFIG__.secretKey);
    i.setAttribute("width", "100%");
    i.setAttribute("height", "100%");
    i.setAttribute("frameborder", "0");
    i.setAttribute("allow", "clipboard-read; clipboard-write");
  
    document.body.offsetWidth <= 800
      ? (e.style =
          "\n    border: none;\n    position: fixed;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px;\n    bottom: 0px;\n    right: 0px;\n    width: 100%;\n    height: 100%;\n    max-height: 824px;\n    border-radius: 0px;\n    display: none;\n    z-index: 999999999;\n    overflow: hidden;\n    left: unset;\n    "
        )
      : (e.style =
          "position: fixed;\n    flex-direction: column;\n    justify-content: space-between;\n    bottom: 90px;\n    width: 480px;\n    height: 80vh;\n    box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px;\n    display: none;\n    border-radius: 10px;\n    z-index: 999999999;\n    overflow: hidden;\n    right: 20px;\n    left: unset;\n");
  
    window.addEventListener("message", (e) => {
      const n = e.data.closeIframe,
        t = document.getElementById(d);
      n && t.click();
    });
  
    n.onmouseover = function () {
      n.style.transform = "scale(1.08)";
    };
  
    n.onmouseleave = function () {
      n.style.transform = "scale(1)";
    };
  
    var l = !1;
  
    new Promise((function (e, n) {
      e();
    })).then((function (e) {
      var i = s + "/agent/tmlogo.jpg";
      o.setAttribute("src", i);
      o.style.width = "100%";
      t.append(o);
      n.append(t);
      document.body.append(n);
    }));
  
    n.onclick = function () {
      l = !l;
      var n = document.getElementById(r);
  
      l
        ? ((e.style.display = "flex"),
          (n.innerHTML =
            '<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.468629 0.668642C1.09347 0.0438025 2.10653 0.0438025 2.73137 0.668642L8 5.93727L13.2686 0.668641C13.8935 0.0438024 14.9065 0.0438024 15.5314 0.668641C16.1562 1.29348 16.1562 2.30654 15.5314 2.93138L9.13137 9.33138C8.50653 9.95622 7.49347 9.95622 6.86863 9.33138L0.468629 2.93138C-0.15621 2.30654 -0.15621 1.29348 0.468629 0.668642Z" fill="white"/>\n    </svg>    \n    '),
          i.contentWindow.postMessage({ close: 2 }, "*"))
        : ((e.style.display = "none"),
          (n.innerHTML = `<img src="${s}/agent/tmlogo.jpg" style="width: 100%;" alt="" />`),
          i.contentWindow.postMessage({ close: 1 }, "*"));
    };
  
    e.append(i);
    document.body.append(e);
  };
  