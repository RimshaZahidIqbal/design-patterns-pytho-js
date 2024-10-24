// Product Interface
class SoftwareProduct {
    showInfo() {
        throw new Error("Method 'showInfo()' must be implemented.");
    }
}

// Concrete Product: Web Application
class WebApplication extends SoftwareProduct {
    constructor() {
        super();
        this.userInterface = "";
        this.database = "";
        this.businessLogic = "";
    }

    showInfo() {
        return `Web Application with UI: ${this.userInterface}, Database: ${this.database}, Business Logic: ${this.businessLogic}`;
    }
}

// Concrete Product: Mobile Application
class MobileApplication extends SoftwareProduct {
    constructor() {
        super();
        this.userInterface = "";
        this.database = "";
        this.businessLogic = "";
    }

    showInfo() {
        return `Mobile Application with UI: ${this.userInterface}, Database: ${this.database}, Business Logic: ${this.businessLogic}`;
    }
}

// Builder Interface
class Builder {
    reset() {
        throw new Error("Method 'reset()' must be implemented.");
    }

    buildUserInterface() {
        throw new Error("Method 'buildUserInterface()' must be implemented.");
    }

    buildDatabase() {
        throw new Error("Method 'buildDatabase()' must be implemented.");
    }

    buildBusinessLogic() {
        throw new Error("Method 'buildBusinessLogic()' must be implemented.");
    }

    getResult() {
        throw new Error("Method 'getResult()' must be implemented.");
    }
}

// Concrete Builder for Web Applications
class WebApplicationBuilder extends Builder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.result = new WebApplication();
    }

    async buildUserInterface(ui) {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.result.userInterface = ui;
    }

    async buildDatabase(db) {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.result.database = db;
    }

    async buildBusinessLogic(businessLogic) {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.result.businessLogic = businessLogic;
    }

    getResult() {
        return this.result;
    }
}

// Concrete Builder for Mobile Applications
class MobileApplicationBuilder extends Builder {
    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.result = new MobileApplication();
    }

    async buildUserInterface(ui) {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.result.userInterface = ui;
    }

    async buildDatabase(db) {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.result.database = db;
    }

    async buildBusinessLogic(businessLogic) {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.result.businessLogic = businessLogic;
    }

    getResult() {
        return this.result;
    }
}

// Director
class Director {
    constructor(builder) {
        this.builder = builder;
    }

    async makeFullApplication(ui, db, businessLogic) {
        this.builder.reset();
        await this.builder.buildUserInterface(ui);
        await this.builder.buildDatabase(db);
        await this.builder.buildBusinessLogic(businessLogic);
        return this.builder.getResult();
    }
}

// Client 
(async () => {
    // Web Application
    const webBuilder = new WebApplicationBuilder();
    const webDirector = new Director(webBuilder);
    const webApplication = await webDirector.makeFullApplication("React, Tailwind", "MongoDB", "Node Rest API");
    console.log(webApplication.showInfo());

    // Mobile Application
    const mobileBuilder = new MobileApplicationBuilder();
    const mobileDirector = new Director(mobileBuilder);
    const mobileApplication = await mobileDirector.makeFullApplication("Mobile UI", "NoSQL Database", "GraphQL API");
    console.log(mobileApplication.showInfo());
})();
