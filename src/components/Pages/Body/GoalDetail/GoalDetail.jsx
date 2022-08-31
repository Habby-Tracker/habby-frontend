import Section from '../Global/Section/Section';
import GoalCalendar from './GoalCalendar';
import GoalStats from './GoalStats';

export default function GoalDetail() {

    return (
        <div>
            <Section width="100%">
                <GoalCalendar />
            </Section>
            <Section>
                <GoalStats />
            </Section>
        </div>
    );
}
