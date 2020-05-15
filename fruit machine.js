function Slot(el, max, step) {
    this.speed = 0;
    this.step = step;
    this.si = null;
    this.el = el;
    this.maxSpeed = max;
}

var a = new Slot('#slot1', 40, 1),
    b = new Slot('#slot2', 60, 2),
    c = new Slot('#slot3', 80, 3);

    Slot.prototype.start = function() {
        var _this = this;
        $(_this.el).addClass('motion');
        $(_this.el).spStart();
        _this.si = window.setInterval(function() {
            if(_this.speed < _this.maxSpeed) {
                _this.speed += _this.step;
                $(_this.el).spSpeed(_this.speed);
            }
        }, 100);
    };

    Slot.prototype.stop = function() {
        var _this = this,
            limit = 30;
        clearInterval(_this.si);
        _this.si = window.setInterval(function() {
            if(_this.speed > limit) {
                _this.speed -= _this.step;
                $(_this.el).spSpeed(_this.speed);
            }
            if(_this.speed <= limit) {
                _this.finalPos(_this.el);
                $(_this.el).spSpeed(0);
                $(_this.el).spStop();
                clearInterval(_this.si);
                $(_this.el).removeClass('motion');
                _this.speed = 0;
            }
        }, 100);
    };

    Slot.prototype.finalPos = function() {
        var el = this.el,
            pos,
            posMin = 2000000000,
            best,
            bgPos,
            i,
            j,
            k;

        best += imgHeight + 4;
        bgPos = "0 " + best + "px";
        $(el).animate({
            backgroundPosition:"(" + bgPos + ")"
        }, {
            duration: 200
        });
    };