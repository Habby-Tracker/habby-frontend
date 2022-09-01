import { InputControl } from '../../Global/Form/FormControls/FormControls';
import Button from '../../Global/Button/Button';
import Modal from '../../Global/Form/Modal';
import { useState } from 'react';
import { goalActions } from '../../../../../State/Hooks/goals';
import { useCategories } from '../../../../../State/Hooks/categories';

export default function EditGoalModal({ setEditModal, activeGoal }) {
    const [goalInForm, setGoalInForm] = useState(activeGoal);
    const { update } = goalActions();
    const { categories } = useCategories();
    
    function updateGoal(e) {
        e.preventDefault();
        update(activeGoal.id, goalInForm);
        setEditModal(false);
    }

    return (
        <Modal setShowModal={setEditModal}>
            <form className="flex flex-col">
                <h1 className="text-bold text-primaryOrange text-xl">Edit Goal</h1>
                <InputControl
                    label="Goal"
                    name="goalName"
                    value={activeGoal.goalName}
                    type="text"
                    onChange={(e) =>
                        setGoalInForm({
                            ...goalInForm,
                            goalName: e.target.value,
                        })
                    }
                    required
                />
                <label>
                    <span className="label-text flex justify-start text-darkPurple my-2">Goal Category</span>
                    <div className="flex flex-row gap-2">
                        <select defaultValue={activeGoal.goalCategoryID} onChange={(e) =>
                            setGoalInForm({
                                ...goalInForm,
                                goalCategoryID: e.target.value,
                            })
                        } className="bg-gray-300 rounded flex justify-end my-2 w-full">
                            {categories && categories.map((category, index) => <option key={`option${index}`} value={category.id}>{category.name}</option>)}
                        </select>
                    </div>
                </label>
                <Button text="Submit" onClick={updateGoal} />
            </form>
        </Modal>
    );
}
