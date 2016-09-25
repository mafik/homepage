var canvas = document.getElementById('fg');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var ctx = canvas.getContext('2d');

var points = [];
var w = canvas.width, h = canvas.height;

var base_s = -1;
var s = function(i, j) {
    if(i === j) return base_s;
    var d = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y) / 100;
    return -d*d;
};

var arrow = function(i, j) {
    if (i === j) return;
    var fromx = points[i].x, fromy = points[i].y;
    var tox = points[j].x, toy = points[j].y;
    var headlen = 5;   // length of head in pixels
    var angle = Math.atan2(toy-fromy,tox-fromx);
    fromx += Math.cos(angle) * 5;
    fromy += Math.sin(angle) * 5;
    tox -= Math.cos(angle) * 5;
    toy -= Math.sin(angle) * 5;
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
    ctx.stroke();
}

var draw = function() {
    ctx.clearRect(0, 0, w, h);


    var n = points.length;
    var damping = 0.6;
    var damp = function(a, b) {
        return a * damping + b * (1 - damping);
    }
    var r = [];
    var a = [];
    var i, k, k2, i2;
    for(i = 0; i < n; ++i) {
        r.push(new Array(n));
        a.push(new Array(n));
        for(k = 0; k < n; ++k) {
            a[i][k] = r[i][k] = 0;
        }
    }
    if(n > 1) {
        /* // small number of groups
        base_s = s(0, 1);
        for(i = 0; i < n; ++i) {
            for(k = i + 1; k < n; ++k) {
                base_s = Math.min(base_s, s(i,k));
            }
        }
        /*/ // large number of groups
        base_s = 0;
        for(i = 0; i < n; ++i) {
            for(k = i + 1; k < n; ++k) {
                base_s += s(i,k);
            }
        }
        base_s /= n*(n-1)/2;
        //*/
    } else {
        base_s = -1;
    }
    for(var c = 0; c < 15; ++c) {
        // update 1
        for(i = 0; i < n; ++i) {
            for(k = 0; k < n; ++k) {
                var max_similarity = -100000;
                for(k2 = 0; k2 < n; ++k2) {
                    if(k === k2) continue;
                    var similarity = a[i][k2] + s(i, k2);
                    max_similarity = Math.max(max_similarity, similarity);
                }
                r[i][k] = damp(r[i][k], s(i, k) - max_similarity);
            }
        }
        // update 2
        for(i = 0; i < n; ++i) {
            for(k = 0; k < n; ++k) {
                var avail = 0;
                for(i2 = 0; i2 < n; ++i2) {
                    if(k === i2) continue;
                    if(i === i2) continue;
                    avail += Math.max(0, r[i2][k]);
                }
                a[i][k] = damp(a[i][k], i === k ? avail : Math.min(0, r[k][k] + avail));
            }
        }
    }

    for(i = 0; i < n; ++i) {
        var best_val = -10000;
        var best_k = -1;
        for(k = 0; k < n; ++k) {
            var val = a[i][k] + r[i][k];
            if(val > best_val) {
                best_val = val;
                best_k = k;
            }
        }
        arrow(i, best_k);
    }

    for(var i = 0; i < points.length; ++i) {
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

canvas.addEventListener('click', function(e) {
    points.push({x: e.offsetX, y: e.offsetY});
    draw();
});

var redraw = function() {
    points = [];
    for(var i = 0; i < 40; ++i) {
        points.push({x : Math.random() * (w - 10) + 5, y : Math.random() * (h - 10) + 5});
    }
    draw();
};
redraw();

setInterval(redraw, 1000);