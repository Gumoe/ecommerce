export const color = [
  "White",
  "Black",
  "Pink",
  "Red",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "pink", label: "Pink" },
      { value: "red", label: "Red" },
      { value: "yellow", label: "Yellow" },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilters = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-499", label: "0 To 499" },
      { value: "500-999", label: "500 To 999" },
      { value: "1000-1999", label: "1000 To 1999" },
      { value: "2000-2999", label: "2000 To 2999" },
      { value: "3000-3999", label: "3000 To 3999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10%", label: "10% And Above" },
      { value: "20%", label: "20% And Above" },
      { value: "30%", label: "30% And Above" },
      { value: "40%", label: "40% And Above" },
      { value: "50%", label: "50% And Above" },
      { value: "60%", label: "60% And Above" },
      { value: "70%", label: "70% And Above" },
      { value: "80%", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];
export const sortOption = [
  { name: "Price: Low To High", query: "price_low", current: false },
  { name: "Price: High To Low", query: "price_high", current: false },
];
