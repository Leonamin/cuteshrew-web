type ChipState = 'default' | 'active' | 'disabled'
type ChipSize = 'sm' | 'md' | 'lg'

interface ChipProps {
  label: string;
  state?: ChipState;
  size?: ChipSize;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  onClick?: () => void;
}

const sizeClass = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
}

const stateClass = {
  default: 'bg-gray-200 text-gray-600 hover:bg-gray-300',
  active: 'bg-gray-800 text-white hover:bg-gray-900',
  disabled: 'bg-gray-200 text-gray-600 opacity-50 cursor-not-allowed',
}

function Chip({ label, state = 'default', size = 'md', suffix, prefix, onClick }: ChipProps) {
  return (
    <button className={`rounded-full text-sm ${sizeClass[size]} ${stateClass[state]} flex items-center gap-2 cursor-pointer`} onClick={onClick}>
      {prefix}
      {label}
      {suffix}
    </button>
  )
}

export { Chip, type ChipProps, type ChipState, type ChipSize }