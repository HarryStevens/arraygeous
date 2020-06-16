// Returns the correlation coefficient for an array given optional x- and y-accessors
export function cor(arr, x, y){
  let n = arr.length,
      xfn = x || (d => d[0]),
      yfn = y || (d => d[1]),
      xSum = 0,
      ySum = 0,
      xySum = 0,
      x2Sum = 0,
      y2Sum = 0;
  
  for (let i = 0; i < n; i++){
    const d = arr[i],
          dx = xfn(d, i, arr),
          dy = yfn(d, i, arr);

    xSum += dx;
    ySum += dy;
    xySum += dx * dy;
    x2Sum += dx * dx;
    y2Sum += dy * dy;
  }
  
  return (n * xySum - xSum * ySum) / Math.sqrt((n * x2Sum - xSum * xSum) * (n * y2Sum - ySum * ySum));
}