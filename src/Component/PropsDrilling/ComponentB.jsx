import ComponentC from "./ComponentC";

const ComponentB = ({name}) => 
    {
        return (
            <section>
                <ComponentC name={name}/>
            </section>
        );
    }

export default ComponentB;