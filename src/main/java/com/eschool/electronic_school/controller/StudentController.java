package com.eschool.electronic_school.controller;

import com.eschool.electronic_school.domain.Student;
import com.eschool.electronic_school.mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.testng.annotations.Test;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentMapper studentMapper;

    private final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    @GetMapping("/all")
    public List<Student> getAll(){
        if(studentMapper.findAll().isEmpty()) {
            studentMapper.add(new Student(null, "Yuriy", "Khan",
                    dateFormat.format(new Date(100, 9, 31, 0, 0, 0)),
                    "CSSE"));
            studentMapper.add(new Student(null, "Alisher", "Zakirov",
                    dateFormat.format(new Date(100, 3, 8, 0, 0, 0)),
                    "IS"));
            studentMapper.add(new Student(null, "Anton", "Kim",
                    dateFormat.format(new Date(100, 8, 21, 0, 0, 0)),
                    "ISS"));
        }
        return studentMapper.findAll();
    }

    @PostMapping("/add")
    public void add(@RequestBody Student student){
        studentMapper.add(student);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable(name = "id") Long id){
        studentMapper.delete(id);
    }

    @PutMapping("/edit")
    public void edit(@RequestBody Student student){
        Student oldStudent = studentMapper.find(student.getId());
        System.out.println(student.getId() + " " + student.getName());
        if(oldStudent != null){
            oldStudent.setName(student.getName());
            oldStudent.setSurname(student.getSurname());
            oldStudent.setBirthdate(student.getBirthdate());
            oldStudent.setSpecialty(student.getSpecialty());
            studentMapper.update(oldStudent);
        }
    }
}
