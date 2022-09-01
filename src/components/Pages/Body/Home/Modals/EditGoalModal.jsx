import {
    InputControl,
    // SelectControl,
} from '../../Global/Form/FormControls/FormControls';
import Button from '../../Global/Button/Button';
import Modal from '../../Global/Form/Modal';
import { useState } from 'react';
import { goalActions } from '../../../../../State/Hooks/goals';
// import useLookups from '../../../../State/Hooks/lookups';

export default function EditGoalModal({ setEditModal }) {
    const [goalInForm, setGoalInForm] = useState({
        statusID: 1,
        goalCategoryID: 1,
        timePeriodCount: 1,
        timePeriodID: '1'
    });
    const { update } = goalActions();
    
    function createGoal(e) {
        e.preventDefault();
        update(goalInForm);
        setEditModal(false);
    }

    return (
        <Modal setShowModal={setEditModal}>
            <form className="flex flex-col items-center w-40% bg-lightGrey md:w-20%">
                <h1 className="text-bold text-primaryOrange text-xl">Edit Goal</h1>
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
                <label>

                </label>
                <Button text="Submit" onClick={createGoal} />
            </form>
        </Modal>
    );
}
