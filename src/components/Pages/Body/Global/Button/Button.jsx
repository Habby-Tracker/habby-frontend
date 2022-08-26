export default function Button({ text, width, height, onClick, marginTop }) {
    return (
        <button className="bg-gradient-to-tr from-lightOrange to-primaryOrange 
        text-white font-bold py-2 px-4 rounded hover:bg-darkOrange" 
        style={{ width, height, marginTop }} onClick={onClick}>
            {text}
        </button>
    );
}
