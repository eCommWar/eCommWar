!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Share=e()}}(function(){var define,module,exports;
function getStyles(config){ return ""+config.selector+"{width:91px;height:20px}"+config.selector+" [class*=entypo-]:before{font-family:entypo,sans-serif}"+config.selector+" label{font-size:16px;cursor:pointer;margin:0;padding:5px 10px;border-radius:5px;background:"+config.ui.button_background+";color:"+config.ui.button_color+";-webkit-transition:all .3s ease;transition:all .3s ease}"+config.selector+" label:hover{opacity:.8}"+config.selector+" label span{text-transform:uppercase;font-size:.9em;font-family:Lato,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;padding-left:6px}"+config.selector+" .social{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scale(0) translateY(-190px);-ms-transform:scale(0) translateY(-190px);transform:scale(0) translateY(-190px);opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;margin-left:-15px}"+config.selector+" .social.active{opacity:1;-webkit-transition:all .4s ease;transition:all .4s ease}"+config.selector+" .social.active.center{margin-left:-45px}"+config.selector+" .social.active.left{margin-left:-115px}"+config.selector+" .social.active.right{margin-left:10px}"+config.selector+" .social.active.top{-webkit-transform:scale(1) translateY(-90px);-ms-transform:scale(1) translateY(-90px);transform:scale(1) translateY(-90px)}"+config.selector+" .social.active.top.center ul:after{margin:35px auto;border-top:20px solid #3b5998}"+config.selector+" .social.active.top.left ul:after{margin:35px 0 0 129px;border-top:20px solid #e34429}"+config.selector+" .social.active.top.right ul:after{margin:35px 0 0 10px;border-top:20px solid #6cdfea}"+config.selector+" .social.active.bottom{-webkit-transform:scale(1) translateY(45px);-ms-transform:scale(1) translateY(45px);transform:scale(1) translateY(45px);margin-top:-14px}"+config.selector+" .social.active.bottom.center ul:after{margin:-10px auto;border-bottom:20px solid #3b5998}"+config.selector+" .social.active.bottom.left ul:after{margin:-10px 0 0 129px;border-bottom:20px solid #e34429}"+config.selector+" .social.active.bottom.right ul:after{margin:-10px 0 0 10px;border-bottom:20px solid #6cdfea}"+config.selector+" .social ul{position:relative;left:0;right:0;width:180px;height:46px;color:#fff;background:#3b5998;margin:auto;padding:0;list-style:none}"+config.selector+" .social ul li{font-size:20px;cursor:pointer;width:60px;margin:0;padding:12px 0;text-align:center;float:left;display:block;height:22px;position:relative;z-index:2;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-transition:all .3s ease;transition:all .3s ease}"+config.selector+" .social ul li:hover{color:rgba(0,0,0,.5)}"+config.selector+" .social ul:after{content:'';display:block;width:0;height:0;position:absolute;left:0;right:0;border-left:20px solid transparent;border-right:20px solid transparent}"+config.selector+" .social li[class*=twitter]{background:#6cdfea;padding:12px 0}"+config.selector+" .social li[class*=gplus]{background:#e34429;padding:12px 0}"};var ShareUtils;

if ((!("classList" in document.documentElement)) && Object.defineProperty && typeof HTMLElement !== "undefined") {
  Object.defineProperty(HTMLElement.prototype, "classList", {
    get: function() {
      var ret, self, update;
      update = function(fn) {
        return function(value) {
          var classes, index;
          classes = self.className.split(/\s+/);
          index = classes.indexOf(value);
          fn(classes, index, value);
          self.className = classes.join(" ");
        };
      };
      self = this;
      ret = {
        add: update(function(classes, index, value) {
          ~index || classes.push(value);
        }),
        remove: update(function(classes, index) {
          ~index && classes.splice(index, 1);
        }),
        toggle: update(function(classes, index, value) {
          if (~index) {
            classes.splice(index, 1);
          } else {
            classes.push(value);
          }
        }),
        contains: function(value) {
          return !!~self.className.split(/\s+/).indexOf(value);
        },
        item: function(i) {
          return self.className.split(/\s+/)[i] || null;
        }
      };
      Object.defineProperty(ret, "length", {
        get: function() {
          return self.className.split(/\s+/).length;
        }
      });
      return ret;
    }
  });
}

ShareUtils = (function() {
  function ShareUtils() {}

  ShareUtils.prototype.extend = function(to, from, overwrite) {
    var hasProp, prop;
    for (prop in from) {
      hasProp = to[prop] !== undefined;
      if (hasProp && typeof from[prop] === "object") {
        this.extend(to[prop], from[prop], overwrite);
      } else {
        if (overwrite || !hasProp) {
          to[prop] = from[prop];
        }
      }
    }
  };

  ShareUtils.prototype.hide = function(el) {
    return el.style.display = "none";
  };

  ShareUtils.prototype.show = function(el) {
    return el.style.display = "block";
  };

  ShareUtils.prototype.has_class = function(el, class_name) {
    return el.classList.contains(class_name);
  };

  ShareUtils.prototype.add_class = function(el, class_name) {
    return el.classList.add(class_name);
  };

  ShareUtils.prototype.remove_class = function(el, class_name) {
    return el.classList.remove(class_name);
  };

  ShareUtils.prototype.is_encoded = function(str) {
    return decodeURIComponent(str) !== str;
  };

  ShareUtils.prototype.popup = function(url) {
    var popup;
    popup = {
      width: 500,
      height: 350
    };
    popup.top = (screen.height / 2) - (popup.height / 2);
    popup.left = (screen.width / 2) - (popup.width / 2);
    return window.open(url, 'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=" + popup.left + ",top=" + popup.top + ",width=" + popup.width + ",height=" + popup.height);
  };

  return ShareUtils;

})();
var Share,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Share = (function(_super) {
  __extends(Share, _super);

  function Share(element, options) {
    var content;
    this.element = element;
    this.el = {
      head: document.getElementsByTagName('head')[0],
      body: document.getElementsByTagName('body')[0]
    };
    this.config = {
      protocol: ['http', 'https'].indexOf(window.location.href.split(':')[0]) === -1 ? 'https://' : '//',
      url: window.location.href,
      caption: null,
      title: (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) ? content.getAttribute('content') : void 0,
      image: (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) ? content.getAttribute('content') : void 0,
      text: (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) ? content.getAttribute('content') : '',
      ui: {
        flyout: 'top center',
        button_font: true,
        button_color: '#333333',
        button_background: '#ffffff',
        button_icon: 'export',
        button_text: 'Share'
      },
      networks: {
        google_plus: {
          enabled: true,
          url: null
        },
        twitter: {
          enabled: true,
          url: null,
          text: null
        },
        facebook: {
          enabled: true,
          url: null,
          app_id: null,
          title: null,
          caption: null,
          text: null,
          image: null
        },
        hacker_news: {
          enabled: true,
          url: null,
          title: null
        },
        reddit: {
          enabled: true,
          url: null
        }
      }
    };
    this.setup(element, options);
    return this;
  }

  Share.prototype.setup = function(element, opts) {
    var index, instance, instances, _i, _len;
    instances = document.querySelectorAll(element);
    this.extend(this.config, opts, true);
    this.set_global_configuration();
    this.normalize_network_configuration();
    this.inject_icons();
    if (this.config.ui.button_font) {
      this.inject_fonts();
    }
    if (this.config.networks.facebook.enabled) {
      this.inject_facebook_sdk();
    }
    for (index = _i = 0, _len = instances.length; _i < _len; index = ++_i) {
      instance = instances[index];
      this.setup_instance(element, index);
    }
  };

  Share.prototype.setup_instance = function(element, index) {
    var button, instance, label, network, networks, _i, _len, _results,
      _this = this;
    instance = document.querySelectorAll(element)[index];
    this.hide(instance);
    this.add_class(instance, "sharer-" + index);
    instance = document.querySelectorAll(element)[index];
    this.inject_css(instance);
    this.inject_html(instance);
    this.show(instance);
    label = instance.getElementsByTagName("label")[0];
    button = instance.getElementsByClassName("social")[0];
    networks = instance.getElementsByTagName('li');
    label.addEventListener("click", function() {
      return _this.event_toggle(button);
    });
    _this = this;
    _results = [];
    for (index = _i = 0, _len = networks.length; _i < _len; index = ++_i) {
      network = networks[index];
      _results.push(network.addEventListener("click", function() {
        _this.event_network(instance, this);
        return _this.event_close(button);
      }));
    }
    return _results;
  };

  Share.prototype.event_toggle = function(button) {
    if (this.has_class(button, "active")) {
      return this.event_close(button);
    } else {
      return this.event_open(button);
    }
  };

  Share.prototype.event_open = function(button) {
    return this.add_class(button, "active");
  };

  Share.prototype.event_close = function(button) {
    return this.remove_class(button, "active");
  };

  Share.prototype.event_network = function(instance, network) {
    var name;
    name = network.getAttribute("data-network");
    this.hook("before", name);
    this["network_" + name]();
    return this.hook("after", name);
  };

  Share.prototype.open = function() {
    return this["public"]("open");
  };

  Share.prototype.close = function() {
    return this["public"]("close");
  };

  Share.prototype.toggle = function() {
    return this["public"]("toggle");
  };

  Share.prototype["public"] = function(action) {
    var button, index, instance, _i, _len, _ref, _results;
    _ref = document.querySelectorAll(this.element);
    _results = [];
    for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
      instance = _ref[index];
      button = instance.getElementsByClassName("social")[0];
      _results.push(this["event_" + action](button));
    }
    return _results;
  };

  Share.prototype.network_facebook = function() {
    if (!window.FB) {
      return console.error("The Facebook JS SDK hasn't loaded yet.");
    }
    return FB.ui({
      method: 'feed',
      name: this.config.networks.facebook.title,
      link: this.config.networks.facebook.url,
      picture: this.config.networks.facebook.image,
      caption: this.config.networks.facebook.caption,
      description: this.config.networks.facebook.description
    });
  };

  Share.prototype.network_twitter = function() {
    return this.popup("https://twitter.com/intent/tweet?text=" + this.config.networks.twitter.text + "&url=" + this.config.networks.twitter.url);
  };

  Share.prototype.network_google_plus = function() {
    return this.popup("https://plus.google.com/share?url=" + this.config.networks.google_plus.url);
  };

  Share.prototype.network_hacker_news = function() {
    return this.popup("https://news.ycombinator.com/submitlink?u=" + this.config.networks.hacker_news.url + "&t=" + this.config.networks.hacker_news.title);
  };

  Share.prototype.network_reddit = function() {
    return this.popup("https://www.reddit.com/submit?url=" + this.config.networks.reddit.url);
  };

  Share.prototype.inject_icons = function() {
    return this.inject_stylesheet("https://github.com/carrot/share-button/releases/download/v1.0.3/share-button.min.css");
  };

  Share.prototype.inject_fonts = function() {
    return this.inject_stylesheet("//fonts.googleapis.com/css?family=Lato:900&text=" + this.config.ui.button_text);
  };

  Share.prototype.inject_stylesheet = function(url) {
    var link;
    if (!this.el.head.querySelector("link[href=\"" + url + "\"]")) {
      link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", url);
      return this.el.head.appendChild(link);
    }
  };

  Share.prototype.inject_css = function(instance) {
    var css, meta, selector, style;
    selector = "." + (instance.getAttribute('class').split(" ").join("."));
    if (!this.el.head.querySelector("meta[name='sharer" + selector + "']")) {
      this.config.selector = selector;
      css = getStyles(this.config);
      style = document.createElement("style");
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      this.el.head.appendChild(style);
      delete this.config.selector;
      meta = document.createElement("meta");
      meta.setAttribute("name", "sharer" + selector);
      return this.el.head.appendChild(meta);
    }
  };

  Share.prototype.inject_html = function(instance) {
    return instance.innerHTML = "<label class='entypo-" + this.config.ui.button_icon + "'><span>" + this.config.ui.button_text + "</span></label><div class='social " + this.config.ui.flyout + "'><ul><li class='entypo-twitter' data-network='twitter'></li><li class='entypo-facebook' data-network='facebook'></li><li class='entypo-hn' data-network='hacker_news'></li><li class='entypo-reddit' data-network='reddit'></li><li class='entypo-gplus' data-network='google_plus'></li></ul></div>";
  };

  Share.prototype.inject_facebook_sdk = function() {
    var script;
    if (!window.FB && this.config.networks.facebook.app_id && !this.el.body.querySelector('#fb-root')) {
      script = document.createElement("script");
      script.text = "window.fbAsyncInit=function(){FB.init({appId:'" + this.config.networks.facebook.app_id + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + this.config.protocol + "connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')";
      this.el.body.innerHTML += "<div id='fb-root'></div>";
      return this.el.body.appendChild(script);
    }
  };

  Share.prototype.hook = function(type, network) {
    var fn, opts;
    fn = this.config.networks[network][type];
    if (typeof fn === "function") {
      opts = fn.call(this.config.networks[network]);
      if (opts !== void 0) {
        opts = this.normalize_filter_config_updates(opts);
        this.extend(this.config.networks[network], opts, true);
        this.normalize_network_configuration();
      }
    }
  };

  Share.prototype.set_global_configuration = function() {
    var network, option, options, _ref, _results;
    _ref = this.config.networks;
    _results = [];
    for (network in _ref) {
      options = _ref[network];
      _results.push((function() {
        var _results1;
        _results1 = [];
        for (option in options) {
          if (this.config.networks[network][option] == null) {
            _results1.push(this.config.networks[network][option] = this.config[option]);
          } else {
            _results1.push(void 0);
          }
        }
        return _results1;
      }).call(this));
    }
    return _results;
  };

  Share.prototype.normalize_network_configuration = function() {
    if (!this.is_encoded(this.config.networks.twitter.text)) {
      this.config.networks.twitter.text = encodeURIComponent(this.config.networks.twitter.text);
    }
    if (typeof this.config.networks.facebook.app_id === 'integer') {
      return this.config.networks.facebook.app_id = this.config.networks.facebook.app_id.toString();
    }
  };

  Share.prototype.normalize_filter_config_updates = function(opts) {
    if (this.config.networks.facebook.app_id !== opts.app_id) {
      console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly.");
      delete opts.app_id;
    }
    return opts;
  };

  return Share;

})(ShareUtils);
 return Share;
});
