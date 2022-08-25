export default function Button({ text, width, height, onClick, marginTop }) {
    return (
        <button style={{ width, height, marginTop }} onClick={onClick}>
            {text}
        </button>
    );
}
