const SkillPill = ({ children, className }) => {
  return (
    <span className={`px-6 py-3 border-4 border-solid rounded-full ${className}`}>{children}</span>
  )
}

export default SkillPill;