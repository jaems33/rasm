use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n1: i32) -> i32 {
  if n1 <= 0 {
    return 0;
  }
  let total = n1 - 1;
  let mut l1: i32 = 1;
  let mut l2: i32 = 1;
  for _ in 1..total {
    let temp = l2;
    l2 = l2 + l1;
    l1 = temp;
  }
  l2
}