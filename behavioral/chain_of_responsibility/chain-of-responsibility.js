// Abstract Handler
class NotificationHandler {
    constructor(nextHandler = null) {
        this.nextHandler = nextHandler;
    }

    notify(failPercentage) {
        throw new Error("This method must be overridden!");
    }
}

// Concrete Handlers
class SectionHead extends NotificationHandler {
    notify(failPercentage) {
        if (failPercentage <= 10) {
            console.log("Notifying: Section Head");
        } else if (this.nextHandler) {
            this.nextHandler.notify(failPercentage);
        }
    }
}

class VP extends NotificationHandler {
    notify(failPercentage) {
        if (failPercentage > 10 && failPercentage <= 30) {
            console.log("Notifying: VP");
        } else if (this.nextHandler) {
            this.nextHandler.notify(failPercentage);
        }
    }
}

class Principal extends NotificationHandler {
    notify(failPercentage) {
        if (failPercentage > 30) {
            console.log("Notifying: Principal");
        } else {
            console.log("Principal: No action needed.");
        }
    }
}

// Client Code
const main = () => {
    const principal = new Principal();
    const vp = new VP(principal);
    const sectionHead = new SectionHead(vp);

    // Results for each section: 10A, 10B, 10C, 9A, 9B, 9C
    const results = {
        "10A": 0,
        "10B": 12,
        "10C": 8,
        "9A": 0,
        "9B": 9,
        "9C": 20,
    };

    const totalStudents = 30; // Assuming 30 students per section

    for (const section in results) {
        const fails = results[section];
        const failPercentage = (fails / totalStudents) * 100;
        console.log(`\nSection ${section} \nFail Percentage: ${failPercentage.toFixed(2)}%`);

        // Notify for each section
        sectionHead.notify(failPercentage);
    }
};

// Run client
main();


/*  Output

Section 10A 
Fail Percentage: 0.00%
Notifying: Section Head

Section 10B 
Fail Percentage: 40.00%
Notifying: Principal

Section 10C 
Fail Percentage: 26.67%
Notifying: VP

Section 9A 
Fail Percentage: 0.00%
Notifying: Section Head

Section 9B 
Fail Percentage: 30.00%
Notifying: VP

Section 9C 
Fail Percentage: 66.67%
Notifying: Principal
*/