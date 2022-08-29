import Section from '../Global/Section/Section';
import CircularProgressWithLabel from '../Global/PieChart/PieChart';
import ProgressCard from '../Global/Card/ProgressCard';

export default function Progress() {
    const progress = (19 / 21) * 100;

    return (
        <Section header = "Your Goals" seeAll={true} width="90vw">
            <div className="py-10"> 
                <CircularProgressWithLabel progress={progress} />
            </div>
            <p className="text-primaryOrange">✓ 11 Habits goal has achieved</p>
            <p className="text-primaryOrange">✕ 6 Habits goal hasnt achieved</p>
            {/* darkGrey color needed */}
            <ProgressCard goal="Journaling every day" target="7 of 7 days target" freq="Everyday" width="100%" height="100px" id={1}/>
            <ProgressCard goal="Meditate" target="7 of 7 days target" freq="Everyday" width="100%" height="100px" id={1}/>
            <ProgressCard goal="Vitamin" target="5 of 7 days target" freq="Everyday" width="100%" height="100px" id={1}/>
            <a className="text-primaryOrange font-bol text-[12px] no-underline hover:underline">{'See All'}</a>
        </Section>
    );
}
