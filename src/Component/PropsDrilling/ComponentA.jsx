import ComponentB from "./ComponentB";

const ComponentA = ({name}) => 
    {
        return (
            <section>
                <ComponentB name={name}/>
            </section>
        );
    }

export default ComponentA;