function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    let all = [max, min, avg];

    return all;
}
console.log(maxMinAvg([-5, -10, -55]));