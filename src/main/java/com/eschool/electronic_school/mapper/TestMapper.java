package com.eschool.electronic_school.mapper;

import com.eschool.electronic_school.domain.Student;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface TestMapper {
    @Select("SELECT * FROM students")
    List<Student> getAllStudents();
}
