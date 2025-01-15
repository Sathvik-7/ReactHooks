import {useState,useEffect} from 'react';

const UseEffectFetchData = () =>
    {
        const [data,setData] = useState([])

        useEffect(
            ()=>{
                const getData = async () =>
                {
                    try
                    {
                        const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
                                            .then((respone) => respone.json())

                        if(fetchData!=null && fetchData)
                        { 
                            setData(fetchData.slice(0,10))
                        }
                    }
                    catch(error)
                    {console.log(error);}
                    
                    /*
                    const result = await fetch("https://jsonplaceholder.typicode.com/posts")
                    .then((response) => response.json())
                    .slice()
                    .then((d) => setData(d))
                    .catch((error) => console.log(error));
                    */
                }
                getData();
            } , 
            []
        );
        return (
        <section>
            <table style={{border:"1px solid", borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                {data.map(d =>
                <tbody key={d.id}>
                    <tr >
                        <td>{d.id}</td>
                        <td>{d.title}</td>
                        <td>{d.body}</td>
                    </tr>
                </tbody>
                )}
            </table>
        </section>);
    }

export default UseEffectFetchData;