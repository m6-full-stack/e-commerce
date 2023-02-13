export interface IValues {}

export interface IPropsParagraph {

  className?: string;
  children?: string;
  color?: string;
  paragraphSize: string
}

const BaseParagraph = ({ className, children, color, paragraphSize }: IPropsParagraph) => {
  return (
    <>
        { <p className={className} color={color}>{ children }</p>}
    </>
  )
}

export default BaseParagraph