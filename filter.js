function filter(arr, callback)
{
    let ans=[];
    for ( let index=0;index<arr.length;index++)
    {
        if(callback(arr[index]))
            ans.push(arr[index]);
    }
    return ans;
}

export default filter;