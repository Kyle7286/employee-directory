const Sort = {
    sortTable: function (col, array, sortID) {
        switch (col) {
            case "Name":
                return array.sort(sortArray(sortID, col.toLowerCase(), "first"))
            case 'DOB':
                return array.sort(sortArray(sortID, col.toLowerCase(), "date"))
            default:
                return array.sort(sortArray(sortID, col.toLowerCase()))
        }
    }
};

// Sort the array by property(ies) given
const sortArray = (sortID, propName, propName2) =>
    (a, b) => {
        // If 1 argument was given
        if (!propName2) {
            if (sortID === "0" || sortID === "-1") {
                return a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
            } else {
                return b[propName] === a[propName] ? 0 : b[propName] < a[propName] ? -1 : 1
            }
        // If 2 arguments were given
        } else {
            if (sortID === "0" || sortID === "-1") {
                return a[propName][propName2] === b[propName][propName2] ? 0 : a[propName][propName2] < b[propName][propName2] ? -1 : 1
            } else {
                return b[propName][propName2] === a[propName][propName2] ? 0 : b[propName][propName2] < a[propName][propName2] ? -1 : 1

            }
        }
    }

export default Sort;