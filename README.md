## Sort
Exploring and challenging most sorting algorithms in the best language ever.

Here I will list the results of some test ran on different benchmarks. What matters here is the size of the input array, and its content.

The strategy named _native_ in the tables below is the `Array.prototype.sort` function which turns surprisingly to **not** be the fastest solution.
 
Elements: **100**  
Average on **~100** tests  
Content: random integers ∈ **[0, 100]**  
<details>
    <summary>Results:</summary>  
counting: 0.04  
quick: 0.08  
_native_: 0.09  
shell: 0.09  
radix: 0.10  
merge: 0.15  
insertion: 0.18  
heap: 0.21  
selection: 0.30  
shaker: 0.33  
gnom: 0.47  
lodash: 0.59  
bubble: 0.98  
</details>

---
Elements: **100**  
Average on **~100** tests  
Content: random `{num: int}` with `int` ∈ **[0, 100]**  
<details>
    <summary>Results:</summary>  
counting: 0.06  
_native_: 0.09  
quic: 0.11  
merge: 0.17  
insertion: 0.21  
selection: 0.39  
lodash: 0.40  
shaker: 0.43  
gnome: 0.63  
bubble: 1.75  
</details>

---

Elements: **1K**  
Average on **~100** tests  
Content: random integers ∈ **[0, 1K]**  
<details>
    <summary>Results:</summary>  
counting: 0.26  
quick: 1.02  
radix: 1.09  
_native_: 1.34  
shell: 1.78  
insertion: 2.23  
heap: 2.67  
merge: 2.74  
selection: 2.80  
gnome: 3.24  
shaker: 3.92  
bubble: 5.37  
lodash: 5.46  
</details>

---
Elements: **1K**  
Average on **~100** tests  
Content: random `{num: int}` with `int` ∈ **[0, 1K]**  
<details>
    <summary>Results:</summary>  
counting: 0.36  
_native_: 0.36  
quick: 1.87  
merge: 3.38  
lodash: 4.35  
insertion: 6.00  
selection: 7.48  
shaker: 8.85  
gnome: 9.86  
bubble: 14.10  
</details>

---

Elements: **10k**  
Average on **~100** tests  
Content: random integers ∈ **[0, 10k]**  
<details>
    <summary>Results:</summary>  

| Strategy | time in ms |
|----------|------------:|
| counting | 2.41 |
| shell | 3.60 |
| quick | 5.00 |
| merge | 9.69 |
| _native_ | 11.53 |
| heap | 13.67 |
| radix | 19.81 |
| lodash | 26.60 |
| insertion | 34.44 |
| selection | 85.56 |
| shaker |105.32 |
| gnome | 147.57 |
| bubble | 308.16 |
</details>

---
Elements: **10K**  
Average on **~100** tests  
Content: random `{num: int}` with `int` ∈ **[0, 10K]**  
<details>
    <summary>Results:</summary>  
    
| Strategy | time in ms |
|----------|------------:|
| counting | 5.06 |
| quick | 8.23 |
| _native_ | 9.59 |
| merge | 12.43 |
| lodash | 17.68 |
| insertion | 258.38 |
| shaker | 424.16 |
| selection | 419.54 |
| gnome | 554.50 |
| bubble | 1140.90 |
</details>

--- 
Run yarn in watch mode (`jarn jestwatch`) and then simply hit `a`, all relevant data in the `stats` folder will be refined live.