export default function AddGoalButton({ onClick }) {
    return (
        <div onClick={onClick} className="rounded-full  bg-neonGreen h-16 w-16 align-middle 
            fixed bottom-14 right-4
            flex flex-row justify-center items-center
            shadow-md
            border-4 border-white">
            <p className="text-4xl text-white font-bold pb-2">+</p>
        </div>
    );
}
