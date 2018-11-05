
beforeAll(function () {
    spyOn(swap).and.callThrough();
  });
  it('is called exactly three times', function () {
    bubbleSort([3,2,1]);
    expect(swap.calls.count()).toEqual(3);
  });

describe('Swap function', function(){
    it('swaps two elements', function(){
        expect( swap([6,2]) ).toEqual( [2,6] );
    });
});

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    
    it('handles a single element', function(){
        expect( bubbleSort([5]) ).toEqual( [5] );
    });
    it('handles an array with multiple elements', function(){
        expect( bubbleSort([7,3,5,8,1]) ).toEqual( [1,3,5,7,8] );
    });
});

// describe('Bubble Sort', function(){
//     it('throws and error if the input isn\'t an array', function(){
//         expect( bubbleSort("string") ).toEqual();
//     });
// });

