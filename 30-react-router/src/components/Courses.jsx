import { Link } from 'react-router-dom';
import courses from '../data/courses';

const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      <div className="coursesContent">
        {courses.map((course) => (
          <Link to={course.slug} key={course.id}>
            {course.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Courses;
