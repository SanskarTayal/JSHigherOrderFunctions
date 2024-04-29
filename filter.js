function filter(arr, callback)
{
    let ans=[];
    for ( let index=0;index<arr.length;i++)
    {
        if(callback(arr[index]))
            ans.push(arr[index]);
    }
    return ans;
}