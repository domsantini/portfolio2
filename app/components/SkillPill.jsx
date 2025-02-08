const SkillPill = ({ children, className }) => {
  return (
    <span className={`px-8 py-4 border-4 border-solid rounded-full ${className}`}>{children}</span>
  )
}

export default SkillPill;