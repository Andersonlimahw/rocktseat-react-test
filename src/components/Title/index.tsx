interface Props {
    text?: string,
}
export const Title = ({ text = 'Unit tests' }:Props) => (
    <h1 className="title">
        {text}
    </h1>
)
export default Title;