function reduce(arr, callback)
{
    let ans = 0;
    for(let index =0;index<arr.length;index++)
    {
        ans = callback(ans, arr[index]);
    }
    return ans;
}

export default reduce;