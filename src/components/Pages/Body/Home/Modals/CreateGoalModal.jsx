import {
    InputControl,
    SelectControl,
} from '../../Global/Form/FormControls/FormControls';
import Button from '../../Global/Button/Button';
import Modal from '../../Global/Form/Modal';
import { useState } from 'react';
import { goalActions } from '../../../../../State/Hooks/goals';

export default function CreateGoalModal({ setModal }) {
    const [goalInForm, setGoalInForm] = useState({
        statusID: 1,
        goalCategoryID: 1,
        timePeriodCount: 5
    });
    const { create } = goalActions();

    function createGoal(e) {
        e.preventDefault();
        create(goalInForm);
        setModal(false);
    }

    return (
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
    );
}
