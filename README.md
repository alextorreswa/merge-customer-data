# Merging Customer Data for Market Analysis

## Problem
Given two sorted integer arrays `customerData1` and `customerData2`, merge `customerData2` into `customerData1` in-place.  
`customerData1` has length `m + n`, with the last `n` slots as placeholders (0s).

## Clarifying Questions
- Are inputs always sorted non-decreasing?
- Can IDs repeat?
- Are `m` and `n` always valid?
- Are trailing zeros always placeholders?

## Diagram (Flowchart)
```mermaid
flowchart TD
  A[Start] --> B[Set i=m-1, j=n-1, k=m+n-1]
  B --> C{j >= 0?}
  C -- No --> Z[Done]
  C -- Yes --> D{i >= 0 AND customerData1[i] > customerData2[j]?}
  D -- Yes --> E[Place customerData1[i], i--, k--]
  D -- No --> F[Place customerData2[j], j--, k--]
  E --> C
  F --> C
