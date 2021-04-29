export default {
    sortTable: function (col, array, sortID) {
        
        console.log(sortID);
        switch (col) {
            case "Name":
                return array.sort(sortAscending)
                break;
            case "Email":
                console.log("Email was clicked");
                break;
            case "Phone":
                console.log("Phone was clicked");
                break;
            case "DOB":
                console.log("DOB was clicked");
                break;
            default:
                break;
        }
    }
};

function sortAscending(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.name.first.toUpperCase();
    const bandB = b.name.first.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}

function sortDescending(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.name.first.toUpperCase();
    const bandB = b.name.first.toUpperCase();

    let comparison = 0;
    if (bandB > bandA) {
        comparison = 1;
    } else if (bandB < bandA) {
        comparison = -1;
    }
    return comparison;
}




