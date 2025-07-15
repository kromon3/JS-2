function alternateSort(arr) {
    var odd = [];
    var even = [];
    var i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }

    if (Math.abs(odd.length - even.length) > 1) {
        return []; 
    }

    var result = [];
    var oddTurn = true;
    var oddIndex = 0;
    var evenIndex = 0;

    while (oddIndex < odd.length || evenIndex < even.length) {
        if (oddTurn && oddIndex < odd.length) {
            result.push(odd[oddIndex]);
            oddIndex++;
        } else if (!oddTurn && evenIndex < even.length) {
            result.push(even[evenIndex]);
            evenIndex++;
        }
        oddTurn = !oddTurn;
    }

    return result;
}
