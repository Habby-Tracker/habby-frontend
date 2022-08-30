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
    // SelectControl,
} from '../Global/Form/FormControls/FormControls';
import Button from '../Global/Button/Button';
import { goalActions } from '../../../../State/Hooks/goals';
import { useEffect } from 'react';
// import useLookups from '../../../../State/Hooks/lookups';

export default function Home() {
    const [modal, setModal] = useState(false);
    const { goals } = useGoals();
    // const { timePeriods } = useLookups();
    const timePeriods = [{
        id: '1',
        name: 'Days',
        day_count: 1
    }, {
        id: '2',
        name: 'Weeks',
        day_count: 7
    }, {
        id: '3',
        name: 'Months',
        day_count: 30
    }];
    const [goalInForm, setGoalInForm] = useState({
        statusID: 1,
        goalCategoryID: 1,
        timePeriodCount: 1,
        timePeriodID: '1'
    });
    const [maxTimePeriodCount, setMaxTimePeriodCount] = useState(new Array(90).fill());
    const { create } = goalActions();
    const openModal = () => {
        setModal(true);
    };

    function createGoal(e) {
        e.preventDefault();
        create(goalInForm);
        setModal(false);
    }

    useEffect(() => {
        if (goalInForm.timePeriodID === '1') setMaxTimePeriodCount(new Array(90).fill());
        if (goalInForm.timePeriodID === '2') setMaxTimePeriodCount(new Array(52).fill());
        if (goalInForm.timePeriodID === '3') setMaxTimePeriodCount(new Array(12).fill());
    }, [goalInForm.timePeriodID]);

    return (
        <div className="flex flex-col justify-center items-center">
            <DateSlider />
            <Hero />
            <Section header="Today's Habits" seeAll={true} width="90vw">
                <HabitCard />
            </Section>
            <Section header="Your Goals" seeAll={true} width="90vw">
                {goals &&
                    goals.map((goal) => <GoalCard key={`goal card${goal.id}`} goal={goal} />)}
            </Section>
            {modal && (
                <Modal setShowModal={setModal}>
                    <form className="flex flex-col">
                        <h1 className="text-bold text-primaryOrange text-xl">Add Goal</h1>
                        <InputControl
                            label="Goal"
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
                        {/* <SelectControl
                                label="Time Period"
                                onChange={(e) =>
                                    setGoalInForm({
                                        ...goalInForm,
                                        timePeriodCount: e.target.value,
                                    })
                                }
                                >
                                {maxTimePeriodCount.map((empty, index) => <option key={index} value={index + 1}>{index + 1}</option>)}
                            </SelectControl> */}
                        {/* <SelectControl
                                label=" "
                                onChange={(e) =>
                                    setGoalInForm({
                                        ...goalInForm,
                                        timePeriodID: e.target.value,
                                    })
                                }
                                >
                                {timePeriods.map(timePeriod => <option key={timePeriod.name} value={timePeriod.id}>{timePeriod.name}</option>)}
                            </SelectControl> */}
                        <label>
                            <span className="label-text flex justify-start text-darkPurple my-2">Time Period</span>
                            <div className="flex flex-row gap-2">
                                <select defaultValue={1} onChange={(e) =>
                                    setGoalInForm({
                                        ...goalInForm,
                                        timePeriodCount: e.target.value,
                                    })
                                } className="bg-gray-300 rounded flex justify-end my-2 w-10">
                                    {maxTimePeriodCount.map((empty, index) => <option key={`option${index}`} value={index + 1}>{index + 1}</option>)}
                                </select>
                                <select defaultValue={'1'} onChange={(e) =>
                                    setGoalInForm({
                                        ...goalInForm,
                                        timePeriodID: e.target.value,
                                    })
                                } className="bg-gray-300 rounded flex justify-end my-2">
                                    {timePeriods.map(timePeriod => <option key={timePeriod.name} value={timePeriod.id}>{timePeriod.name}</option>)}
                                </select>
                            </div>
                        </label>
                        <Button text="Submit" onClick={createGoal} />
                    </form>
                </Modal>
            )}
            <AddGoalButton onClick={() => openModal()} />
        </div>
    );
}
