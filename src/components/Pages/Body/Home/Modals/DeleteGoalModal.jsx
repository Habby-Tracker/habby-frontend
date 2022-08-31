import Button from '../../Global/Button/Button';
import SecondaryButton from '../../Global/Button/SecondaryButton';
import Modal from '../../Global/Form/Modal';
import { goalActions } from '../../../../../State/Hooks/goals';

export default function DeleteGoalModal({ setDeleteModal }) {
    const { remove } = goalActions();
    
    function createGoal(e) {
        e.preventDefault();
        remove();
        setDeleteModal(false);
    }

    return (
        <Modal setShowModal={setDeleteModal}>
            <form className="flex flex-col w-48">
                <h1 className="text-bold text-primaryOrange text-xl">Delete Goal</h1>
                <h3 className="text-bold p-4">Are you sure you want to delete this goal?</h3>
                <Button text="Delete" onClick={createGoal} />
                <SecondaryButton text="Cancel" onClick={() => setDeleteModal(false)} />
            </form>
        </Modal>
    );
}
