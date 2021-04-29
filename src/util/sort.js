export default {
    sortTable: function (col, array, sortID) {
        switch (col) {
            case "Name":
                return array.sort(sortAscending(sortID, col.toLowerCase(), "first"))
                break;
            default:
                return array.sort(sortAscending(sortID, col.toLowerCase()))
                break;
        }
    }
};

// Take in the prop(s) name(s) and sort asc/desc based on the sortID from the element's datavalue
const sortAscending = (sortID, propName, propName2) =>
    (a, b) => {
        if (!propName2) {
            if (sortID === "0" || sortID === "-1") {
                return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
            } else {
                return b[propName] == a[propName] ? 0 : b[propName] < a[propName] ? -1 : 1
            }
        } else {
            if (sortID === "0" || sortID === "-1") {
                return a[propName][propName2] == b[propName][propName2] ? 0 : a[propName][propName2] < b[propName][propName2] ? -1 : 1
            } else {
                return b[propName][propName2] == a[propName][propName2] ? 0 : b[propName][propName2] < a[propName][propName2] ? -1 : 1

            }
        }
    }




