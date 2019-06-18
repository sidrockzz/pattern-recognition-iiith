var GFG = (function () {
    function GFG() {
    }
    GFG.mean = function (arr, n) {
        var sum = 0;
        for (var i = 0; i < n; i++) {
            sum = sum + arr[i];
        }
        return sum / n;
    };
    GFG.covariance = function (arr1, arr2, n) {
        var sum = 0;
        for (var i = 0; i < n; i++) {
            sum = sum + (arr1[i] - GFG.mean(arr1, n)) * (arr2[i] - GFG.mean(arr2, n));
        }
        return sum / (n - 1);
    };
    GFG.main = function (args) {
        var arr1 = [65.21, 64.75, 65.26, 65.76, 65.96];
        var n = arr1.length;
        var arr2 = [67.25, 66.39, 66.12, 65.7, 66.64];
        var m = arr2.length;
        if (m === n)
            console.info(GFG.covariance(arr1, arr2, m));
    };
    return GFG;
}());
GFG["__class"] = "GFG";
GFG.main(null);

