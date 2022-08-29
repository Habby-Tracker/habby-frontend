import Button from '../Global/Button/Button';
import Section from '../Global/Section/Section';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ProgressCard from '../Global/Card/ProgressCard';

export default function Progress() {

    return (
        <Section header = "Your Goals" seeAll={true} width="90vw">
            <ProgressCard goal="Journaling every day" target="7 of 7 days target" freq="Everyday" width="100%" height="100px" id={1}/>
            <ProgressCard goal="Meditate" target="7 of 7 days target" freq="Everyday" width="100%" height="100px" id={1}/>
            <ProgressCard goal="Vitamin" target="5 of 7 days target" freq="Everyday" width="100%" height="100px" id={1}/>
            <a className="text-primaryOrange font-bol text-[12px] no-underline hover:underline">{'See All'}</a>
        </Section>
    );
}
