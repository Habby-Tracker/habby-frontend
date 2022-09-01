import Button from '../../Global/Button/Button';
import SecondaryButton from '../../Global/Button/SecondaryButton';
import Modal from '../../Global/Form/Modal';
import { goalActions } from '../../../../../State/Hooks/goals';

export default function DeleteGoalModal({ setDeleteModal, activeGoal }) {
    const { remove } = goalActions();
    
    function deleteGoal(e) {
        e.preventDefault();
        remove(activeGoal.id);
        setDeleteModal(false);
    }

    return (
        <Modal setShowModal={setDeleteModal}>
            <form className="flex flex-col items-center w-40% bg-lightGrey md:w-20%">
                <h1 className="text-bold text-primaryOrange text-xl md:text-2xl">Delete Goal</h1>
                <h3 className="text-bold p-4">Are you sure you want to delete this goal?</h3>
                <Button text="Delete" onClick={deleteGoal} width={'40%'}/>
                <SecondaryButton text="Cancel" onClick={() => setDeleteModal(false)} width={'40%'}/>
            </form>
        </Modal>
    );
}
