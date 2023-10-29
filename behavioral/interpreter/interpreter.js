// Interface-like abstract class
class Expression {
    async interpret(context) {
        throw new Error("Method 'interpret()' must be implemented.");
    }
}

// TerminalExpression class
class TerminalExpression extends Expression {
    constructor(data) {
        super();
        this.data = data;
    }

    async interpret(context) {
        return context.includes(this.data);
    }
}

// OrExpression class
class OrExpression extends Expression {
    constructor(exp1, exp2) {
        super();
        this.exp1 = exp1;
        this.exp2 = exp2;
    }

    async interpret(context) {
        const result1 = await this.exp1.interpret(context);
        const result2 = await this.exp2.interpret(context);
        return result1 || result2;
    }
}

// AndExpression class
class AndExpression extends Expression {
    constructor(exp1, exp2) {
        super();
        this.exp1 = exp1;
        this.exp2 = exp2;
    }

    async interpret(context) {
        const result1 = await this.exp1.interpret(context);
        const result2 = await this.exp2.interpret(context);
        return result1 && result2;
    }
}

// InterpreterPatternDemo class
class InterpreterPatternDemo {
    static async getMaleExpression() {
        // Rule: "John" or "Robert" is male
        const john = new TerminalExpression("John");
        const robert = new TerminalExpression("Robert");
        return new OrExpression(john, robert);
    }

    static async getMarriedWomanExpression() {
        // Rule: "Julie" and "Married"
        const julie = new TerminalExpression("Julie");
        const married = new TerminalExpression("Married");
        return new AndExpression(julie, married);
    }
}

// Verification
(async () => {
    const isMale = await InterpreterPatternDemo.getMaleExpression();
    const isMarriedWoman = await InterpreterPatternDemo.getMarriedWomanExpression();

    console.log("John is male? " + await isMale.interpret("John"));
    console.log("Shoon is male? " + await isMale.interpret("Shoon"));
    console.log("Julie is a married woman? " + await isMarriedWoman.interpret("Married Julie"));
})();
/*  Output 
John is male? true
Shoon is male? false
Julie is a married woman? true */