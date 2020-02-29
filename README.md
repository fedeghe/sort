## Sort
Exploring and challenging most sorting algorithms in the best language ever.

Here I will list the results of some test ran on different benchmarks. What matters here is the size of the input array, and its content.

<details>
    <summary>
        Elements: **100**<br>  
        Average on **~100** tests<br>
        Content: random integers ∈ **[0, 1000]**<br>
        Results:
    </summary>  

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
Content: random `{num: int}` with `int` ∈ **[0, 1000]**  
Results:  
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
