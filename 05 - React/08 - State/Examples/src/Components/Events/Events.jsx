export default function Events() {
  function handleClick() {
    alert('You have clicked the button!');
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form was submitted');
  }

  return (
    <>
      <h1>Events</h1>
      <button onClick={handleClick}>Click me</button>

      <hr />
      <form onSubmit={handleSubmit}>
        <button type='submit'>Submit form</button>
      </form>
    </>
  );
}
