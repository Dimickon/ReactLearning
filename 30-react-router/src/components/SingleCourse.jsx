import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
//import NotFound from './NotFound';
import { useEffect } from 'react';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);
  // Simple show NotFound component
  // if (!course) {
  //     return (
  //       <>
  //         <NotFound />
  //         <Link to=".." relative="path">
  //           All courses
  //         </Link>
  //       </>
  //     );
  //   }

  // course? - нужно для того, чтобы undefined не обрабатывался
  return (
    <>
      <h1>{course?.title}</h1>
      <h3>{course?.slug}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
