/**
 * Merges customerData2 into customerData1 in-place.
 *
 * customerData1 has length m+n, where the first m items are valid.
 * customerData2 has length n.
 *
 * Time: O(m + n)
 * Space: O(1)
 */
function mergeCustomerData(customerData1, m, customerData2, n) {
  // Basic validation (optional but good for readability)
  if (!Array.isArray(customerData1) || !Array.isArray(customerData2)) {
    throw new TypeError("customerData1 and customerData2 must be arrays");
  }
  if (customerData1.length !== m + n) {
    throw new Error("customerData1 length must be m + n");
  }
  if (customerData2.length !== n) {
    throw new Error("customerData2 length must be n");
  }

  let i = m - 1;       // last valid in customerData1
  let j = n - 1;       // last in customerData2
  let k = m + n - 1;   // last slot in customerData1

  // Only need to place remaining items from customerData2
  while (j >= 0) {
    if (i >= 0 && customerData1[i] > customerData2[j]) {
      customerData1[k] = customerData1[i];
      i--;
    } else {
      customerData1[k] = customerData2[j];
      j--;
    }
    k--;
  }

  return customerData1; // returning is convenient for testing
}

module.exports = { mergeCustomerData };
