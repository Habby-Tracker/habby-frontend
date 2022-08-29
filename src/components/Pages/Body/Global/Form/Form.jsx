import Button from '../Button/Button';
import Section from '../Section/Section';
import { InputControl, SelectControl } from './FormControls/FormControls.jsx';

export default function Form() {
    return (
        <Section
            header="Sign Up"
            subText="Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing."
            maxWidth={'800px'}
        >
            <form>
                <InputControl
                    label="email"
                    name="email"
                    placeholder="enter your email"
                    type="email"
                    required
                />

                <InputControl
                    label="password"
                    name="password"
                    placeholder="choose a password"
                    type="password"
                    required
                />

                <SelectControl label="type">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </SelectControl>

                <Button text="Submit" />
            </form>
        </Section>
    );
}
