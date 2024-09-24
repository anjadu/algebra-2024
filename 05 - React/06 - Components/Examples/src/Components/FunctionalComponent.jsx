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
      <h1>Student Information</h1>
      <Hero />
      <p>First name: {student.firstName}</p>
      <p>Last name: {student.lastName}</p>
      <p>Student ID number: {student.uid}</p>
      <hr />

      <p>
        {student.active ? (
          <strong>Student active</strong>
        ) : (
          <strong>Student inactive</strong>
        )}
      </p>
    </div>
  );
}
