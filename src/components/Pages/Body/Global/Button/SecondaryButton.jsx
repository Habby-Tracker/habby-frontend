export default function Button({ text, width, height, onClick, marginTop }) {
    return (
        <button className="bg-grey text-black font-bold py-2 px-4 rounded" 
            style={{ width, height, marginTop }} onClick={onClick}>
            {text}
        </button>
    );
}
