# Sort
Exploring and challenging most sorting algorithms in _javascript_.

Below I will list the results of some tests ran on different benchmarks. What matters here is the size of the input array, and its content. As You will see comparing the outcomes of different node versions, the `Array.prototype.sort` got better in the most recent one (actually from 11.x.x). 

The strategy named _native_ in the tables below is the `Array.prototype.sort` function which turns surprisingly to **not** be the fastest solution, at least when not using an up to date _node_ version. Another reason to keep your _node_ up to date.  
For curiosity I also added _lodash_ using the _\_.sort\_by_ function.  

### Performance outcome in milliseconds:

**Env**: MacBook Pro,  2.5 GHz Dual-Core Intel Core i7, 16 GB 2133 MHz LPDDR3

stats On _node_ **v10.14.1**  
- 100 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/100/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/100/obj.csv.summary.txt)]  
- 200 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/200/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/200/obj.csv.summary.txt)]  
- 500 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/500/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/500/obj.csv.summary.txt)]  
- 1000 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/1000/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/1000/obj.csv.summary.txt)]  
- 2000 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/2000/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/10.19.0/2000/obj.csv.summary.txt)]  

stats On _node_ **v12.16.1**  
- 100 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/100/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/100/obj.csv.summary.txt)]  
- 200 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/200/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/200/obj.csv.summary.txt)]  
- 500 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/500/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/500/obj.csv.summary.txt)]  
- 1000 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/1000/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/1000/obj.csv.summary.txt)]  
- 2000 elements [[int](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/2000/int.csv.summary.txt), [obj](https://github.com/fedeghe/sort/blob/master/stats/12.16.1/2000/obj.csv.summary.txt)]  