import Button from '../../Global/Button/Button';
import SecondaryButton from '../../Global/Button/SecondaryButton';
import Modal from '../../Global/Form/Modal';
import { goalActions } from '../../../../../State/Hooks/goals';
import { habitActions } from '../../../../../State/Hooks/habits';

export default function DeleteModal({ setDeleteModal, activeItem }) {
    const { remove } = goalActions();
    const { removeHabit } = habitActions();

    const type = Object.keys(activeItem).includes('goalID') ? 'Habit' : 'Goal';
    
    function deleteItem(e) {
        e.preventDefault();
        if (type === 'Goal') remove(activeItem.id);
        if (type === 'Habit') removeHabit(activeItem.id);
        setDeleteModal(false);
    }

    return (
        <Modal setShowModal={setDeleteModal}>
            <form className="flex flex-col items-center w-40% bg-lightGrey md:w-20%">
                <h1 className="text-bold text-primaryOrange text-xl md:text-2xl">Delete {type}</h1>
                <h3 className="text-bold p-4">Are you sure you want to delete this {type}?</h3>
                <Button text="Delete" onClick={deleteItem} width={'40%'}/>
                <SecondaryButton text="Cancel" onClick={() => setDeleteModal(false)} width={'40%'}/>
            </form>
        </Modal>
    );
}
