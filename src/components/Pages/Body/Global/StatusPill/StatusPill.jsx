export default function StatusPill({ progress, width, height, marginTop }) {
    return (
        progress === 1 ?
            <div className="rounded-full text-xs bg-neonGreen
        text-successGreen font-bold py-.7 mx-auto select-none" 
            style={{ width, height, marginTop }}>
                Achieved
            </div>
            :
            <div className="rounded-full text-xs
        text-darkGrey font-bold py-.7 mx-auto select-none" 
            style={{ width, height, marginTop }}>
                Unachieved
            </div>
    );
}
