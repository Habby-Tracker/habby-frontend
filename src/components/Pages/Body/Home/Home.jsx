import HabitCard from '../Global/Card/HabitCard';
import GoalCard from '../Global/Card/GoalCard';
import Section from '../Global/Section/Section';
import AddGoalButton from '../Global/Button/AddGoalButton';
import Hero from '../Hero/Hero';
import DateSlider from '../Dates/DateSlider.jsx';
import { useState } from 'react';
import CreateGoalModal from './Modals/CreateGoalModal';
import EditGoalModal from './Modals/EditGoalModal';
import DeleteModal from './Modals/DeleteModal';
import { useCalendar } from '../../../../State/Hooks/calendar';    
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useTour } from '@reactour/tour';
import { useUser } from '../../../../State/Hooks/user';
import Calendar from '../Dates/Calendar';
// import { Popover } from '@reactour/popover';

export default function Home() {
    const [modal, setModal] = useState(false);
    const [seeAllHabits, setSeeAllHabits] = useState(false);
    const [seeAllGoals, setSeeAllGoals] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const { setIsOpen } = useTour();
    const { selectedDateHabits, selectedDateGoals } = useCalendar();
    const { user } = useUser();

    const openModal = () => {
        setModal(true);
    };

    const openAllHabits = () => {
        setSeeAllHabits(!seeAllHabits);
    };
    
    const openAllGoals = () => {
        setSeeAllGoals(!seeAllGoals);
    };

    return (
        <div className="flex md:flex-row">
            <button className="flex absolute top-16 pt-2.5 right-4" data-tour="step-1" onClick={() => setIsOpen(true)}>
                <HelpOutlineIcon />
            </button>
            <div className="flex flex-col justify-start items-center h-full">
                <div className="flex justify-between space-around w-full items-end">
                    <div className="flex space-x-0 px-2 py-2 text-xl justify-start md:hidden">
                        {'Welcome,'}
                        <span className="text-purple pl-1">
                            {user ? `${user.firstName}`  : 'user'}
                        </span>
                    </div>
                </div>
                <DateSlider />
                <Hero />
                <div data-tour="step-4">
                    <Section header="Today's Habits" seeAll={true} width="90vw" open={openAllHabits} openState={seeAllHabits}>
                        {selectedDateHabits && 
                            (seeAllHabits ? 
                                selectedDateHabits.map((habit) => <HabitCard key={`habit card${habit.id}`} habit={habit} completed={habit.statusID === '3' ? true : false} setEditModal={setEditModal} setDeleteModal={setDeleteModal} setActiveItem={setActiveItem} />) 
                                :
                                selectedDateHabits.map((habit, index) => {if (index < 3) return <HabitCard key={`habit card${habit.id}`} habit={habit} completed={habit.statusID === '3' ? true : false} setEditModal={setEditModal} setDeleteModal={setDeleteModal} setActiveItem={setActiveItem} />;})
                            )
                        }
                    </Section>
                </div>
                <div data-tour="step-3">
                    <Section header="Your Goals" seeAll={true} width="90vw" marginBottom={'7vh'} open={openAllGoals} openState={seeAllGoals}>
                        {selectedDateGoals && 
                            (seeAllGoals ?
                                selectedDateGoals.map((goal) => <GoalCard key={`goal card${goal.id}`} goal={goal} setEditModal={setEditModal} setDeleteModal={setDeleteModal} setActiveGoal={setActiveItem} />)
                                :
                                selectedDateGoals.map((goal, index) => {if (index < 3) return <GoalCard key={`goal card${goal.id}`} goal={goal} setEditModal={setEditModal} setDeleteModal={setDeleteModal} setActiveGoal={setActiveItem} />;})
                            )
                        }
                    </Section>
                </div>
                {modal && <CreateGoalModal setModal={setModal} />}
                {editModal && <EditGoalModal setEditModal={setEditModal} activeGoal={activeItem} />}
                {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} activeItem={activeItem} />}
                <AddGoalButton onClick={() => openModal()} />
            </div>
            <div className="hidden md:flex">
                <Calendar />
            </div>
        </div>
    );
}
