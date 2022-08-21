package com.eschool.electronic_school.mapper;

import com.eschool.electronic_school.domain.User;
import com.eschool.electronic_school.util.MyBatisUtil;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserMapper {

    public List<User> findAll(){
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        List<User> users = session.selectList("findAllUsers");
        session.commit();
        session.close();
        return users;
    }

    public void add(User user){
        SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
        session.insert("addUser", user);
        session.commit();
        session.close();
    }
}
