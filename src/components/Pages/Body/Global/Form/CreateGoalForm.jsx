import Button from '../../Global/Button/Button';
import { useState } from 'react';
import { goalActions } from '../../../../../State/Hooks/goals';
import { useEffect } from 'react';
import { useCategories } from '../../../../../State/Hooks/categories';
import { InputControl } from './FormControls/FormControls';

export default function CreateGoalForm({ setModal }) {
    const [goalInForm, setGoalInForm] = useState({
        statusID: 1,
        goalCategoryID: 1,
        timePeriodCount: 1,
        timePeriodID: '1'
    });
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
    const [maxTimePeriodCount, setMaxTimePeriodCount] = useState(new Array(90).fill());
    const { create } = goalActions();
    const { categories } = useCategories();
    
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
        <div> 
            <form className="flex flex-col rounded w-40% bg-lightGrey md:items-center">
                <h1 className="text-bold text-primaryOrange text-xl md:text-3xl">Add Goal</h1>
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
                    className="border-b-2 border-primaryBlack"
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
                    className="border-b-2 border-primaryBlack"
                />
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
                <label>
                    <span className="label-text flex justify-start text-darkPurple my-2">Goal Category</span>
                    <div className="flex flex-row gap-2">
                        <select defaultValue={1} onChange={(e) =>
                            setGoalInForm({
                                ...goalInForm,
                                goalCategoryID: e.target.value,
                            })
                        } className="bg-gray-300 rounded flex justify-end my-2 w-full">
                            {categories && categories.map((category, index) => <option key={`option${index}`} value={category.id}>{category.name}</option>)}
                        </select>
                    </div>
                </label>
                <Button text="Submit" onClick={createGoal} />
            </form>
        </div>
    );
}
