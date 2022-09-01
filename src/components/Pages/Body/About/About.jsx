import Button from '../Global/Button/Button';
import Section from '../Global/Section/Section';


export default function About() {

    return(
        <Section width="100%">
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <Button text="Go Back" width={'80%'}/>
            </div>
        </Section>
    );
}
