
describe('Find the Max 4 numbers in the Array',function(){

  //edge cases

  it('handles empty array and returns empty array', function(){
    expect(findMaxNos([],4)).toEqual([]);
  });

  it('handles when max number given in 0', function(){
    expect(findMaxNos([2,4,6],0)).toEqual([]);
  });

  it('handles invalid inputs,',function(){
    expect(findMaxNos([2,6,4],4)).toEqual(`Invalid Input`);
    expect(findMaxNos([2,0,5,4],-2)).toEqual(`Invalid Input`);
  })

  // Test Cases

  it('returns max N numbers where N is the given second argument of the function', function(){
    expect(findMaxNos([2,9,6,4,3],2)).toEqual([9,6]);

    expect(findMaxNos([98,45,67,23,43,100,5,2],4)).toEqual([100,98,67,45]);

  })

  it('handles negative numbers',function(){
    expect(findMaxNos([-2,-9,-6,-4,-3],2)).toEqual([-2,-3]);

    expect(findMaxNos([-98,-45,-67,-23,-43,-100,-5,-2],4)).toEqual([-2,-5,-23,-43]);
  })

  it('handles both positive and negative numbers',function(){
    expect(findMaxNos([-2,-9,-6,4,-3],2)).toEqual([4,-2]);

    expect(findMaxNos([98,-45,-67,-23,-43,-100,-5,2],4)).toEqual([98,2,-5,-23]);
  })

  it('handles duplicate array elements',function(){
    expect(findMaxNos([2,9,6,4,3,9],2)).toEqual([9,9]);
    expect(findMaxNos([-2,-9,-6,-4,-3,-2],2)).toEqual([-2,-2]);
  })
})
