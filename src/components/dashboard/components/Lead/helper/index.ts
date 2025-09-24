// Generic utility: find label by value
export function getLabelByValue<
  T extends readonly { label: string; value: string }[]
>(arr: T, value: T[number]["value"]): string {
  return arr.find((item) => item.value === value)?.label ?? value;
}

export function getLableById<
  T extends readonly { label: string; value: string }[]
>(arr: T, value: T[number]["value"]): string {
  return arr.find((item) => item.value === value)?.label ?? value;
}

export function getIdFromValue<
  T extends readonly { label: string; value: string }[]
>(arr: T, value: T[number]["value"]): string {
  return arr.find((item) => item.value === value)?.value ?? value;
}

export function getValudFromId<
  T extends readonly { label: string; value: string }[]
>(arr: T, value: T[number]["value"]): string {
  return arr.find((item) => item.value === value)?.value ?? value;
}
