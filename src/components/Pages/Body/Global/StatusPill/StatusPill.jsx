export default function StatusPill({ width, height, marginTop }) {
    return (
        <button className="rounded-full text-xs bg-neonGreen
        text-successGreen font-bold py-.7 hover:bg-darkGreen" 
        style={{ width, height, marginTop }}>
            Achieved
        </button>
    );
}
