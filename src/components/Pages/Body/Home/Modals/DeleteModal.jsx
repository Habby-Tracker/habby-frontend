import Button from '../../Global/Button/Button';
import SecondaryButton from '../../Global/Button/SecondaryButton';
import Modal from '../../Global/Form/Modal';
import { goalActions } from '../../../../../State/Hooks/goals';
import { habitActions } from '../../../../../State/Hooks/habits';

export default function DeleteModal({ setDeleteModal, activeItem }) {
    const { remove } = goalActions();
    const { removeHabit } = habitActions();

    const type = Object.keys(activeItem).contains('goalID') ? 'Habit' : 'Goal';
    
    function deleteItem(e) {
        e.preventDefault();
        if (type === 'Goal') remove(activeItem.id);
        if (type === 'Habit') removeHabit(activeItem.id);
        setDeleteModal(false);
    }

    return (
        <Modal setShowModal={setDeleteModal}>
            <form className="flex flex-col w-48">
                <h1 className="text-bold text-primaryOrange text-xl">Delete {type}</h1>
                <h3 className="text-bold p-4">Are you sure you want to delete this {type}?</h3>
                <Button text="Delete" onClick={deleteItem} />
                <SecondaryButton text="Cancel" onClick={() => setDeleteModal(false)} />
            </form>
        </Modal>
    );
}
