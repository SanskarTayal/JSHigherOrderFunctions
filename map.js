function map(arr, callback)
{
    let ans = [];
    for(let i=0;i<arr.length;i++)
    {
        ans.push(callback(arr[i]));
    }
    return ans;
}