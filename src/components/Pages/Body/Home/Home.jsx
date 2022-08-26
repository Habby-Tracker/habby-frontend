import Button from '../Global/Button/Button';
import Section from '../Global/Section/Section';

export default function Home() {
    return (
        <div>
            <p>Home Page</p>
            <Section header="Today's Habits" seeAll={true} width="90vw">
                <Button text="Button" width={'80%'}/>
            </Section>
        </div>
    );
}
