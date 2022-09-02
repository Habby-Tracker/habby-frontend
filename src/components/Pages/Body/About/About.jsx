import Section from '../Global/Section/Section';


export default function About() {

    return(
        <Section width="100%">
            <p className="w-full text-center text-2xl font-semibold">About Us</p>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col mx-6 my-2">
                    {/* <img person /> */}
                    <img src="/imgs/Riley.png" alt="Riley" className="h-12 rounded-full" />   
                    <p className="font-bold">Riley</p>
                </div>
                <div className="w-3/4 text-left pl-10">
                    <p className="text-darkPurple font-extrabold">Goals:</p>
                    <div>
                        <p className="text-sm ml-3"> • More sunshine </p>
                        <p className="text-sm ml-3"> • More veggies</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col mx-6 my-2">
                    {/* <img person /> */}
                    <img src="/imgs/Beau.png" alt="Beau" className="h-12 rounded-full" />   
                    <p className="font-bold">Beau</p>
                </div>
                <div className="w-3/4 text-left pl-10">
                    <p className="text-darkPurple font-extrabold">Goals:</p>
                    <div>
                        <p className="text-sm ml-3"> • More sunshine </p>
                        <p className="text-sm ml-3"> • More veggies</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col mx-6 my-2">
                    {/* <img person /> */}
                    <div>
                        <img src="/imgs/Susan.png" alt="Susan" className="h-12 rounded-full" />   
                    </div>
                    <p className="font-bold">Susan</p>
                </div>
                <div  className="w-3/4 text-left pl-10">
                    <p className="text-darkPurple font-extrabold">Goals:</p>
                    <div>
                        <p className="text-sm ml-3"> • More sunshine </p>
                        <p className="text-sm ml-3"> • More veggies</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col mx-6 my-2">
                    {/* <img person /> */}
                    <img src="/imgs/Cody.png" alt="Cody" className="h-12 rounded-full" />   
                    <p className="font-bold">Cody</p>
                </div>
                <div  className="w-3/4 text-left pl-10">
                    <p className="text-darkPurple font-extrabold align-top">Goals:</p>
                    <div>
                        <p className="text-sm ml-3"> • Drink more water </p>
                        <p className="text-sm ml-3"> • Spend more time with nature</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full py-1 items-center rounded-md bg-lightGrey my-2 shadow-md">
                <div className="flex flex-col mx-6 my-2">
                    {/* <img person /> */}
                    <img src="/imgs/Will.png" alt="Will" className="h-12 rounded-full" />   
                    <p className="font-bold">Will</p>
                </div>
                <div  className="w-3/4 text-left pl-10">
                    <p className="text-darkPurple font-extrabold">Goals:</p>
                    <div>
                        <p className="text-sm ml-3"> • More sunshine </p>
                        <p className="text-sm ml-3"> • More veggies</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
