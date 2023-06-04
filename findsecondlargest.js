
function getSecondLargest(nums) {
    nums = nums.sort().reverse();
    let n = nums.length;
    for(let i = 0;i<n;i++){
        if((nums[0]>nums[i])){
            return(nums[i]);
            break;
        }else{
            nums[0]=nums[i];
        }
    }
}
