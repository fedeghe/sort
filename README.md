## Sort
Exploring and challenging most sorting algorithms in the best language ever.

Here I will list the results of some test ran on different benchmarks. What matters here is the size of the input array, and its content.

Elements: **100**  
Average on **~100** tests  
Content: random integers ∈ **[0, 100]**  
<details>
    <summary>Results:</summary>  

| Strategy | time in ms |
|----------|------------:|
| counting | 0.04 |
| quick | 0.08 |
| native | 0.09 |
| shell | 0.09 |
| radix | 0.10 |
| merge | 0.15 |
| insertion | 0.18 |
| heap | 0.21 |
| selection | 0.30 |
| shaker | 0.33 |
| gnome | 0.47 |
| lodash | 0.59 |
| bubble | 0.98 |
</details>

---
Elements: **100**  
Average on **~100** tests  
Content: random `{num: int}` with `int` ∈ **[0, 100]**  
<details>
    <summary>Results:</summary>  
    
| Strategy | time in ms |
|----------|------------:|
| counting | 0.06 |
| native | 0.09 |
| quick | 0.11 |
| merge | 0.17 |
| insertion | 0.21 |
| selection | 0.39 |
| lodash | 0.40 |
| shaker | 0.43 |
| gnome | 0.63 |
| bubble | 1.75 |
</details>

---

Elements: **1K**  
Average on **~100** tests  
Content: random integers ∈ **[0, 1K]**  
<details>
    <summary>Results:</summary>  

| Strategy | time in ms |
|----------|------------:|
| counting | 0.26 |
| quick | 1.02 |
| radix | 1.09 |
| native | 1.34 |
| shell | 1.78 |
| insertion | 2.23 |
| heap | 2.67 |
| merge | 2.74 |
| selection | 2.80 |
| gnome | 3.24 |
| shaker | 3.92 |
| bubble | 5.37 |
| lodash | 5.46 |
</details>

---
Elements: **1K**  
Average on **~100** tests  
Content: random `{num: int}` with `int` ∈ **[0, 1K]**  
<details>
    <summary>Results:</summary>  
    
| Strategy | time in ms |
|----------|------------:|
| counting | 0.36 |
| native | 0.36 |
| quick | 1.87 |
| merge | 3.38 |
| lodash | 4.35 |
| insertion | 6.00 |
| selection | 7.48 |
| shaker | 8.85 |
| gnome | 9.86 |
| bubble | 14.10 |
</details>

---

Elements: **10k**  
Average on **~30** tests  
Content: random integers ∈ **[0, 10k]**  
<details>
    <summary>Results:</summary>  

| Strategy | time in ms |
|----------|------------:|
| counting | 2.30 |
| shell | 3.55 |
| quick | 4.60 |
| merge | 9.57 |
| native | 11.81 |
| heap | 13.34 |
| radix | 19.06 |
| lodash | 25.87 |
| insertion | 33.25 |
| selection | 80.64 |
| shaker | 99.50 |
| gnome | 141.47 |
| bubble | 309.06 |
</details>

---
Elements: **10K**  
Average on **~30** tests  
Content: random `{num: int}` with `int` ∈ **[0, 10K]**  
<details>
    <summary>Results:</summary>  
    
| Strategy | time in ms |
|----------|------------:|
| counting | 4.82 |
| quick | 6.06 |
| native | 9.46 |
| merge | 12.38 |
| lodash | 17.33 |
| insertion | 256.49 |
| shaker | 405.66 |
| selection | 406.49 |
| gnome | 535.11 |
| bubble | 1102.52 |
</details>

--- 
Run yarn in watch mode (`jarn jestwatch`) and then simply hit `a`, all relevant data in the `stats` folder will be refined live.