// Iterator interface
class Iterator {
    hasNext() {
        throw new Error("Method 'hasNext()' must be implemented.");
    }

    next() {
        throw new Error("Method 'next()' must be implemented.");
    }
}

// Container interface
class Container {
    getIterator() {
        throw new Error("Method 'getIterator()' must be implemented.");
    }
}

class NameRepository extends Container {
    constructor() {
        super();
        this.names = ["Rimsha", "Laiba", "Maria", "Ali"]
    }

    getIterator() {
        return new NameIterator(this);
    }
}

class NameIterator extends Iterator {
    constructor(nameRepository) {
        super();
        this.nameRepository = nameRepository;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.nameRepository.names.length;
    }

    next() {
        if (this.hasNext()) {
            return this.nameRepository.names[this.index++];
        }
        return null;
    }
}

class IteratorPatternDemo {
    static showNames() {
        const nameRepository = new NameRepository();
        const iterator = nameRepository.getIterator();

        while (iterator.hasNext()) {
            console.log(iterator.next());
        }
    }
}

IteratorPatternDemo.showNames();

/* output

Rimsha
Laiba
Maria
Ali

*/