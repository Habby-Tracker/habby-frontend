import {
    InputControl,
    // SelectControl,
} from '../../Global/Form/FormControls/FormControls';
import Modal from '../../Global/Form/Modal';
import CreateGoalForm from '../../Global/Form/CreateGoalForm';

export default function CreateGoalModal({ setModal }) {

    return (
        <Modal setShowModal={setModal}>
            <CreateGoalForm setModal={setModal} /> 
        </Modal>
    );
}
