
describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
        expect(split([3,2,1,5])).toEqual([[3,2],[1,5]])
    });

    it('is able to split an odd length array into two halves', function() {
        expect(split([3,2,1,5,6])).toEqual([[3,2],[1,5,6]])
    });

  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
        expect(merge([3],[1])).toEqual([1,3])
        expect(merge([2,3],[1,4])).toEqual([1,2,3,4])
        expect(merge([2,3],[1,4,9])).toEqual([1,2,3,4,9])
    });
  });

  describe('Merge & Sort function', function(){
    it('is able to merge two unsorted arrays into one sorted array', function(){
      // test the merging algorithm
        expect(mergeSort([3,2,1,5,6])).toEqual([1,2,3,5,6])
    });
  });
