import Student from "./Student";
import EventHandleWithClass from "./EventHandleWithClass"
import EventHandleWithFunction from "./EventHandleWithFunction";
import PassingArgumentWithClass from "./PassingArgumentWithClass";
import PassingArgumentWithFunction from "./PassingArgumentWithFunction";
import PassingArgumentWithProps from "./PassingArgumentWithProps";

function App1()
{
  return(
    <>
        <PassingArgumentWithProps name="Yash Dharsanda"></PassingArgumentWithProps>
    </>
  );
}

function App2()
{
  return(
    <>
        <EventHandleWithClass></EventHandleWithClass>
    </>
  );
}

function App3()
{
  return(
    <>
        <EventHandleWithFunction></EventHandleWithFunction>
    </>
  );
}

function App4()
{
  return(
    <>
        <PassingArgumentWithClass></PassingArgumentWithClass>
    </>
  );
}

function App5()
{
  return(
    <>
        <PassingArgumentWithFunction></PassingArgumentWithFunction>
    </>
  );
}

function App6()
{
  return(
    <>
        <Student></Student>
    </>
  );
}
export default App6;
