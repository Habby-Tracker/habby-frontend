import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Modal from '../Global/Form/Modal';
import Section from '../Global/Section/Section';
import AddGoalButton from '../Global/Button/AddGoalButton';
import Hero from '../Hero/Hero';
import DateSlider from '../Dates/DateSlider.jsx';
import { useState } from 'react';
import { useGoals } from '../../../../State/Hooks/goals';
import {
    InputControl,
    SelectControl,
} from '../Global/Form/FormControls/FormControls';
import Button from '../Global/Button/Button';
import { goalActions } from '../../../../State/Hooks/goals';

export default function Home() {
    const [modal, setModal] = useState(false);
    const { goals } = useGoals();
    const [goalInForm, setGoalInForm] = useState({
        statusID: 1,
        goalCategoryID: 1,
    });
    const { create } = goalActions();

    const openModal = () => {
        setModal(true);
    };

    function createGoal(e) {
        e.preventDefault();
        create(goalInForm);
        setModal(false);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <DateSlider />
            <Hero />
            <Section header="Today's Habits" seeAll={true} width="90vw">
                <HabitCard />
            </Section>
            <Section header="Your Goals" seeAll={true} width="90vw">
                {goals &&
                    goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)}
            </Section>
            {modal && (
                <Modal setShowModal={setModal}>
                    <form className="flex flex-col">
                        <h1>Add Goal</h1>
                        <InputControl
                            label="Goal Name"
                            name="goalName"
                            placeholder="Enter a goal name"
                            type="text"
                            onChange={(e) =>
                                setGoalInForm({
                                    ...goalInForm,
                                    goalName: e.target.value,
                                })
                            }
                            required
                        />
                        <InputControl
                            label="Habit Name"
                            name="habitName"
                            placeholder="Enter a habit name"
                            type="text"
                            onChange={(e) =>
                                setGoalInForm({
                                    ...goalInForm,
                                    habitName: e.target.value,
                                })
                            }
                            required
                        />
                        <SelectControl
                            label="Time Period"
                            onChange={(e) =>
                                setGoalInForm({
                                    ...goalInForm,
                                    habitTypeID: e.target.value,
                                })
                            }
                        >
                            <option value="1">Day</option>
                            <option value="2">Week</option>
                            <option value="3">Month</option>
                        </SelectControl>
                        <SelectControl
                            label="Habit Frequency"
                            onChange={(e) =>
                                setGoalInForm({
                                    ...goalInForm,
                                    timePeriodID: e.target.value,
                                })
                            }
                        >
                            <option value="1">Every Day</option>
                            <option value="2">Every Other Day</option>
                            <option value="3">Twice a Week</option>
                        </SelectControl>
                        <Button text="Submit" onClick={createGoal} />
                    </form>
                </Modal>
            )}
            <AddGoalButton onClick={() => openModal()} />
        </div>
    );
}
