package com.eschool.electronic_school.mapper;

import com.eschool.electronic_school.domain.Student;
import com.eschool.electronic_school.util.MyBatisUtil;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import javax.websocket.server.PathParam;
import java.util.List;

@Repository
public class StudentMapper {

    public List<Student> findAll(){
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        List<Student> students = session.selectList("findAllStudents");
        session.commit();
        session.close();
        return students;
    }

    public void add(Student student) {
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        session.insert("addStudent", student);
        session.commit();
        session.close();
    }

    public void delete(@PathParam("id") Long id){
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        session.delete("deleteStudent", id);
        session.commit();
        session.close();
    }

    public Student find(@PathParam("id") Long id){
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        Student student = session.selectOne("findStudent", id);
        session.commit();
        session.close();
        return student;
    }

    public void update(Student student){
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        session.update("updateStudent", student);
        session.commit();
        session.close();
    }
}
