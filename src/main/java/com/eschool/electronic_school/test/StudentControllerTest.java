package com.eschool.electronic_school.test;

import com.eschool.electronic_school.domain.Student;
import com.eschool.electronic_school.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;
import org.testng.annotations.Test;

import java.util.List;

public class StudentControllerTest {
    @Test(priority = 1)
    void findAllStudentsTest(){
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        List<Student> students = session.selectList("findAllStudents");
        session.commit();
        session.close();

        listStudents(students);
    }

    @Test(priority = 2)
    void addStudentTest(){
        Student student = new Student(1L, "TestName", "TestSurname", "2000-01-01", "TEST");
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        session.insert("addStudent", student);
        List<Student> students = session.selectList("findAllStudents");
        session.commit();
        session.close();

        listStudents(students);
    }

    @Test(priority = 3)
    void deleteStudentTest(){
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        session.delete("deleteStudent", 1L);
        List<Student> students = session.selectList("findAllStudents");
        session.commit();
        session.close();
        listStudents(students);
    }

    void listStudents(List<Student> students){
        for (Student st:
                students) {
            System.out.println(st.getId() + " " + st.getName() + " " + st.getSurname() + "" +
                    " " + st.getBirthdate() + " " + st.getSpecialty());
        }
    }
}
