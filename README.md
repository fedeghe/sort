## Sort
Exploring and challenging most sorting algorithms in the best language ever.

Here I will list the results of some test ran on different benchmarks. What matters here is the size of the input array, and its content.

The strategy named _native_ in the tables below is the `Array.prototype.sort` function which turns surprisingly to **not** be the fastest solution (at least using the random generated array).
For curiosity I also added _lodash_ using the _\_.sort\_by_ function.  

For a small graphical comparation, run `yarn extract && yarn serve` and then navigate to `http://127.0.0.1:3001` 

Elements: **100**  
Average on **~300** tests  
Content: random integers ∈ **[0, 100]**  
<details>
    <summary>Results:</summary>  

counting: 0.06  
_native_: 0.10  
shell: 0.13     
radix: 0.14  
quick: 0.15  
merge: 0.18  
bucket: 0.21  
insertion: 0.23  
heap: 0.26  
selection: 0.33  
shaker: 0.42  
gnome: 0.58  
_lodash_: 0.67  
bubble: 1.11  

</details>

---
Elements: **100**  
Average on **~300** tests  
Content: random `{num: int}` with `int` ∈ **[0, 100]**  
<details>
    <summary>Results:</summary>  

counting: 0.08  
quick: 0.13  
_native_: 0.18  
bucket: 0.18  
merge: 0.19  
insertion: 0.24  
selection: 0.41  
shaker: 0.51  
_lodash_: 0.51  
gnome: 0.75  
bubble: 2.12  
</details>

---

Elements: **1K**  
Average on **~300** tests  
Content: random integers ∈ **[0, 1K]**  
<details>
    <summary>Results:</summary>  

counting: 0.24  
quick: 1.17  
radix: 1.21  
_native_: 1.48  
shell: 1.94  
insertion: 2.48  
selection: 2.83  
heap: 2.87  
merge: 3.46  
gnome: 3.48  
bucket: 3.76  
shaker: 4.35  
bubble: 5.87  
_lodash_: 6.45  

</details>

---
Elements: **1K**  
Average on **~300** tests  
Content: random `{num: int}` with `int` ∈ **[0, 1K]**  
<details>
    <summary>Results:</summary>  

counting: 0.33  
_native_: 1.64  
quick: 2.10  
merge: 3.11  
_lodash_: 4.67  
bucket: 6.32  
insertion: 6.47  
selection: 8.10  
shaker: 9.46  
gnome: 10.51  
bubble: 15.56  
</details>

---

Elements: **10k**  
Average on **~200** tests  
Content: random integers ∈ **[0, 10k]**  
<details>
    <summary>Results:</summary>  

counting: 2.52  
shell: 3.71  
quick: 4.92  
bucket: 7.57  
merge: 9.96  
_native_: 11.79  
heap: 14.56  
radix: 20.33  
_lodash_: 24.48  
insertion: 36.31  
selection: 84.29  
shaker: 105.61  
gnome: 153.79  
bubble: 318.72  
</details>

---
Elements: **10K**  
Average on **~200** tests  
Content: random `{num: int}` with `int` ∈ **[0, 10K]**  
<details>
    <summary>Results:</summary>  
    
counting: 5.75  
quick: 6.29  
bucket: 9.85  
_native_: 9.89  
merge: 12.46  
_lodash_: 16.69  
insertion: 273.49  
selection: 437.46  
shaker: 440.12  
gnome: 576.55  
bubble: 1157.71  
</details>

--- 
Run yarn in watch mode (`jarn jestwatch`) and then simply hit `a`, all relevant data in the `stats` folder will be refined live.