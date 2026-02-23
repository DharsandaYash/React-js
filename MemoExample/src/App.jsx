import Student from "./Student";
import EventHandleWithClass from "./EventHandleWithClass"
import EventHandleWithFunction from "./EventHandleWithFunction";
import PassingArgumentWithClass from "./PassingArgumentWithClass";
import PassingArgumentWithFunction from "./PassingArgumentWithFunction";
import PassingArgumentWithProps from "./PassingArgumentWithProps";

function App()
{
  return(
    <>
        <PassingArgumentWithProps name="Admin"></PassingArgumentWithProps>
        <EventHandleWithClass></EventHandleWithClass> <br></br>
        <EventHandleWithFunction></EventHandleWithFunction>
        <PassingArgumentWithClass></PassingArgumentWithClass>
        <PassingArgumentWithFunction></PassingArgumentWithFunction>

    </>
  );
}
export default App;