package com.myalice.domain;

import java.util.Date;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.myalice.utils.ValidGroup;

public class QuestionRecord extends BaseDomain{
    
	private static final long serialVersionUID = 1L;
	
    private String id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column question_record.create_time
     *
     * @mbg.generated
     */
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column question_record.content
     *
     * @mbg.generated
     */
    @NotBlank(message = "{qr.content.null}" , groups={ValidGroup.Second.class , ValidGroup.Frist.class})
    @Length(min=15 , message= "{qr.content.min}", groups={ValidGroup.Second.class , ValidGroup.Frist.class})
    private String content;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column question_record.commit_user
     *
     * @mbg.generated
     */
    private String commitUser;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column question_record.userType
     *
     * @mbg.generated
     */
    private Byte usertype;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column question_record.question_order_id
     *
     * @mbg.generated
     */
    private String questionOrderId;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_record.id
     *
     * @return the value of question_record.id
     *
     * @mbg.generated
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_record.id
     *
     * @param id the value for question_record.id
     *
     * @mbg.generated
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_record.create_time
     *
     * @return the value of question_record.create_time
     *
     * @mbg.generated
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_record.create_time
     *
     * @param createTime the value for question_record.create_time
     *
     * @mbg.generated
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_record.content
     *
     * @return the value of question_record.content
     *
     * @mbg.generated
     */
    public String getContent() {
        return content;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_record.content
     *
     * @param content the value for question_record.content
     *
     * @mbg.generated
     */
    public void setContent(String content) {
        this.content = content;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_record.commit_user
     *
     * @return the value of question_record.commit_user
     *
     * @mbg.generated
     */
    public String getCommitUser() {
        return commitUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_record.commit_user
     *
     * @param commitUser the value for question_record.commit_user
     *
     * @mbg.generated
     */
    public void setCommitUser(String commitUser) {
        this.commitUser = commitUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_record.userType
     *
     * @return the value of question_record.userType
     *
     * @mbg.generated
     */
    public Byte getUsertype() {
        return usertype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_record.userType
     *
     * @param usertype the value for question_record.userType
     *
     * @mbg.generated
     */
    public void setUsertype(Byte usertype) {
        this.usertype = usertype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column question_record.question_order_id
     *
     * @return the value of question_record.question_order_id
     *
     * @mbg.generated
     */
    public String getQuestionOrderId() {
        return questionOrderId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column question_record.question_order_id
     *
     * @param questionOrderId the value for question_record.question_order_id
     *
     * @mbg.generated
     */
    public void setQuestionOrderId(String questionOrderId) {
        this.questionOrderId = questionOrderId;
    }
}