//var a = {
//    'img, .firstClass': {
//        color: 'red',
//        'background-Color': 'green'
//    },
//    'input[type=text].secondClass': {
//        width: '100px',
//        height: '50px',
//        boder: '1px solid green'
//    },
//    input: {
//        display: 'none',
//        'z-index': 0
//    }
//};
//
//var css = function css(cssObject) {
//    var css = '';
//    var usedElements = document.querySelectorAll('*');
//    var usedElementsNames = [];
//    for (var i = 0; i < usedElements.length; i++) {
//        usedElementsNames.push(usedElements[i].tagName);
//    }
//    console.log(usedElementsNames);
//    for (var ring in cssObject) {
//        var chain = cssObject[ring];
//        var matchTagNames = false;
//        usedElementsNames.indexOf(ring) != -1
//        for (var i = 0; i < usedElementsNames.length; i++) {
//            console.log(usedElementsNames[i]);
//            if(ring.indexOf([i]) != -1){
//                matchTagNames = true
//            }
//        }
//        if (!matchTagNames) {
//            css = css + ' .' + ring + ' { ';
//        } else {
//            css = css + ring + ' { ';
//        }
//        for (var key in chain) {
//            css = css + key + ':' + chain[key] + '; ';
//        }
//        css = css + '}';
//    }
//    return css;
//};
//
//var mycss = {
//    '.container': {
//        height: '115px',
//        position: 'absolute',
//        width: '375px',
//        '-webkit-user-select': 'none',
//        '-moz-user-select': 'none',
//        '-ms-user-select': 'none',
//        'user-select': 'none',
//        'z-index': '10000'
//    },
//    '.containTheColor': {
//        position: 'relative',
//        border: '7px solid white',
//        'border-radius': '3px',
//        'box-shadow': '1px 1px 10px #666',
//        width: '361px',
//        height: '101px'
//    },
//    'img, .overlay': {
//        position: 'absolute',
//        width: '361px',
//        height: '101px'
//    },
//    '.overlay': {
//        'background-color': 'black',
//        cursor: 'crosshair',
//        opacity: '.5'
//    },
//    'input[type="range"].slide': {
//        width: '115px',
//        transform: 'translate(340px, -70px) rotate(-90deg)'
//    },
//    '.crosshair': {
//        background: 'transparent center center url("http://i.imgur.com/Y8FIYIk.gif") no-repeat scroll',
//        display: 'block',
//        width: '15px',
//        height: '15px',
//        'pointer-events': 'none',
//        position: 'absolute'
//    }
//
//};
//
//var cssOverride = function (overrideObjects) {
//    for (var key in overrideObjects) {
//        if(typeof mycss[key] == 'undefined'){
//            mycss[key] = {};
//        }
//        for (var ring in overrideObjects[key]) {
//            mycss[key][ring] = overrideObjects[key][ring];
//        }
//    }
//};
//
//console.log(JSON.stringify(mycss));
//cssOverride({
//    '.overlay': {
//        'background-color': 'red'
//    },
//    '.neuesDing': {
//        radius: '10px',
//        width: '200px',
//        height: '900em'
//    }
//});
//console.log(JSON.stringify(mycss));

var findColor = function () {
    var canvas = document.createElement('canvas');
    var body = document.body || document.getElementsByTagName('body')[0];
    canvas.style.width = '100%';
    canvas.style.height = '100%';
//    canvas.style.position = 'fixed';
//    canvas.style.top = '0';
//    canvas.style.left = '0';
    body.insertBefore(canvas, document.body.querySelector('*'));
    canvas.addEventListener('mousemove', function (e) {
        var pos = findPos(this);
        var x = e.pageX - pos.x;
        var y = e.pageY - pos.y
        var c = this.getContext('2d');
        var p = c.getImageData(x, y, 1, 1).data;
        console.log(p[0], p[1], p[2]);
    });
};
var findPos = function (obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj == obj.offsetParent);
        return {
            x: curleft,
            y: curtop
        };
    }
    return undefined;
};