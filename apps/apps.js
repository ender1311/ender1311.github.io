(function () {
  var EMAIL_READY = typeof CONTACT_EMAIL === "string" && CONTACT_EMAIL.trim() && CONTACT_EMAIL.trim() !== "TBD";
  var email = EMAIL_READY ? CONTACT_EMAIL.trim() : "";

  document.querySelectorAll("[data-contact]").forEach(function (el) {
    if (EMAIL_READY) {
      el.innerHTML = 'Email: <a href="mailto:' + email + '">' + email + "</a>";
    } else {
      el.textContent = "Contact: email coming soon";
    }
  });

  document.querySelectorAll("[data-cta]").forEach(function (el) {
    if (EMAIL_READY) {
      var app = el.getAttribute("data-app") || "the app";
      el.setAttribute("href", "mailto:" + email + "?subject=" + encodeURIComponent("Notify me: " + app + " launch"));
      el.removeAttribute("aria-disabled");
      el.removeAttribute("tabindex");
    } else {
      el.removeAttribute("href");
      el.setAttribute("role", "link");
      el.setAttribute("aria-disabled", "true");
      el.setAttribute("tabindex", "-1");
    }
  });

  var root = document.documentElement;
  var tc = document.getElementById("tc");
  var mq = matchMedia("(prefers-color-scheme: dark)");
  function resolved(c) {
    return c === "system" ? (mq.matches ? "dark" : "light") : c;
  }
  function paint() {
    if (tc) tc.setAttribute("content", getComputedStyle(root).getPropertyValue("--primary").trim() || "#070c0f");
  }
  function sync(c) {
    document.querySelectorAll(".theme-seg button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-choice") === c));
    });
  }
  function apply(c) {
    root.className = resolved(c);
    root.setAttribute("data-theme-choice", c);
    try {
      localStorage.setItem("theme", c);
    } catch (e) {}
    sync(c);
    paint();
  }
  document.querySelectorAll(".theme-seg button").forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.getAttribute("data-choice"));
    });
  });
  mq.addEventListener("change", function () {
    if ((root.getAttribute("data-theme-choice") || "dark") === "system") {
      root.className = mq.matches ? "dark" : "light";
      paint();
    }
  });
  sync(root.getAttribute("data-theme-choice") || "dark");
  paint();
})();
