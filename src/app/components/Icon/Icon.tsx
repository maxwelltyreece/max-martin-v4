
export default function Icon({ path } : { path: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 hover:opacity-70 transition"
    >
      <path d={path} />
    </svg>
  )}