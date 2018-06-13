package com.myalice.domain;

import java.util.Date;

import javax.validation.GroupSequence;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.myalice.utils.ValidGroup;

@GroupSequence({ValidGroup.Second.class , ValidGroup.Frist.class , Users.class})
public class Users {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.id
     *
     * @mbg.generated
     */
	@NotBlank(message = "{users.id}" , groups={ValidGroup.Frist.class})
    private String id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.username
     *
     * @mbg.generated
     */
    @NotBlank(message = "{users.username.null}" , groups={ValidGroup.Second.class , ValidGroup.Frist.class})
	@Pattern(regexp="^[a-z|A-Z|0-9]+$" , message = "{users.username}", groups={ValidGroup.Second.class, ValidGroup.Frist.class})
    private String username;
    
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.password
     *
     * @mbg.generated
     */
    private String password;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.name
     *
     * @mbg.generated
     */
    private String name;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.email
     *
     * @mbg.generated
     */
    @NotBlank(message = "{users.email}" , groups={ValidGroup.Second.class, ValidGroup.Frist.class})
    private String email;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.mobile_phone
     *
     * @mbg.generated
     */
    private String mobilePhone;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.create_time
     *
     * @mbg.generated
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.remarks
     *
     * @mbg.generated
     */
    private String remarks;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.user_type
     *
     * @mbg.generated
     */
    private String userType;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.portrait_url
     *
     * @mbg.generated
     */
    private String portraitUrl;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column users.enabled
     *
     * @mbg.generated
     */
    private Boolean enabled;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.id
     *
     * @return the value of users.id
     *
     * @mbg.generated
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.id
     *
     * @param id the value for users.id
     *
     * @mbg.generated
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.username
     *
     * @return the value of users.username
     *
     * @mbg.generated
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.username
     *
     * @param username the value for users.username
     *
     * @mbg.generated
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.password
     *
     * @return the value of users.password
     *
     * @mbg.generated
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.password
     *
     * @param password the value for users.password
     *
     * @mbg.generated
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.name
     *
     * @return the value of users.name
     *
     * @mbg.generated
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.name
     *
     * @param name the value for users.name
     *
     * @mbg.generated
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.email
     *
     * @return the value of users.email
     *
     * @mbg.generated
     */
    public String getEmail() {
        return email;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.email
     *
     * @param email the value for users.email
     *
     * @mbg.generated
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.mobile_phone
     *
     * @return the value of users.mobile_phone
     *
     * @mbg.generated
     */
    public String getMobilePhone() {
        return mobilePhone;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.mobile_phone
     *
     * @param mobilePhone the value for users.mobile_phone
     *
     * @mbg.generated
     */
    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.create_time
     *
     * @return the value of users.create_time
     *
     * @mbg.generated
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.create_time
     *
     * @param createTime the value for users.create_time
     *
     * @mbg.generated
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.remarks
     *
     * @return the value of users.remarks
     *
     * @mbg.generated
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.remarks
     *
     * @param remarks the value for users.remarks
     *
     * @mbg.generated
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.user_type
     *
     * @return the value of users.user_type
     *
     * @mbg.generated
     */
    public String getUserType() {
        return userType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.user_type
     *
     * @param userType the value for users.user_type
     *
     * @mbg.generated
     */
    public void setUserType(String userType) {
        this.userType = userType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.portrait_url
     *
     * @return the value of users.portrait_url
     *
     * @mbg.generated
     */
    public String getPortraitUrl() {
        return portraitUrl;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.portrait_url
     *
     * @param portraitUrl the value for users.portrait_url
     *
     * @mbg.generated
     */
    public void setPortraitUrl(String portraitUrl) {
        this.portraitUrl = portraitUrl;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column users.enabled
     *
     * @return the value of users.enabled
     *
     * @mbg.generated
     */
    public Boolean getEnabled() {
        return enabled;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column users.enabled
     *
     * @param enabled the value for users.enabled
     *
     * @mbg.generated
     */
    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
}