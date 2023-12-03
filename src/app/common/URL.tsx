export const URL = (props: { href: string, className?: string, children: string }) => {
  return (
    <a href={props.href} target="_blank" className={`text-cyan-700 visited:text-violet-700 underline ${props.className}`}>
      { props.children }
    </a>
  )
}

export default URL;