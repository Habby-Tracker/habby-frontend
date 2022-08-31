import Section from '../Global/Section/Section';
import Calendar from '../Dates/Calendar';
import GoalStats from '../GoalStats/GoalStats';

export default function GoalDetail() {

    return (
        <div>
            <Section width="100%">
                <Calendar />
            </Section>
            <Section>
                <GoalStats />
            </Section>
        </div>
    );
}
