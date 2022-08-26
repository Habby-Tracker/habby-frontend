import Button from '../Global/Button/Button';
import Section from '../Global/Section/Section';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

export default function GoalAdded() {

    return (
        <>
            <Section
                header="GoalAdded"
                subText="Goal added success page"  
                maxWidth="90%">
                <FactCheckOutlinedIcon sx={{ color: 'hsla(21.6, 100%, 50%, 1)' }}/>
                <Button text="Button" width={'80%'}/>
            </Section>
        </>
    );
}
