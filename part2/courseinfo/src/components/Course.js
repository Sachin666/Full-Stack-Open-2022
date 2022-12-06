function Course({ course }) {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} - {exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const initialValue = 0;
  const list = parts.reduce((prev, curr) => {
    return prev + curr.exercises;
  }, initialValue);

  return (
    <p>
      <b>Total of {list} exercises</b>
    </p>
  );
};

export default Course;
