function Snow(opt = {}) {
  // Element
  this.el = null;
  // Snow Container Target
  this.target = null;
  // Swing Status
  this.isSwing = false;
  // Step Size
  this.stepSx = .03;
  // Diameter
  this.width = 0;
  // Quick Move Width
  this.quickWidth = opt.quickWidth || 80;
  // Maximum Diameter
  this.maxWidth = opt.maxWidth || 80;
  // Minimum Diameter
  this.minWidth = opt.minWidth || 2;
  // Opacity
  this.opacity = 0;
  // Quick Move Opacity
  this.quickOpacity = opt.quickOpacity || .2;
  // Horizontal Position
  this.x = 0;
  // Horizontal Speed
  this.sx = 0;
  // Vertical Position
  this.y = 0;
  // Vertical Speed
  this.sy = 0;
  // z axis
  this.z = 0;
  // Speed
  this.speed = 0;
  // Maximum Speed
  this.maxSpeed = opt.maxSpeed || 4;
  // Minimum Speed
  this.minSpeed = opt.minSpeed || 1;
  // Quick Move Maximum Speed
  this.quickMaxSpeed = opt.quickMaxSpeed || 10;
  // Quick Move Minimum Speed
  this.quickMinSpeed = opt.quickMinSpeed || 8;


  this.windowW = window.innerWidth;
  this.windowH = window.innerHeight;

  this.init();
}

Snow.prototype = {
  /**
   * Initialize All Attribute
   * @param {boolean} reset - reset Attribute
   */
  init(reset) {
    var isQuick = Math.random() > .8;
    this.isSwing = Math.random() > .8;
    // this.width = Math.floor(Math.random() * this.maxWidth + this.minWidth);
    this.width = isQuick ? this.quickWidth : Math.floor(Math.random() * this.maxWidth + this.minWidth);
    this.z = isQuick ? Math.random() * 300 + 200 : 0;
    // this.opacity = Math.random();
    this.opacity = isQuick ? this.quickOpacity : Math.random();
    this.x = Math.floor(Math.random() * (this.windowW - this.width));
    this.y = Math.floor(Math.random() * (this.windowH - this.width));
    if (reset && Math.random() > .8) {
      this.x = -this.width;
    } else if (reset) {
      this.y = -this.width;
    }
    // this.y = reset ? -this.width : Math.floor(Math.random() * this.windowH);
    this.speed = Math.random() * this.maxSpeed + this.minSpeed;
    // this.sy = Math.random() * this.maxSpeed + this.minSpeed;
    this.sy = isQuick ? Math.random() * this.quickMaxSpeed + this.quickMinSpeed : Math.random() * this.maxSpeed + this.minSpeed;
    this.sx = this.sy * Math.random();
  },
  /**
   * Set Style
   */
  setStyle() {
    this.el.style.cssText = 'position: fixed; ' +
      'left: 0; top: 0; ' +
      'display: block; ' +
      'width: ' + this.width + 'px; ' +
      'height: ' + this.width + 'px; ' +
      'opacity: ' + this.opacity + '; ' +
      'background-image: radial-gradient(#fff 0%, rgba(255, 255, 255, 0) 60%);' +
      'border-radius: 50%;' +
      'z-index: 999999999;' +
      'pointer-events: none;' +
      'transform: translate(' + this.x + 'px, ' + this.y + 'px);' +
      ''
  },
  /**
   * let snow move
   */
  move() {
    if (this.isSwing) {
      if (this.sx >= 1 || this.sx <= -1) {
        this.stepSx = -this.stepSx;
      }
      this.sx += this.stepSx;
    }
    this.x += this.sx;
    this.y += this.sy;
    if (this.x < -this.width || this.x > this.windowW || this.y > this.windowH) {
      this.init(true);
      this.setStyle();
    }
    this.el.style.left = this.x + 'px';
    this.el.style.top = this.y + 'px';
    this.el.style.transform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, ' + this.z + 'px)'
  },
  /**
   * Render
   * @param {string} target - 容器ID
   */
  render(target) {
    this.el = document.createElement('div');
    this.setStyle();
    if (target) {
      this.target = target;
      document.getElementById(target).appendChild(this.el);
    } else {
      document.body.appendChild(this.el);

    }
  },
  /**
   * Destroy
   */
  destory() {
    if (this.el) {
      if (this.target) {
        document.getElementById(this.target).removeChild(this.el);
      } else {
        document.body.removeChild(this.el);
      }
    } else {
      console.warn('目标元素不存在，无法销毁');
    }
  }
}

var snowList = [];

/**
 * Switch Snow On or Off
 * @param {number} count - snow item count
 * @param {string} target - snow container target
 */
function toggleSnow({count = 100, target, targetStyle}) {
  if (snowList.length === 0) {
    for(var i = 0; i < count; i++) {
      var snow = new Snow();
      snow.render(target);
      snowList.push(snow);
    }
    if (targetStyle) {
      document.getElementById(target).style.cssText = 'background-color: rgba(141, 174, 184, .2);' +
        'height: 100%;';
      document.getElementById(target).style.cssText = targetStyle;
    } else {
      document.getElementById(target).style.cssText = 'background-color: rgba(141, 174, 184, .2);' +
        'height: 100%;' +
        'perspective: 500;' +
        '-webkit-perspective: 500';
    }
    snowMove();
  } else {
    snowList.forEach(function (item) {
      item.destory();
    });
    snowList = [];
    document.getElementById(target).style.cssText = '';
    stopSnowMove();
  }
}

/**
 * let snow move
 */
var snowTimer = null;
function snowMove() {
  snowTimer = window.requestAnimationFrame(function () {
    snowList.forEach(function (item) {
      item.move();
    });
    snowMove();
  })
}
function stopSnowMove() {
  window.cancelAnimationFrame(snowTimer);
}
