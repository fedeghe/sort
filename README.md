# Sort
Exploring and challenging most sorting algorithms in the best language ever.

Here I will list the results of some test ran on different benchmarks. What matters here is the size of the input array, and its content.

The strategy named _native_ in the tables below is the `Array.prototype.sort` function which turns surprisingly to **not** be the fastest solution (at least using the random generated array).
For curiosity I also added _lodash_ using the _\_.sort\_by_ function.  

### Performance outcome in milliseconds:

**Env**: MacBook Pro,  2.5 GHz Dual-Core Intel Core i7, 16 GB 2133 MHz LPDDR3

stats On node **v10.14.1**  
- 100 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/100/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/100/obj.csv.summary.txt)]  
- 200 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/200/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/200/obj.csv.summary.txt)]  
- 500 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/500/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/500/obj.csv.summary.txt)]  
- 1000 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/1000/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/1000/obj.csv.summary.txt)]  

stats On node **v12.16.1**  
- 100 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/100/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/100/obj.csv.summary.txt)]  
- 200 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/200/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/200/obj.csv.summary.txt)]  
- 500 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/500/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/500/obj.csv.summary.txt)]  
- 1000 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/1000/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/1000/obj.csv.summary.txt)]  