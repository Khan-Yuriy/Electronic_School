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
}
//package com.eschool.electronic_school.mapper;
//
//        import com.eschool.electronic_school.domain.Student;
//        import org.apache.ibatis.annotations.Delete;
//        import org.apache.ibatis.annotations.Insert;
//        import org.apache.ibatis.annotations.Mapper;
//        import org.apache.ibatis.annotations.Select;
//
//        import javax.websocket.server.PathParam;
//        import java.util.List;
//
//@Mapper
//public interface StudentMapper {
//
//    @Select("select * from students")
//    List<Student> findAll();
//
//    @Insert("insert into students(id, name, surname, birthdate, specialty) values " +
//            "(#{id}, #{name}, #{surname}, #{birthdate}, #{specialty})")
//    void add(Student student);
//
//    @Delete("delete from students where id=#{id}")
//    void delete(@PathParam("id") Long id);
//}
