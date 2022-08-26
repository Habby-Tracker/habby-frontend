import Button from '../Global/Button/Button';
import Section from '../Global/Section/Section';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

export default function GoalAdded() {

    return (
        <>
            <Section

                subText="Goal added success page"  
                width="100%">
                <FactCheckOutlinedIcon fontSize="large" sx={{ color: 'hsla(21.6, 100%, 50%, 1)' }}/>
                <br></br>
                <p className="text-2xl">Done!</p>
                <br></br>
                <p className="text-sm">Goal has been added. Time to start working towards it!</p>
                <br></br>
                <Button text="OK" width={'80%'}/>
            </Section>
        </>
    );
}
