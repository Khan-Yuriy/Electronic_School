package com.eschool.electronic_school;

import com.eschool.electronic_school.domain.Student;
import com.eschool.electronic_school.domain.User;
import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MappedTypes({Student.class, User.class})
@MapperScan("com.eschool.electronic_school.mapper")
@SpringBootApplication
public class ElectronicSchoolApplication {
    public static void main(String[] args) {
        SpringApplication.run(ElectronicSchoolApplication.class, args);
    }

}
