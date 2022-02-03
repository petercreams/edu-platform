import Courses from "../../User/Courses";
import styles from "./EditPermissionsModal.module.scss";
import { useState, useEffect } from "react";

export default function EditPermissionsModal({
  closeHandler,
  user,
  setModalProps,
}) {
  const addNoteHandler = () => {
    // const data = {
    //   id: (Math.random() * 10 + 10).toFixed(),
    //   timeStamp: videoProps.currentTime,
    //   noteTitle: noteTitle.current.value,
    //   noteText: noteText.current.value,
    // };

    // comments.unshift(data);
    setModalProps((prevState) => {
      return { ...prevState, isEditCourseOpen: false };
    });
  };

  const [coursesProps, setCoursesProps] = useState({
    selectedCourses: [],
    addedCourses: [],
    deletedCourses: [],
  });

  useEffect(() => {
    setCoursesProps((prevState) => {
      return {
        ...prevState,
        selectedCourses: [...prevState.selectedCourses],
      };
    });
  }, [coursesProps.addedCourses, coursesProps.deletedCourses]);

  useEffect(() => {
    setCoursesProps((prevState) => {
      return {
        ...prevState,
        selectedCourses: user.courses,
      };
    });
  }, []);

  const handleDelete = (index) => {
    console.log(index);

    let deletedCourse = coursesProps.selectedCourses[index];

    console.log(deletedCourse);

    setCoursesProps((prevState) => {
      return {
        ...prevState,
        deletedCourses: [...prevState.deletedCourses, deletedCourse],
        selectedCourses: [...prevState.selectedCourses.splice(index, 1)],
      };
    });
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.top_bar}>
        <h1>Edit user's permissions</h1>
        <img onClick={closeHandler} src="/icons/exit.svg" />
      </div>
      <div className={styles.options_container}>
        <p>
          User: <b>{user.name}</b>
        </p>

        <p id={styles.selected}>Selected Courses: </p>
        <div className={styles.activeCourses_container}>
          {coursesProps.selectedCourses.map((course, index) => {
            return (
              <ul>
                <li>
                  <b>{course}</b>
                </li>
                <img
                  onClick={() => handleDelete(index)}
                  src="/icons/exit.svg"
                />
              </ul>
            );
          })}
        </div>

        <div className={styles.deleteCourses_container}>
          <p id={styles.selected}>Deleted courses:</p>
          {coursesProps.deletedCourses.map((course, index) => {
            return (
              <ul>
                <li>
                  <b>{course}</b>
                </li>
                {/* <img
                    onClick={() => handleDelete(index)}
                    src="/icons/exit.svg"
                  /> */}
              </ul>
            );
          })}
          {/* <ul>
            <li>{coursesProps.deletedCourses}</li>
          </ul> */}
        </div>

        <p>Add course:</p>
        <input
          list="courses"
          style={{ fontWeight: "bold" }}
          placeholder="Select course..."
        />
        <datalist id="courses">
          {/* {Courses.courses.map(course => {return{
                <option value={course.name}}>
            }})} */}
          <option value="Test" />
          <option value="Physics o" />
          <option value="Math for" />
        </datalist>

        <div className={styles.buttons_container}>
          <button onClick={closeHandler}>Cancel</button>

          <button onClick={addNoteHandler} id={styles.long_button}>
            Confirm changes
          </button>
        </div>
      </div>
    </div>
  );
}
