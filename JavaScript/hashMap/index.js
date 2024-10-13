class SimpleHashMap {
    constructor() {
        this.map = {};  // Using a JavaScript object as the underlying data structure
    }

    // Put (Insert or Update a key-value pair)
    put(key, value) {
        this.map[key] = value;  // Add or update the key-value pair
    }

    // Get (Retrieve the value associated with a key)
    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;  // Check if the key exists
    }

    // Remove (Delete a key-value pair)
    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];  // Remove the key-value pair
            return true;
        }
        return false;
    }

    // Check if the map contains a specific key
    hasKey(key) {
        return this.map.hasOwnProperty(key);  // Check if the key exists
    }

    // Print the hash map (for debugging)
    printMap() {
        console.log(this.map);
    }

    // Get the size of the map (number of key-value pairs)
    size() {
        return Object.keys(this.map).length;  // Use Object.keys to count the properties
    }
}

let simpleHashMap = new SimpleHashMap();

// Insert key-value pairs
simpleHashMap.put("name", "John");
simpleHashMap.put("age", 25);
simpleHashMap.put("job", "Developer");

// Get values
console.log(simpleHashMap.get("name"));  // Output: John
console.log(simpleHashMap.get("age"));   // Output: 25

// Update an existing key
simpleHashMap.put("age", 26);
console.log(simpleHashMap.get("age"));   // Output: 26

// Remove a key
simpleHashMap.remove("job");
console.log(simpleHashMap.get("job"));   // Output: undefined

// Check if a key exists
console.log(simpleHashMap.hasKey("name"));  // Output: true
console.log(simpleHashMap.hasKey("job"));   // Output: false

// Print the hash map
simpleHashMap.printMap();  // Output: { name: 'John', age: 26 }

// Get the size of the map
console.log("Size:", simpleHashMap.size());  // Output: 2