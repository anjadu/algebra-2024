import Hero from './Hero';

export default function FunctionalComponent() {
  // Regular JavaScript Object
  const student = {
    firstName: 'John',
    lastName: 'Doe',
    uid: 12345,
    active: true,
  };

  // Output HTML - JSX
  return (
    <div>
      <h1>User Information</h1>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.age}</p>
      <hr />
       </div>
  );
}