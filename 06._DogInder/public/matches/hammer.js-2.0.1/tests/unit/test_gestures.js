// TODO: this tests fails because tapRecognizer changes
// it could be that tapRecognizer setup its BEGAN state and
// disable the other gesture recognition
var el, hammer, events;
var allGestureEvents = [
    'tap doubletap press pressup',
    'pinch pinchin pinchout pinchstart pinchmove pinchend pinchcancel',
    'rotate rotatestart rotatemove rotateend rotatecancel',
    'pan panstart panmove panup pandown panleft panright panend pancancel',
    'swipe swipeleft swiperight swipeup swipedown'
].join(' ');

module('Gesture recognition', {
    setup: function() {
        el = utils.createHitArea();
        hammer = new Hammer(el);
        hammer.get('pinch')
            .set({ // some threshold, since the simulator doesnt stays at scale:1 when rotating
                enable: true,
                threshold: .1
            });

        hammer.get('rotate')
            .set({ enable: true });

        hammer.on(allGestureEvents, function(ev) {
            events[ev.type] = true;
        });
        events = {};
    },
    teardown: function() {
        hammer && hammer.destroy();
        events = null;
    }
});

asyncTest('recognize pan', function() {
    expect(1);

    Simulator.gestures.pan(el, { deltaX: 50, deltaY: 0 }, function() {
        start();
        deepEqual(events, {
            pan: true,
            panstart: true,
            panmove: true,
            panright: true,
            panend: true
        });
    });
});

asyncTest('recognize press', function() {
    expect(1);

    Simulator.gestures.press(el, null, function() {
        start();
        deepEqual(events, {
            press: true,
            pressup: true
        });
    });
});

asyncTest('recognize swipe', function() {
    expect(1);

    Simulator.gestures.swipe(el, { duration: 300, deltaX: 400, deltaY: 0 }, function() {
        start();
        deepEqual(events, {
            pan: true,
            panstart: true,
            panmove: true,
            panright: true,
            panend: true,
            swipe: true,
            swiperight: true
        });
    });
});

asyncTest('recognize pinch', function() {
    expect(1);

    Simulator.gestures.pinch(el, { duration: 500, scale: .5 }, function() {
        start();
        deepEqual(events, {
            pinch: true,
            pinchstart: true,
            pinchmove: true,
            pinchend: true,
            pinchin: true
        });
    });
});

asyncTest('recognize rotate', function() {
    expect(1);

    Simulator.gestures.rotate(el, { duration: 500, scale: 1 }, function() {
        start();
        deepEqual(events, {
            rotate: true,
            rotatestart: true,
            rotatemove: true,
            rotateend: true
        });
    });
});

asyncTest('recognize rotate and pinch simultaneous', function() {
    expect(1);

    Simulator.gestures.pinchRotate(el, { duration: 500, scale: 2 }, function() {
        start();
        deepEqual(events, {
            rotate: true,
            rotatestart: true,
            rotatemove: true,
            rotateend: true,
            pinch: true,
            pinchstart: true,
            pinchmove: true,
            pinchend: true,
            pinchout: true
        });
    });
});

asyncTest('don\'t recognize pan and swipe when moving down, when only horizontal is allowed', function() {
    expect(1);

    Simulator.gestures.swipe(el, { duration: 500, deltaX: 0, deltaZ: 200 }, function() {
        start();
        deepEqual(events, { });
    });
});

asyncTest('don\'t recognize press when a -invalid- tap has been done', function() {
    expect(1);

    Simulator.gestures.press(el, { duration: 500 });
    setTimeout(function() {
        Simulator.gestures.tap(el, { duration: 500 });
    }, 200);

    setTimeout(function() {
        start();
        deepEqual(events, { }, 'no gesture has been recognized. invalid tap and invalid press.');
    }, 700);
});
