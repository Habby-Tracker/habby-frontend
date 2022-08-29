export default function StatusPill({ text, width, height, marginTop }) {
    return (
        <button className="rounded-full bg-neonGreen
        text-successGreen font-bold py-2 hover:bg-darkGreen" 
        style={{ width, height, marginTop }}>
            {text}
        </button>
    );
}
