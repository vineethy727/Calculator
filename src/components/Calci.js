import {useState} from "react";

const Calci=()=>{

    const [input,setInput]=useState("");
    
    const eventchange=(event)=>{
        setInput(input.concat(event.target.value));
    }

    const clrDisplay=()=>{
        setInput("");
    }

    const calculate=()=>{
        setInput(eval(input).toString());
    }

    return(
        <>
            <div>
                <div><input type={"text"} placeholder={"0"} id={"answer"} value={input}></input></div>
                <div>
                    <input type={"button"} value={"9"} onClick={eventchange}></input>
                    <input type={"button"} value={"8"} onClick={eventchange}></input>
                    <input type={"button"} value={"7"} onClick={eventchange}></input>
                    <input type={"button"} value={"6"} onClick={eventchange}></input>
                    <input type={"button"} value={"5"} onClick={eventchange}></input>
                    <input type={"button"} value={"4"} onClick={eventchange}></input>
                    <input type={"button"} value={"3"} onClick={eventchange}></input>
                    <input type={"button"} value={"2"} onClick={eventchange}></input>
                    <input type={"button"} value={"1"} onClick={eventchange}></input>
                    <input type={"button"} value={"0"} onClick={eventchange}></input>
                    <input type={"button"} value={"."} onClick={eventchange}></input>
                    <input type={"button"} value={"clear"} onClick={clrDisplay}></input>
                    <input type={"button"} value={"/"} onClick={eventchange}></input>
                    <input type={"button"} value={"*"} onClick={eventchange}></input>
                    <input type={"button"} value={"-"} onClick={eventchange}></input>
                    <input type={"button"} value={"+"} onClick={eventchange}></input>
                    <input type={"button"} value={"="} onClick={calculate}></input>
                </div>
            </div>
        </>
    )
}
export default Calci;