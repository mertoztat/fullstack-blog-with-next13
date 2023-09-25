export default function Input({ type, className, placeholder, value }) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
    />
  );
}
