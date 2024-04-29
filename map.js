function map(arr, callback)
{
    let ans = [];
    for(let index=0;index<arr.length;index++)
    {
        ans.push(callback(arr[index]));
    }
    return ans;
}

export default map;