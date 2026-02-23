function EventHandleWithFunction()
{
    function Demo()
    {
        alert("This is Function Component !")
    }
    return(<>
        <button onClick={Demo}>Click Me</button>
    </>)
}
export default EventHandleWithFunction;