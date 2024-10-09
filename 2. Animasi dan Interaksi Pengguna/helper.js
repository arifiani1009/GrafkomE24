//translasi
function translasi(gl, program, dx){
    var dy=0.0, dz=0.0;
    var xFormMatrix = new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        dx, dy, dz, 1.0
    ]);

    var uFormMatrix = gl.getUniformLocation(program, "uFormMatrix");
    gl.uniformMatrix4fv(uFormMatrix, false, xFormMatrix);
}

//skalasi
function skalasi(gl, program, sx, sy, sz){
    //var sx = -0.3, sy = -0.8, sz = 0.0;
    var xFormMatrix = new Float32Array([
        sx, 0.0, 0.0, 0.0,
        0.0, sy, 0.0, 0.0,
        0.0, 0.0, sz, 0.0,
        0.0, 0.0, 0.0, 1
    ]);

    var uFormMatrix = gl.getUniformLocation(program, "uFormMatrix");
    gl.uniformMatrix4fv(uFormMatrix, false, xFormMatrix);
}

//shear
function shear(gl, program){
    var angle = 45;
    var cota = 1/Math.tan(angle);
    var xFormMatrix = new Float32Array([
        1.0, cota, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    var uFormMatrix = gl.getUniformLocation(program, "uFormMatrix");
    gl.uniformMatrix4fv(uFormMatrix, false, xFormMatrix);
}

//rotasi X
function rotasiX(gl, program){
    var angle = 15;
    var cosa = Math.cos(angle);
    var sina = Math.sin(angle);
    var xFormMatrix = new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, cosa, -sina, 0.0,
        0.0, sina, cosa, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    var uFormMatrix = gl.getUniformLocation(program, "uFormMatrix");
    gl.uniformMatrix4fv(uFormMatrix, false, xFormMatrix);
}

//rotasi Y
function rotasiY(gl, program){
    var angle = 45;
    var cosa = Math.cos(angle);
    var sina = Math.sin(angle);
    var xFormMatrix = new Float32Array([
        cosa, 0.0, sina, 0.0,
        0.0, 1.0, 0.0, 0.0,
        -sina, 0.0, cosa, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    var uFormMatrix = gl.getUniformLocation(program, "uFormMatrix");
    gl.uniformMatrix4fv(uFormMatrix, false, xFormMatrix);
}

//rotasi Z
function rotasiZ(gl, program, angle){
    //var angle = 180;
    var cosa = Math.cos(angle);
    var sina = Math.sin(angle);
    var xFormMatrix = new Float32Array([
        cosa, -sina, 0.0, 0.0,
        sina, cosa, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    var uFormMatrix = gl.getUniformLocation(program, "uFormMatrix");
    gl.uniformMatrix4fv(uFormMatrix, false, xFormMatrix);
}