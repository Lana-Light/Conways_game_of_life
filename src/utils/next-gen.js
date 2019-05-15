function createNextGeneration(sideLength,cells) {
 let newCells = {};
  for(let y=0;y<sideLength;y++) {
    for(let x=0;x<sideLength;x++) {
      //check if cell exists then check its neighbours
      let count=0;
      let around=[[x-1,y-1],[x,y-1],[x+1,y-1],[x+1,y],[x+1,y+1],[x,y+1],[x-1,y+1],[x-1,y]];
      for(let n of around) {
        if(n[0]<0) { n[0]=sideLength-1;}
        if(n[1]<0) { n[1]=sideLength-1;}
        if(n[0]>=sideLength) { n[0]=0;}
        if(n[1]>=sideLength) { n[1]=0;}
      cells[`${n[0]}:${n[1]}`] && count++;
      if(count>3) { break; }
      }
      
      if(count==3||(count==2&&cells[`${x}:${y}`])) {
        newCells[`${x}:${y}`]=true;
      } 
    }
    }
  return newCells;
}

export default createNextGeneration;