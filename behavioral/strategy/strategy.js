class Strategy {
    doOperation(num1, num2) {
        throw new Error("This method should be overridden!");
    }
}

class OperationAdd extends Strategy {
    doOperation(num1, num2) {
        return num1 + num2;
    }
}

class OperationSubtract extends Strategy {
    doOperation(num1, num2) {
        return num1 - num2;
    }
}

class OperationMultiply extends Strategy {
    doOperation(num1, num2) {
        return num1 * num2;
    }
}

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(num1, num2) {
        return this.strategy.doOperation(num1, num2);
    }
}

// Step 4: Use the Context to see change in behaviour
const context = new Context(new OperationAdd());
console.log("10 + 6 =", context.executeStrategy(10, 6));

context.setStrategy(new OperationSubtract());
console.log("10 - 6 =", context.executeStrategy(10, 6));

context.setStrategy(new OperationMultiply());
console.log("10 * 6 =", context.executeStrategy(10, 6));


// output

// 10 + 6 = 16
// 10 - 6 = 4
// 10 * 6 = 60