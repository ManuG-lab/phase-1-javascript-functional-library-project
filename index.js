function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}


function myMap(collection, callback) {
    let newArr = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArr.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                newArr.push(callback(collection[key], key, collection));
            }
        }
    }
    return newArr;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);

    if (acc === undefined) {
        acc = values[0];
        values = values.slice(1);
    }

    for (let i = 0; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }

    return acc;
}


function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);

    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}


function myFilter(collection, predicate) {
    let result = [];
    let values = Array.isArray(collection) ? collection : Object.values(collection);

    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }

    return result;
}


function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}


function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}


function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}


function myKeys(object) {
    return Object.keys(object);
}


function myValues(object) {
    return Object.values(object);
}
