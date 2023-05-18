export interface UserFilterProps {
  items: string[] | number[]
  modelValue: string | number | null
  label: string
  variant?: string
}

export interface UserFilterEmit {
  (emit: 'update:modelValue', value: string | number): void
}
