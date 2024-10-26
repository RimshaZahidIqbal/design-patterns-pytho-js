import xml2js  from "xml2js";

// (Adaptee) class
class XMLService {
    getXMLData() {
        return `
      <person>
        <name>John Doe</name>
        <age>30</age>
        <city>New York</city>
      </person>
    `;
    }
}

// (Target) class 
class JSONClient {
    constructor(data) {
        this.data = data;
    }

    displayData() {
        console.log("JSON Data:", JSON.stringify(this.data, null, 2));
    }
}

// Adapter 
class XMLToJSONAdapter {
    constructor(xmlService) {
        this.xmlService = xmlService;
    }

    async getJSONData() {
        const xmlData = this.xmlService.getXMLData();
        const jsonData = await xml2js.parseStringPromise(xmlData, { explicitArray: false });

        return {
            name: jsonData.person.name,
            age: parseInt(jsonData.person.age, 10),
            city: jsonData.person.city
        };
    }
}

// Client code
(async () => {
    const xmlService = new XMLService();
    const adapter = new XMLToJSONAdapter(xmlService);
    const jsonClient = new JSONClient(await adapter.getJSONData());

    jsonClient.displayData();
})();
