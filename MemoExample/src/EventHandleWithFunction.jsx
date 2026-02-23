function EventHandleWithFunction()
{
    function view()
    {
        alert("unction Component Called.....!")
    }
    return(<>
        <button onClick={view}>Click Me</button>
    </>)
}
export default EventHandleWithFunction;