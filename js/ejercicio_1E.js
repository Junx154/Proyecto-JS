const sueldoColaboradores = [
    2500, 1300,4800 ,5300, 1230 , 1200, 1300, 1700, 5000, 4200,6899,2300, 1200, 1400, 1320, 1200 , 5120, 9000, 4200, 5230, 1200, 1100, 1900, 1500, 2300, 2500, 1900, 1850, 1350, 1250, 1450,1230, 1330, 1920, 5500, 2060 , 4200 , 3200, 3500, 7500, 2200, 9032, 1320, 6100, 6200, 1945, 7820 , 6382, 9230, 2320
] ;

const porcentajeAguinaldo = 0.20;

for (let i = 0; i < sueldoColaboradores.length; i++){
    let sueldoBase = sueldoColaboradores [i];
    let aguinaldo = sueldoBase * porcentajeAguinaldo;
    let pagoTotal = sueldoBase + aguinaldo;

    console.log("sueldo base:", sueldoBase);
    console.log("aguinaldo" , aguinaldo.toFixed(2));
    console.log("Total a pagar: S/" , pagoTotal.toFixed(2));


}
