import PieChart from '../Global/PieChart/PieChart';

export default function Hero() {
    const current = 6;
    const goal = 7;
    const value = (current / goal) * 100  ;


    return (
        <div className="container flex justify-start w-full bg-gradient-to-b from-primaryOrange to-lightGrey rounded-lg max-h-2/6 py-6 px-10 shadow-lg">
            <PieChart progress={value} size={'8rem'} ringColor={'hsla(315, 97%, 42%, 0.81)'} textColor={'hsla(330, 28%, 13%, 1)'}/>
            <p className="text-white text-bold">{value < 50 ? `Hip Hop don't stop! ${current} of ${goal} habits so far` : `Kablam-O you have done ${current} of ${goal} habits so far`}</p>
        </div>
    );
}
