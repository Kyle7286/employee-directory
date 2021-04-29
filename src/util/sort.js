export default {
    sort: function (col, array) {
        switch (col) {
            case "Name":
                console.log(array);
                return array.sort(compare)
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


        return "Hello from other side"
    }
};

function compare(a, b) {
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




