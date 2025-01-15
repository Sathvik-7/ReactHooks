import { data,dataAge } from "./ComponentA";

const ComponentB = () => 
    {
        return (
            <section>
                <data.Consumer>
                    {
                        (value) => 
                            {
                                return (
                                    <dataAge.Consumer>
                                        {
                                            (age) => 
                                                {
                                                    return (
                                                        <div>
                                                            {value + " " + "Ch"} <br/>
                                                            I am {age} years old
                                                        </div>
                                                        );
                                                }
                                        }
                                    </dataAge.Consumer>
                                );
                            }
                    }
                </data.Consumer>
            </section>
        );
    }

export default ComponentB;