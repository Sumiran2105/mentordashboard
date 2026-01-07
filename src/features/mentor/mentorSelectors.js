import { createSelector } from "@reduxjs/toolkit";

/* =========================
   Base Selector
========================== */
const selectMentor = (state) => state.mentor;

/* =========================
   Mentor Info
========================== */
export const selectMentorInfo = createSelector(
  [selectMentor],
  (mentor) => mentor?.mentorInfo ?? null
);

/* =========================
   Students List
========================== */
export const selectStudents = createSelector(
  [selectMentor],
  (mentor) => mentor?.students ?? []
);

/* =========================
   Student By ID (IMPORTANT)
========================== */
export const selectStudentById = (studentId) =>
  createSelector([selectStudents], (students) =>
    students.find((s) => s.id === studentId) || null
  );
