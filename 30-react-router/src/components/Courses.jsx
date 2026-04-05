import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import courses from '../data/courses';

const SORT_KEYS = ['title', 'slig', 'id'];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  /* Получаем строку запроса из браузера */
  const location = useLocation();
  /* Конвертируем строку запроса в объект */
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  /* Если есть sort, то присваиваем его sortKey */
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey),
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey(undefined);
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);
  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      <div className="coursesContent">
        {sortedCourses.map((course) => (
          <Link to={course.slug} key={course.id}>
            {course.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Courses;
