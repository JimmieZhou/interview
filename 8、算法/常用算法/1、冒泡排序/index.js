/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-10 10:56:56
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-10 11:05:32
 */
function bubbleSort(arr) {
    var len = arr.length
    for(var i=0;i<len;i++){
        for(var j=0;j<len -1 -i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}