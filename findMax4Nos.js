
/* Return the N number of Maximum numbers from the array given in the input as Numbers and array as Arr.

Used Max Heap data structure to process the input array in O(N).

Insertion takes log(N) and removal takes log(N)

the time complexity is O(NlogN).

*/

function findMaxNos(arr,number){

  if(arr.length === 0) {
    return []
  }

  if(number < 0 || number > arr.length){
    return `Invalid Input`
  }

  //created the max heap
  let resultHeap = new MaxHeap(arr[0])

  //Insert number to Max Heap - O(N)

  for(let i=1;i<arr.length;i++){
    resultHeap.insert(arr[i])
  }
  let result = []

  //remove first 'k' number maximum from the Max Heap - O(logN)

  for(let k=0;k<number;k++){
    result.push(resultHeap.remove())
  }

  return result;
}

//Max Heap

class MaxHeap{
  constructor(value){
    this.data = [value];
  }

  //Insert value at the end and sift up
  insert(value){
    this.data.push(value);
    this.siftUp(this.data.length-1)
  }
  siftUp(index){
    let parentIndex = Math.floor((index-1)/2)
    if(this.data[index] > this.data[parentIndex]){
      [this.data[index],this.data[parentIndex]] = [this.data[parentIndex],this.data[index]];
      this.siftUp(parentIndex)
    }
  }

  //Remove first element - max number fromt the array and sift down
  remove(){
    if(this.data.length > 1){
      [this.data[0],this.data[this.data.length-1]] = [this.data[this.data.length-1],this.data[0]]
    }
    let max = this.data.pop()

    if(this.data.length > 1){
      this.siftDown(0)
    }
    return max
  }

  siftDown(index){
    let child1Index = (2*index)+1;
    let child2Index = (2*index)+2;

    if(this.data[child1Index] > this.data[child2Index]){
      [this.data[index],this.data[child1Index]] = [this.data[child1Index],this.data[index]]


      let nextChild1Index = (2*child1Index)+1;
      let nextChild2Index = (2*child1Index)+2;

      if(this.data[nextChild1Index] || this.data[nextChild2Index]){
        this.siftDown(child1Index)
      }
    }else if(this.data[child1Index] < this.data[child2Index]){
      [this.data[index],this.data[child2Index]] = [this.data[child2Index],this.data[index]]


      let nextChild1Index = (2*child2Index)+1;
      let nextChild2Index = (2*child2Index)+2;

      if(this.data[nextChild1Index] || this.data[nextChild2Index]){
        this.siftDown(child2Index)
      }
    }
  }
}
