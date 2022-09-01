import Button from '../Global/Button/Button';
import Section from '../Global/Section/Section';


export default function About() {

    return(
        <><Section width="100%">
            <p className="w-full text-center text-2xl font-semibold">About Us</p>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col">
                    {/* <img person /> */}
                    <img src="/imgs/Riley.png" alt="Riley" className="h-12 rounded-full" />   
                    <p className="font-bold">Riley</p>
                </div>
                <div className="w-3/4 text-right mr-1">
                    <p className="text-darkPurple font-extrabold">Goal(s)</p>
                </div>
            </div>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col">
                    {/* <img person /> */}
                    <img src="/imgs/Beau.png" alt="Beau" className="h-12 rounded-full" />   
                    <p className="font-bold">Beau</p>
                </div>
                <div className="w-3/4 text-right mr-1">
                    <p className="text-darkPurple font-extrabold">Goal(s)</p>
                </div>
            </div>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col">
                    {/* <img person /> */}
                    <div>
                        <img src="/imgs/Susan.png" alt="Susan" className="h-12 rounded-full" />   
                    </div>
                    <p className="font-bold">Susan</p>
                </div>
                <div  className="w-3/4 text-right mr-1">
                    <p className="text-darkPurple font-extrabold">Goal(s)</p>
                </div>
            </div>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col">
                    {/* <img person /> */}
                    <img src="/imgs/Cody.png" alt="Cody" className="h-12 rounded-full" />   
                    <p className="font-bold">Cody</p>
                </div>
                <div  className="w-3/4 text-right mr-1">
                    <p className="text-darkPurple font-extrabold">Goal(s)</p>
                </div>
            </div>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col">
                    {/* <img person /> */}
                    <img src="/imgs/Will.png" alt="Will" className="h-12 rounded-full" />   
                    <p className="font-bold">Will</p>
                </div>
                <div  className="w-3/4 text-right mr-1">
                    <p className="text-darkPurple font-extrabold">Goal(s)</p>
                </div>
            </div>
        </Section>
        <Button text="Go Back" width={'80%'} /></>
    );
}
