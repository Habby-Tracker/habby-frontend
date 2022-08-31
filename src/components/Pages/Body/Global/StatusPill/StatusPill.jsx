export default function StatusPill({ progress, width, height, marginTop }) {
    return (
        progress === 1 ?
            <button className="rounded-full text-xs bg-neonGreen
        text-successGreen font-bold py-.7 hover:bg-darkGreen" 
            style={{ width, height, marginTop }}>
                Achieved
            </button>
            :
            <button className="rounded-full text-xs
        text-darkGrey font-bold py-.7" 
            style={{ width, height, marginTop }}>
                Unachieved
            </button>
    );
}
