let inputA = document.querySelectorAll('input')[0],
    inputB = document.querySelectorAll('input')[1],
    inputC = document.querySelectorAll('input')[2],
    valueA = document.querySelectorAll('.equation__element')[0],
    valueB = document.querySelectorAll('.equation__element')[3],
    valueC = document.querySelectorAll('.equation__element')[6],
    calculation = document.querySelector('button'),
    decisionValue = document.querySelector('.decision__value'),
    decisionX1 = document.querySelectorAll('.decision__number')[0],
    decisionX2 = document.querySelectorAll('.decision__number')[1],
    equationElementB = document.querySelectorAll('.equation__element')[2],
    equationElementC = document.querySelectorAll('.equation__element')[5],
    inputIndicatorA = document.querySelectorAll('.input__indicator')[0],
    inputIndicatorB = document.querySelectorAll('.input__indicator')[1],
    inputIndicatorC = document.querySelectorAll('.input__indicator')[2];

let equationData = {
    parameters:{},
    operators: [],
    // quantity
    equationDecision: ['', '']
};
    

inputA.addEventListener('input', function() {
    let a = +inputA.value,
        parameterA = 'a';
    if(isNaN(a) === true || inputA.value == '') {
        equationData.parameters[parameterA] = "a";
        valueA.textContent = equationData.parameters[parameterA];
        inputIndicatorA.style.background = '#fd2323';
    } else {
        equationData.parameters[parameterA] = a;
        valueA.textContent = equationData.parameters[parameterA];
        inputIndicatorA.style.background = '#59da17';
    }
}); 

inputB.addEventListener('input', function() {
    let b = +inputB.value,
        parameterB = 'b';
        
    if(isNaN(b) === true || inputB.value == '') {
        equationData.parameters[parameterB] = "b";
        valueB.textContent = equationData.parameters[parameterB];
        equationElementB.textContent = '+';
        inputIndicatorB.style.background = '#fd2323';
    } else if(b < 0) {
        equationData.parameters[parameterB] = b;
        valueB.textContent = equationData.parameters[parameterB];
        equationElementB.textContent = '';
        inputIndicatorB.style.background = '#59da17';
    } else {
        equationData.parameters[parameterB] = b;
        valueB.textContent = equationData.parameters[parameterB];
        equationElementB.textContent = '+';
        inputIndicatorB.style.background = '#59da17';

    }
});

inputC.addEventListener('input', function() {
    let c = +inputC.value,
        parameterC = 'c';
    if(isNaN(c) === true || inputC.value == '') {
        equationData.parameters[parameterC] = "c";
        valueC.textContent = equationData.parameters[parameterC];
        equationElementC.textContent = '+';
        inputIndicatorC.style.background = '#fd2323';
    } else if(c < 0) {
        equationData.parameters[parameterC] = c;
        valueC.textContent = equationData.parameters[parameterC];
        equationElementC.textContent = '';
        inputIndicatorC.style.background = '#59da17';
    } else {
        equationData.parameters[parameterC] = c;
        valueC.textContent = equationData.parameters[parameterC];
        equationElementC.textContent = '+';
        inputIndicatorC.style.background = '#59da17';
    }
});

calculation.addEventListener('click', function() {
    let a = equationData.parameters.a,
        b = equationData.parameters.b,
        c = equationData.parameters.c,
        sum = +(a + b + c),
        Discriminant = Math.pow(b, 2) - 4 * a * c;
    if(isNaN(sum) === true) {
        decisionValue.textContent = 'Некоректно задані параметри';
        equationData.equationDecision[0] = '';
        equationData.equationDecision[1] = '';
    } else if (Discriminant < 0) {
        decisionValue.textContent = 'Дискримінант < 0, змінна х не має раціональних значень, які задовільняють рівняння';
        equationData.equationDecision[0] = '';
        equationData.equationDecision[1] = '';
    } else if(a == 0 && b != 0) {
        let x1 = -c/b;
        equationData.equationDecision[0] = x1;
        decisionValue.textContent = 'При а = 0, змінна х має 1 значення, яке задовільняє рівняння';
        equationData.equationDecision[1] = '';
    } else if(a == 0 && b == 0) {
        let x1 = -c/b;
        equationData.equationDecision[0] = '';
        decisionValue.textContent = 'Параметри a та b одночасно не можуть бути рівні нулю';
        equationData.equationDecision[1] = '';

    } else {
        let x1 = (-b + Math.pow(Discriminant, 0.5))/(2 * a),
            x2 = (-b - Math.pow(Discriminant, 0.5))/(2 * a);
        if(x1 == x2) {
            equationData.equationDecision[0] = x1;
            decisionValue.textContent = 'Дискримінант = 0, змінна х має 1 значення, яке задовільняє рівняння';
            equationData.equationDecision[1] = '';
        } else {
            equationData.equationDecision[0] = x1;
            equationData.equationDecision[1] = x2;
            decisionValue.textContent = 'Дискримінант > 0, змінна х має 2 значення, які задовільнють рівняння';
        }
    }
    decisionX1.textContent = equationData.equationDecision[0];
    decisionX2.textContent = equationData.equationDecision[1];
});
