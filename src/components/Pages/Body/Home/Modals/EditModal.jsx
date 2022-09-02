import { InputControl } from '../../Global/Form/FormControls/FormControls';
import Button from '../../Global/Button/Button';
import Modal from '../../Global/Form/Modal';
import { useState } from 'react';
import { goalActions } from '../../../../../State/Hooks/goals';
import { useCategories } from '../../../../../State/Hooks/categories';
import { habitActions } from '../../../../../State/Hooks/habits';

export default function EditModal({ setEditModal, activeItem }) {
    const [itemInForm, setGoalInForm] = useState({});
    const { update } = goalActions();
    const { updateHabit } = habitActions();
    const { categories } = useCategories();

    const type = Object.keys(activeItem).includes('goalID') ? 'Habit' : 'Goal';
    
    function updateItem(e) {
        e.preventDefault();
        if (type === 'Goal') update(activeItem.id, itemInForm);
        if (type === 'Habit') updateHabit(activeItem.id, itemInForm);
        setEditModal(false);
    }

    return (
        <Modal setShowModal={setEditModal}>
            <form className="flex flex-col items-center w-40% bg-lightGrey md:w-20%">
                <h1 className="text-bold text-primaryOrange text-xl">Edit {type}</h1>
                {type === 'Goal' && <div className="my-4">
                    <InputControl
                        label="Goal Name"
                        name="goalName"
                        value={activeItem.goalName}
                        type="text"
                        onChange={(e) => setGoalInForm({ ...itemInForm, goalName: e.target.value })}
                        required
                    />
                    <label>
                        <span className="label-text flex justify-start text-darkPurple my-2">Goal Category</span>
                        <div className="flex flex-row gap-2">
                            <select defaultValue={activeItem.goalCategoryID} onChange={(e) =>
                                setGoalInForm({
                                    ...itemInForm,
                                    goalCategoryID: e.target.value,
                                })
                            } className="bg-gray-300 rounded flex justify-end my-2 w-full">
                                {categories && categories.map((category, index) => <option key={`option${index}`} value={category.id}>{category.name}</option>)}
                            </select>
                        </div>
                    </label>
                </div>}
                {type === 'Habit' && <div className="my-4">
                    <InputControl
                        label="Habit Name"
                        name="habitName"
                        value={activeItem.habitName}
                        type="text"
                        onChange={(e) => setGoalInForm({ ...itemInForm, habitName: e.target.value })}
                        required
                    />
                </div>}
                <Button text="Submit" onClick={updateItem}/>
            </form>
        </Modal>
    );
}
